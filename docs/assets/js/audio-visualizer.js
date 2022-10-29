// This is my original shadertoy https://www.shadertoy.com/view/wd3XzS
// This codepen is a copy of it.
// Currently using this shader for testing: https://www.shadertoy.com/view/Xds3Rr
// Song https://www.shadertoy.com/media/a/3c33c415862bb7964d256f4749408247da6596f2167dca2c86cc38f83c244aa6.mp3
// https://some-static-stuff.qwzx.repl.co/assets/audio/electronebulae.mp3
// Song 2 https://soundcloud.com/top_knot/feel-the-bass

const vsSource = `#version 300 es

in vec4 aVertexPosition;

void main() {
      gl_Position = aVertexPosition;
}
`;

const fsSource = `#version 300 es

precision highp float;

uniform float iTime;
uniform sampler2D iChannel0;

out vec4 fragColor;

float sigmoid(float x)
{
    return 1. / (1. + exp(x));
}

vec3 sigmoid(vec3 xyz)
{
    return vec3(sigmoid(xyz.x), sigmoid(xyz.y), sigmoid(xyz.z));
}

float sample_at(float f)
{
    return texture(iChannel0, vec2(f / 16.0, 0.)).x;
    // return texelFetch(iChannel0, ivec2(f / 16.0, 0.), 0).x;
}

float sample_multiple(float f)
{
    float delta = .1;
    return 0.2 * (sample_at(f - 2. * delta) + sample_at(f - delta) + sample_at(f) + sample_at(f + delta) + sample_at(f + 2. * delta));
}

void main()
{
    vec2 iResolution = vec2(1280, 720);
    vec2 fragCoord = gl_FragCoord.xy;
    vec2 uv = (fragCoord.xy - 0.5) / iResolution.xy;
    uv = 2. * uv - 1.;
    uv.x *= iResolution.x/iResolution.y;

    vec2 center = vec2(0.);// 0.5 * vec2(cos(iTime), sin(iTime));
    float d = length(uv - center);

    float amplitude = sample_multiple(d * d);
    d -= amplitude;
    float weird = sigmoid(abs(uv.x) * abs(uv.y));
    float speed = 6. * amplitude * sin(iTime * weird * 0.005) * 0.001;
    float dist_diagonal = abs(abs(uv.x) - abs(uv.y));
    dist_diagonal += d * amplitude;
    dist_diagonal *= dist_diagonal;
    amplitude += .1 / (.1 + smoothstep(1., 0.1, dist_diagonal));
    float brightness = 3. * amplitude * sigmoid(sin(d * d * 16. - speed * iTime + 2. * speed * amplitude));

    vec3 col = sigmoid(vec3(uv, sin(iTime)));

    fragColor = vec4(col * brightness,1.0);
}
`;

function initShaderProgram(gl) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);
  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert(
      `Unable to initialize the shader program: ${gl.getProgramInfoLog(
        shaderProgram
      )}`
    );
    return null;
  }
  return shaderProgram;
}

function loadShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(
      `An error occurred compiling the shaders: ${gl.getShaderInfoLog(shader)}`
    );
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function initBuffers(gl) {
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  const positions = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  return { position: positionBuffer };
}

function drawScene(gl, programInfo, buffers) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
  gl.clearDepth(1.0); // Clear everything
  gl.enable(gl.DEPTH_TEST); // Enable depth testing
  gl.depthFunc(gl.LEQUAL); // Near things obscure far things
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Tell WebGL how to pull out the positions from the position
  // buffer into the vertexPosition attribute.
  {
    const numComponents = 2; // pull out 2 values per iteration
    const normalize = false; // don't normalize
    const stride = 0; // how many bytes to get from one set of values to the next
    // 0 = use type and numComponents above
    const offset = 0; // how many bytes inside the buffer to start from
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
      programInfo.attribLocations.vertexPosition,
      numComponents,
      gl.FLOAT,
      normalize,
      stride,
      offset
    );
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
  }
  gl.useProgram(programInfo.program);
  {
    // Tell WebGL we want to affect texture unit 0
    gl.activeTexture(gl.TEXTURE0);
    // Bind the texture to texture unit 0
    gl.bindTexture(gl.TEXTURE_2D, programInfo.texture);
    // Tell the shader we bound the texture to texture unit 0
    gl.uniform1i(programInfo.uniformLocations.iChannel0, 0);
  }
  updateFrame(gl);
}

function updateFrame(gl) {
  const offset = 0;
  const vertexCount = 4;
  gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
}

function get_data_2(data, audioData, audioDataFreq) {
  for (let i = 0, j = 0; i < 512 * 4; i += 4, j++) {
    data[i + 0] = audioDataFreq[j % audioDataFreq.length] % 256;
    data[i + 1] = 0;
    data[i + 2] = 0;
    data[i + 3] = 255;
  }
  for (let i = 512 * 4, j = 0; i < 2 * 512 * 4; i += 4, j++) {
    data[i + 0] = audioData[j % audioData.length] % 256;
    data[i + 1] = 0;
    data[i + 2] = 0;
    data[i + 3] = 255;
  }
}

function loadTexture(gl) {
  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);

  const data = new Uint8Array(512 * 2 * 4);

  const level = 0;
  const internalFormat = gl.RGBA;
  const width = 512;
  const height = 2;
  const border = 0;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  gl.texImage2D(
    gl.TEXTURE_2D,
    level,
    internalFormat,
    width,
    height,
    border,
    srcFormat,
    srcType,
    data
  );

  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

  return { texture, data };
}

function updateTexture(gl, data) {
  const level = 0;
  const internalFormat = gl.RGBA;
  const width = 512;
  const height = 2;
  const border = 0;
  const srcFormat = gl.RGBA;
  const srcType = gl.UNSIGNED_BYTE;
  gl.texImage2D(
    gl.TEXTURE_2D,
    level,
    internalFormat,
    width,
    height,
    border,
    srcFormat,
    srcType,
    data
  );
}

function getAudioContext() {
  return new (window.AudioContext || window.webkitAudioContext)();
}

function initAudio() {
  const audioCtx = getAudioContext();

  const analyser = audioCtx.createAnalyser();
  analyser.fftSize = 2048;
  const bufferLength = analyser.frequencyBinCount;
  console.log("bufferLength", bufferLength);
  const dataArray = new Uint8Array(bufferLength);
  const dataArrayFreq = new Uint8Array(bufferLength);

  const myMediaElement = document.querySelector("#audio-song-1");
  const source = audioCtx.createMediaElementSource(myMediaElement);

  source.connect(analyser);
  analyser.connect(audioCtx.destination);
  myMediaElement.play();

  analyser.getByteTimeDomainData(dataArray);
  analyser.getByteFrequencyData(dataArrayFreq);
  return { analyser, dataArray, dataArrayFreq, bufferLength };
}

function start() {
  const can_out = document.querySelector("#can-out");
  const gl = can_out.getContext("webgl2");
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  const shaderProgram = initShaderProgram(gl);
  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition")
    },
    uniformLocations: {
      iChannel0: gl.getUniformLocation(shaderProgram, "iChannel0"),
      iTime:gl.getUniformLocation(shaderProgram, "iTime"), 
    }
  };
  const buffers = initBuffers(gl);
  const { texture, data } = loadTexture(gl);
  programInfo.texture = texture;
  drawScene(gl, programInfo, buffers);
  const { analyser, dataArray, dataArrayFreq, bufferLength } = initAudio();

  let last_t = null;
  const TT = 1;
  function step(t) {
    requestAnimationFrame(step);
    if (!last_t) last_t = t;
    if (t - last_t < TT) return;
    last_t = t;
    analyser.getByteTimeDomainData(dataArray);
    analyser.getByteFrequencyData(dataArrayFreq);

    get_data_2(data, dataArray, dataArrayFreq);
    updateTexture(gl, data);
    gl.uniform1f(programInfo.uniformLocations.iTime, t*0.0005);
    updateFrame(gl);
  }
  requestAnimationFrame(step);
}

function main() {
  const audio_song_1 = document.querySelector("#audio-song-1");
  const button_play = document.querySelector("#button-play");
  button_play.addEventListener("click", () => {
    start();
    button_play.classList.add("hidden");
    audio_song_1.classList.remove("hidden");
  });
}

main();
