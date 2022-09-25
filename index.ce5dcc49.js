// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"96vqb":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "32968fb5ce5dcc49";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hDgCW":[function(require,module,exports) {
var _litElement = require("lit-element");
var _wavesElement = require("@haribala/waves-element");
class MainView extends (0, _litElement.LitElement) {
    static get styles() {
        return (0, _litElement.css)`
            :host
            {
                --charcoal: #2d3033;
                --color-gold: #fcbb34;
                --color-cyan: rgb(0, 180, 240);
                --color-darker-cyan: rgb(0, 140, 200);

                --back-color: var(--charcoal);
                --text-color: white;
                --highlight-color: var(--color-gold);

                display: grid;
                height: 100%;
                font-size: 16px;
            }
            .wrapper
            {
                padding: 1em;
                background-color: var(--back-color);
                color: var(--text-color);
                font-family: 'Montserrat', sans-serif;
            }
            header
            {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            h1
            {
                margin: 0;
                font-size: 2.75em;
                line-height: 1.5;
                letter-spacing: 0em;
                font-weight: 400;
            }
            a
            {
                text-decoration: none;
                color: var(--color-cyan);
            }
            a:hover
            {
                color: var(--color-darker-cyan);
            }
            .highlight
            {
                color: transparent;
                text-shadow: 0 0 0 var(--highlight-color);
            }
            .max-width-overflow>iframe
            {
                width: 100%;
            }
            .text-align-center
            {
                text-align: center;
            }
            .donut-wrapper
            {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
            .donut-wrapper>h2
            {
                margin: 0;
            }
        `;
    }
    render() {
        return (0, _litElement.html)`
        <div class="wrapper">
            <header>
                <h1 class="text-align-center">Harikrishnan Balagopal</h1>
                <h2 class="text-align-center">Software Engineer at IBM Research, IIT Kanpur Alumnus</h2>
            </header>
            <section>
                <div class="donut-wrapper">
                    <h2>Thanks for visiting my page!</h2>
                    <h2><a target="_blank" href="/asciidonut">Click here for a complimentary donut! 🍩 (Don't worry, it's zero calories.)</a></h2>
                </div>
                <h2>About Me</h2>
                <p>
                    I joined IBM Research as a Software Engineer in 2020.
                    I did my Masters in Computer Science and Engineering at IIT Kanpur (2018-2020).
                    I am from Kerala, India.
                    My interests include designing Cloud Native apps, Deep Learning, Computer Vision and Computer Graphics.
                    For my thesis work, researched different ways to generate videos using GANs.
                    Research areas include Docker, Kubernetes, Openshift, WASM, container optimization for the Edge, etc.
                    Currently working as a maintainer for the open source <a target="_blank" href="https://move2kube.konveyor.io">Move2Kube</a> project
                    <a target="_blank" href="https://landscape.cncf.io/card-mode?project=sandbox&selected=konveyor">(which is now officially a CNCF sandbox project).</a>
                    Interested in security research, cryptography, blockchains, Web3 and formal verfication as a hobby.
                </p>
                <h2>About This Website</h2>
                <p>
                    This is my personal website. I have included links to my codepen and some awesome <span class="highlight">❤</span> stuff (mostly related to javascript) below.
                    I have always been interested in Science and Technology, especially Computer Science and Physics, so I created this website to share some of the stuff I have found interesting over the years.
                </p>
            </section>
            <section>
                <h2>Favourite languages</h2>
                <ul>
                    <li>Golang</li>
                    <li>Python</li>
                    <li>Javascript/Typescript</li>
                    <li>Haskell</li>
                    <li>Rust</li>
                    <li>C/C++</li>
                </ul>
            </section>
            <section class="max-width-overflow">
                <h2>Some of my shadertoy shaders</h2>
                <p>To avoid overloading your device the shaders are paused. Hover over them to show the controls and click play to see them in action. Some of them are also interactive.</p>
                <iframe height="360" frameborder="0" src="https://www.shadertoy.com/embed/3d3XRf?gui=true&t=10&paused=true&muted=false" allowfullscreen></iframe>
                <iframe height="360" frameborder="0" src="https://www.shadertoy.com/embed/wd3XzS?gui=true&t=10&paused=true&muted=false" allowfullscreen></iframe>
                <iframe height="360" frameborder="0" src="https://www.shadertoy.com/embed/3dVSzR?gui=true&t=10&paused=true&muted=false" allowfullscreen></iframe>
                <iframe height="360" frameborder="0" src="https://www.shadertoy.com/embed/wdyXDV?gui=true&t=10&paused=true&muted=false" allowfullscreen></iframe>
            </section>
            <section class="max-width-overflow">
                <h2>Indian Railways delay visualization</h2>
                <p>Visualization created as part of main project for CS685 Data Mining course at IIT Kanpur. <a href="https://github.com/HarikrishnanBalagopalIITK/IndianRailwaysDelayMap" target="_blank">Github repo.</a></p>
                <iframe width="640" height="640" frameborder="0" src="https://harikrishnanbalagopaliitk.github.io/IndianRailwaysDelayMap/" allowfullscreen></iframe>
            </section>
            <section>
                <h2>Waves</h2>
                <p>
                    This is a web component I made using LitElement and WebGL 2. It is available on NPM: <a href="https://www.npmjs.com/package/@haribala/waves-element" target="_blank">@haribala/waves-element</a>. Click and drag to create ripples in the pond.
                </p>
                <waves-element></waves-element>
            </section>
            <section>
                <h2>Some of my more interesting repos</h2>
                <p>
                    <a target="_blank" href="https://github.com/HarikrishnanBalagopal/gdb-gui">GDB GUI</a>
                    A graphical user interface to interact with the GNU Debugger (GDB). Includes a console pass-through so you can pass more complicated commands directly to GDB. Written in <a target="_blank" href="https://elm-lang.org/">ELM</a>.
                    Originally built because I was developing exploits in games and got tired of the severe lack of user friendliness of GDB's console interface.
                </p>
                <p>
                    <a target="_blank" href="https://github.com/HarikrishnanBalagopal/parser-generator">Parse Generator Library</a>
                    A CLR(1) parser generator for Javascript. Lexer not included. Built because I wanted to automatically generate compilers for programming language grammers specified in Backus–Naur form.
                </p>
                <p>
                    <a target="_blank" href="https://github.com/HarikrishnanBalagopal/chrome-audio-visualizer">Chrome Audio Visualizer</a>
                    A audio visualizer extension for chrome. Made specifically for Youtube.
                </p>
                <p>
                    <a target="_blank" href="https://github.com/HarikrishnanBalagopal/HarikrishnanBalagopal.github.io">Old website</a>
                    My old website built using React.
                </p>
                <p>
                    <a target="_blank" href="https://harikrishnanbalagopal.github.io/s2_symbolic_fuzzing.pdf">Research slides</a>
                    Research on Symbolic Execution to automatically perform formal verfication of programs.
                </p>
            </section>
            <footer>
                <h2>Awesome Stuff <span class="highlight">❤</span></h2>
                <ul>
                    <li><a target="_blank" href="https://codepen.io/collection/waqNOY">Some of my better codepens</a></li>
                    <li><a target="_blank" href="https://codepen.io/collection/AMvJZW/">Some more of my better codepens.</a></li>
                    <li><a target="_blank" href="http://madebyevan.com/webgl-path-tracing/">WebGL Path Tracing</a></li>
                    <li><a target="_blank" href="http://aem1k.com/">Javascript Hacks and Creative Coding</a></li>
                    <li><a target="_blank" href="http://aem1k.com/world/">Spinning Globe Quine</a></li>
                    <li><a target="_blank" href="https://www.shadertoy.com/view/ldlSzX">Synthetic Aperture shader</a></li>
                    <li><a target="_blank" href="https://youtu.be/n0kn4mDXY6I">First fully automated DEFCON CTF held by DARPA</a></li>
                    <li><a target="_blank" href="https://youtu.be/RTxtiLp1C8Y">Martin Kleppe: 1024+ Seconds of JS Wizardry -- JSConf EU 2013</a></li>
                </ul>
            </footer>
        </div>
        `;
    }
}
customElements.define("main-view", MainView);

},{"lit-element":"d1gon","@haribala/waves-element":"9FAJU"}],"d1gon":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ReactiveElement", ()=>(0, _updatingElementJs.UpdatingElement));
parcelHelpers.export(exports, "html", ()=>(0, _litHtmlJs.html));
parcelHelpers.export(exports, "svg", ()=>(0, _litHtmlJs.svg));
parcelHelpers.export(exports, "TemplateResult", ()=>(0, _litHtmlJs.TemplateResult));
parcelHelpers.export(exports, "SVGTemplateResult", ()=>(0, _litHtmlJs.SVGTemplateResult));
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the [[`properties`]] property or the [[`property`]] decorator.
 */ parcelHelpers.export(exports, "LitElement", ()=>LitElement);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ /**
 * The main LitElement module, which defines the [[`LitElement`]] base class and
 * related APIs.
 *
 *  LitElement components can define a template and a set of observed
 * properties. Changing an observed property triggers a re-render of the
 * element.
 *
 *  Import [[`LitElement`]] and [[`html`]] from this module to create a
 * component:
 *
 *  ```js
 * import {LitElement, html} from 'lit-element';
 *
 * class MyElement extends LitElement {
 *
 *   // Declare observed properties
 *   static get properties() {
 *     return {
 *       adjective: {}
 *     }
 *   }
 *
 *   constructor() {
 *     this.adjective = 'awesome';
 *   }
 *
 *   // Define the element's template
 *   render() {
 *     return html`<p>your ${adjective} template here</p>`;
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 * ```
 *
 * `LitElement` extends [[`UpdatingElement`]] and adds lit-html templating.
 * The `UpdatingElement` class is provided for users that want to build
 * their own custom element base classes that don't use lit-html.
 *
 * @packageDocumentation
 */ var _shadyRenderJs = require("lit-html/lib/shady-render.js");
var _updatingElementJs = require("./lib/updating-element.js");
var _cssTagJs = require("./lib/css-tag.js");
parcelHelpers.exportAll(_updatingElementJs, exports);
var _decoratorsJs = require("./lib/decorators.js");
parcelHelpers.exportAll(_decoratorsJs, exports);
var _litHtmlJs = require("lit-html/lit-html.js");
parcelHelpers.exportAll(_cssTagJs, exports);
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time
(window["litElementVersions"] || (window["litElementVersions"] = [])).push("2.5.1");
/**
 * Sentinal value used to avoid calling lit-html's render function when
 * subclasses do not implement `render`
 */ const renderNotImplemented = {};
class LitElement extends (0, _updatingElementJs.UpdatingElement) {
    /**
     * Return the array of styles to apply to the element.
     * Override this method to integrate into a style management system.
     *
     * @nocollapse
     */ static getStyles() {
        return this.styles;
    }
    /** @nocollapse */ static _getUniqueStyles() {
        // Only gather styles once per class
        if (this.hasOwnProperty(JSCompiler_renameProperty("_styles", this))) return;
        // Take care not to call `this.getStyles()` multiple times since this
        // generates new CSSResults each time.
        // TODO(sorvell): Since we do not cache CSSResults by input, any
        // shared styles will generate new stylesheet objects, which is wasteful.
        // This should be addressed when a browser ships constructable
        // stylesheets.
        const userStyles = this.getStyles();
        if (Array.isArray(userStyles)) {
            // De-duplicate styles preserving the _last_ instance in the set.
            // This is a performance optimization to avoid duplicated styles that can
            // occur especially when composing via subclassing.
            // The last item is kept to try to preserve the cascade order with the
            // assumption that it's most important that last added styles override
            // previous styles.
            const addStyles = (styles, set)=>styles.reduceRight((set, s)=>// Note: On IE set.add() does not return the set
                    Array.isArray(s) ? addStyles(s, set) : (set.add(s), set), set);
            // Array.from does not work on Set in IE, otherwise return
            // Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()
            const set = addStyles(userStyles, new Set());
            const styles = [];
            set.forEach((v)=>styles.unshift(v));
            this._styles = styles;
        } else this._styles = userStyles === undefined ? [] : [
            userStyles
        ];
        // Ensure that there are no invalid CSSStyleSheet instances here. They are
        // invalid in two conditions.
        // (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
        //     this is impossible to check except via .replaceSync or use
        // (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
        //     false)
        this._styles = this._styles.map((s)=>{
            if (s instanceof CSSStyleSheet && !(0, _cssTagJs.supportsAdoptingStyleSheets)) {
                // Flatten the cssText from the passed constructible stylesheet (or
                // undetectable non-constructible stylesheet). The user might have
                // expected to update their stylesheets over time, but the alternative
                // is a crash.
                const cssText = Array.prototype.slice.call(s.cssRules).reduce((css, rule)=>css + rule.cssText, "");
                return (0, _cssTagJs.unsafeCSS)(cssText);
            }
            return s;
        });
    }
    /**
     * Performs element initialization. By default this calls
     * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
     * captures any pre-set values for registered properties.
     */ initialize() {
        super.initialize();
        this.constructor._getUniqueStyles();
        this.renderRoot = this.createRenderRoot();
        // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
        // element's getRootNode(). While this could be done, we're choosing not to
        // support this now since it would require different logic around de-duping.
        if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) this.adoptStyles();
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */ createRenderRoot() {
        return this.attachShadow(this.constructor.shadowRootOptions);
    }
    /**
     * Applies styling to the element shadowRoot using the [[`styles`]]
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */ adoptStyles() {
        const styles = this.constructor._styles;
        if (styles.length === 0) return;
        // There are three separate cases here based on Shadow DOM support.
        // (1) shadowRoot polyfilled: use ShadyCSS
        // (2) shadowRoot.adoptedStyleSheets available: use it
        // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
        // rendering
        if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s)=>s.cssText), this.localName);
        else if (0, _cssTagJs.supportsAdoptingStyleSheets) this.renderRoot.adoptedStyleSheets = styles.map((s)=>s instanceof CSSStyleSheet ? s : s.styleSheet);
        else // This must be done after rendering so the actual style insertion is done
        // in `update`.
        this._needsShimAdoptedStyleSheets = true;
    }
    connectedCallback() {
        super.connectedCallback();
        // Note, first update/render handles styleElement so we only call this if
        // connected after first update.
        if (this.hasUpdated && window.ShadyCSS !== undefined) window.ShadyCSS.styleElement(this);
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * @param _changedProperties Map of changed properties with old values
     */ update(changedProperties) {
        // Setting properties in `render` should not trigger an update. Since
        // updates are allowed after super.update, it's important to call `render`
        // before that.
        const templateResult = this.render();
        super.update(changedProperties);
        // If render is not implemented by the component, don't call lit-html render
        if (templateResult !== renderNotImplemented) this.constructor.render(templateResult, this.renderRoot, {
            scopeName: this.localName,
            eventContext: this
        });
        // When native Shadow DOM is used but adoptedStyles are not supported,
        // insert styling after rendering to ensure adoptedStyles have highest
        // priority.
        if (this._needsShimAdoptedStyleSheets) {
            this._needsShimAdoptedStyleSheets = false;
            this.constructor._styles.forEach((s)=>{
                const style = document.createElement("style");
                style.textContent = s.cssText;
                this.renderRoot.appendChild(style);
            });
        }
    }
    /**
     * Invoked on each update to perform rendering tasks. This method may return
     * any value renderable by lit-html's `NodePart` - typically a
     * `TemplateResult`. Setting properties inside this method will *not* trigger
     * the element to update.
     */ render() {
        return renderNotImplemented;
    }
}
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See updating-element.ts for more information.
 */ LitElement["finalized"] = true;
/**
 * Reference to the underlying library method used to render the element's
 * DOM. By default, points to the `render` method from lit-html's shady-render
 * module.
 *
 * **Most users will never need to touch this property.**
 *
 * This  property should not be confused with the `render` instance method,
 * which should be overridden to define a template for the element.
 *
 * Advanced users creating a new base class based on LitElement can override
 * this property to point to a custom render method with a signature that
 * matches [shady-render's `render`
 * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
 *
 * @nocollapse
 */ LitElement.render = (0, _shadyRenderJs.render);
/** @nocollapse */ LitElement.shadowRootOptions = {
    mode: "open"
};

},{"lit-html/lib/shady-render.js":"cGC5H","./lib/updating-element.js":"k2RBO","./lib/css-tag.js":"g3nVJ","./lib/decorators.js":"d62Oa","lit-html/lit-html.js":"a81rX","@parcel/transformer-js/src/esmodule-helpers.js":"9pns4"}],"cGC5H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "html", ()=>(0, _litHtmlJs.html));
parcelHelpers.export(exports, "svg", ()=>(0, _litHtmlJs.svg));
parcelHelpers.export(exports, "TemplateResult", ()=>(0, _litHtmlJs.TemplateResult));
parcelHelpers.export(exports, "shadyTemplateFactory", ()=>shadyTemplateFactory);
parcelHelpers.export(exports, "render", ()=>render);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ /**
 * Module to add shady DOM/shady CSS polyfill support to lit-html template
 * rendering. See the [[render]] method for details.
 *
 * @packageDocumentation
 */ /**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */ var _domJs = require("./dom.js");
var _modifyTemplateJs = require("./modify-template.js");
var _renderJs = require("./render.js");
var _templateFactoryJs = require("./template-factory.js");
var _templateInstanceJs = require("./template-instance.js");
var _templateJs = require("./template.js");
var _litHtmlJs = require("../lit-html.js");
// Get a key to lookup in `templateCaches`.
const getTemplateCacheKey = (type, scopeName)=>`${type}--${scopeName}`;
let compatibleShadyCSSVersion = true;
if (typeof window.ShadyCSS === "undefined") compatibleShadyCSSVersion = false;
else if (typeof window.ShadyCSS.prepareTemplateDom === "undefined") {
    console.warn(`Incompatible ShadyCSS version detected. ` + `Please update to at least @webcomponents/webcomponentsjs@2.0.2 and ` + `@webcomponents/shadycss@1.3.1.`);
    compatibleShadyCSSVersion = false;
}
const shadyTemplateFactory = (scopeName)=>(result)=>{
        const cacheKey = getTemplateCacheKey(result.type, scopeName);
        let templateCache = (0, _templateFactoryJs.templateCaches).get(cacheKey);
        if (templateCache === undefined) {
            templateCache = {
                stringsArray: new WeakMap(),
                keyString: new Map()
            };
            (0, _templateFactoryJs.templateCaches).set(cacheKey, templateCache);
        }
        let template = templateCache.stringsArray.get(result.strings);
        if (template !== undefined) return template;
        const key = result.strings.join((0, _templateJs.marker));
        template = templateCache.keyString.get(key);
        if (template === undefined) {
            const element = result.getTemplateElement();
            if (compatibleShadyCSSVersion) window.ShadyCSS.prepareTemplateDom(element, scopeName);
            template = new (0, _templateJs.Template)(result, element);
            templateCache.keyString.set(key, template);
        }
        templateCache.stringsArray.set(result.strings, template);
        return template;
    };
const TEMPLATE_TYPES = [
    "html",
    "svg"
];
/**
 * Removes all style elements from Templates for the given scopeName.
 */ const removeStylesFromLitTemplates = (scopeName)=>{
    TEMPLATE_TYPES.forEach((type)=>{
        const templates = (0, _templateFactoryJs.templateCaches).get(getTemplateCacheKey(type, scopeName));
        if (templates !== undefined) templates.keyString.forEach((template)=>{
            const { element: { content  }  } = template;
            // IE 11 doesn't support the iterable param Set constructor
            const styles = new Set();
            Array.from(content.querySelectorAll("style")).forEach((s)=>{
                styles.add(s);
            });
            (0, _modifyTemplateJs.removeNodesFromTemplate)(template, styles);
        });
    });
};
const shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */ const prepareTemplateStyles = (scopeName, renderedDOM, template)=>{
    shadyRenderSet.add(scopeName);
    // If `renderedDOM` is stamped from a Template, then we need to edit that
    // Template's underlying template element. Otherwise, we create one here
    // to give to ShadyCSS, which still requires one while scoping.
    const templateElement = !!template ? template.element : document.createElement("template");
    // Move styles out of rendered DOM and store.
    const styles = renderedDOM.querySelectorAll("style");
    const { length  } = styles;
    // If there are no styles, skip unnecessary work
    if (length === 0) {
        // Ensure prepareTemplateStyles is called to support adding
        // styles via `prepareAdoptedCssText` since that requires that
        // `prepareTemplateStyles` is called.
        //
        // ShadyCSS will only update styles containing @apply in the template
        // given to `prepareTemplateStyles`. If no lit Template was given,
        // ShadyCSS will not be able to update uses of @apply in any relevant
        // template. However, this is not a problem because we only create the
        // template for the purpose of supporting `prepareAdoptedCssText`,
        // which doesn't support @apply at all.
        window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
        return;
    }
    const condensedStyle = document.createElement("style");
    // Collect styles into a single style. This helps us make sure ShadyCSS
    // manipulations will not prevent us from being able to fix up template
    // part indices.
    // NOTE: collecting styles is inefficient for browsers but ShadyCSS
    // currently does this anyway. When it does not, this should be changed.
    for(let i = 0; i < length; i++){
        const style = styles[i];
        style.parentNode.removeChild(style);
        condensedStyle.textContent += style.textContent;
    }
    // Remove styles from nested templates in this scope.
    removeStylesFromLitTemplates(scopeName);
    // And then put the condensed style into the "root" template passed in as
    // `template`.
    const content = templateElement.content;
    if (!!template) (0, _modifyTemplateJs.insertNodeIntoTemplate)(template, condensedStyle, content.firstChild);
    else content.insertBefore(condensedStyle, content.firstChild);
    // Note, it's important that ShadyCSS gets the template that `lit-html`
    // will actually render so that it can update the style inside when
    // needed (e.g. @apply native Shadow DOM case).
    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
    const style1 = content.querySelector("style");
    if (window.ShadyCSS.nativeShadow && style1 !== null) // When in native Shadow DOM, ensure the style created by ShadyCSS is
    // included in initially rendered output (`renderedDOM`).
    renderedDOM.insertBefore(style1.cloneNode(true), renderedDOM.firstChild);
    else if (!!template) {
        // When no style is left in the template, parts will be broken as a
        // result. To fix this, we put back the style node ShadyCSS removed
        // and then tell lit to remove that node from the template.
        // There can be no style in the template in 2 cases (1) when Shady DOM
        // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
        // is in use ShadyCSS removes the style if it contains no content.
        // NOTE, ShadyCSS creates its own style so we can safely add/remove
        // `condensedStyle` here.
        content.insertBefore(condensedStyle, content.firstChild);
        const removes = new Set();
        removes.add(condensedStyle);
        (0, _modifyTemplateJs.removeNodesFromTemplate)(template, removes);
    }
};
const render = (result, container, options)=>{
    if (!options || typeof options !== "object" || !options.scopeName) throw new Error("The `scopeName` option is required.");
    const scopeName = options.scopeName;
    const hasRendered = (0, _renderJs.parts).has(container);
    const needsScoping = compatibleShadyCSSVersion && container.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */  && !!container.host;
    // Handle first render to a scope specially...
    const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
    // On first scope render, render into a fragment; this cannot be a single
    // fragment that is reused since nested renders can occur synchronously.
    const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
    (0, _renderJs.render)(result, renderContainer, Object.assign({
        templateFactory: shadyTemplateFactory(scopeName)
    }, options));
    // When performing first scope render,
    // (1) We've rendered into a fragment so that there's a chance to
    // `prepareTemplateStyles` before sub-elements hit the DOM
    // (which might cause them to render based on a common pattern of
    // rendering in a custom element's `connectedCallback`);
    // (2) Scope the template with ShadyCSS one time only for this scope.
    // (3) Render the fragment into the container and make sure the
    // container knows its `part` is the one we just rendered. This ensures
    // DOM will be re-used on subsequent renders.
    if (firstScopeRender) {
        const part = (0, _renderJs.parts).get(renderContainer);
        (0, _renderJs.parts).delete(renderContainer);
        // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
        // that should apply to `renderContainer` even if the rendered value is
        // not a TemplateInstance. However, it will only insert scoped styles
        // into the document if `prepareTemplateStyles` has already been called
        // for the given scope name.
        const template = part.value instanceof (0, _templateInstanceJs.TemplateInstance) ? part.value.template : undefined;
        prepareTemplateStyles(scopeName, renderContainer, template);
        (0, _domJs.removeNodes)(container, container.firstChild);
        container.appendChild(renderContainer);
        (0, _renderJs.parts).set(container, part);
    }
    // After elements have hit the DOM, update styling if this is the
    // initial render to this container.
    // This is needed whenever dynamic changes are made so it would be
    // safest to do every render; however, this would regress performance
    // so we leave it up to the user to call `ShadyCSS.styleElement`
    // for dynamic changes.
    if (!hasRendered && needsScoping) window.ShadyCSS.styleElement(container.host);
};

},{"./dom.js":"foIVI","./modify-template.js":"1OiVg","./render.js":"66gzz","./template-factory.js":"c7dXI","./template-instance.js":"5yznp","./template.js":"lM7HN","../lit-html.js":"a81rX","@parcel/transformer-js/src/esmodule-helpers.js":"9pns4"}],"foIVI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCEPolyfill", ()=>isCEPolyfill);
parcelHelpers.export(exports, "reparentNodes", ()=>reparentNodes);
parcelHelpers.export(exports, "removeNodes", ()=>removeNodes);
const isCEPolyfill = typeof window !== "undefined" && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== undefined;
const reparentNodes = (container, start, end = null, before = null)=>{
    while(start !== end){
        const n = start.nextSibling;
        container.insertBefore(start, before);
        start = n;
    }
};
const removeNodes = (container, start, end = null)=>{
    while(start !== end){
        const n = start.nextSibling;
        container.removeChild(start);
        start = n;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9pns4"}],"9pns4":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1OiVg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */ parcelHelpers.export(exports, "removeNodesFromTemplate", ()=>removeNodesFromTemplate);
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */ parcelHelpers.export(exports, "insertNodeIntoTemplate", ()=>insertNodeIntoTemplate);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ var _templateJs = require("./template.js");
const walkerNodeFilter = 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */ ;
function removeNodesFromTemplate(template, nodesToRemove) {
    const { element: { content  } , parts  } = template;
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let part = parts[partIndex];
    let nodeIndex = -1;
    let removeCount = 0;
    const nodesToRemoveInTemplate = [];
    let currentRemovingNode = null;
    while(walker.nextNode()){
        nodeIndex++;
        const node = walker.currentNode;
        // End removal if stepped past the removing node
        if (node.previousSibling === currentRemovingNode) currentRemovingNode = null;
        // A node to remove was found in the template
        if (nodesToRemove.has(node)) {
            nodesToRemoveInTemplate.push(node);
            // Track node we're removing
            if (currentRemovingNode === null) currentRemovingNode = node;
        }
        // When removing, increment count by which to adjust subsequent part indices
        if (currentRemovingNode !== null) removeCount++;
        while(part !== undefined && part.index === nodeIndex){
            // If part is in a removed node deactivate it by setting index to -1 or
            // adjust the index as needed.
            part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
            // go to the next active part.
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
            part = parts[partIndex];
        }
    }
    nodesToRemoveInTemplate.forEach((n)=>n.parentNode.removeChild(n));
}
const countNodes = (node)=>{
    let count = node.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */  ? 0 : 1;
    const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
    while(walker.nextNode())count++;
    return count;
};
const nextActiveIndexInTemplateParts = (parts, startIndex = -1)=>{
    for(let i = startIndex + 1; i < parts.length; i++){
        const part = parts[i];
        if ((0, _templateJs.isTemplatePartActive)(part)) return i;
    }
    return -1;
};
function insertNodeIntoTemplate(template, node, refNode = null) {
    const { element: { content  } , parts  } = template;
    // If there's no refNode, then put node at end of template.
    // No part indices need to be shifted in this case.
    if (refNode === null || refNode === undefined) {
        content.appendChild(node);
        return;
    }
    const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    let partIndex = nextActiveIndexInTemplateParts(parts);
    let insertCount = 0;
    let walkerIndex = -1;
    while(walker.nextNode()){
        walkerIndex++;
        const walkerNode = walker.currentNode;
        if (walkerNode === refNode) {
            insertCount = countNodes(node);
            refNode.parentNode.insertBefore(node, refNode);
        }
        while(partIndex !== -1 && parts[partIndex].index === walkerIndex){
            // If we've inserted the node, simply adjust all subsequent parts
            if (insertCount > 0) {
                while(partIndex !== -1){
                    parts[partIndex].index += insertCount;
                    partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                }
                return;
            }
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }
    }
}

},{"./template.js":"lM7HN","@parcel/transformer-js/src/esmodule-helpers.js":"9pns4"}],"lM7HN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "marker", ()=>marker);
parcelHelpers.export(exports, "nodeMarker", ()=>nodeMarker);
parcelHelpers.export(exports, "markerRegex", ()=>markerRegex);
parcelHelpers.export(exports, "boundAttributeSuffix", ()=>boundAttributeSuffix);
/**
 * An updatable Template that tracks the location of dynamic parts.
 */ parcelHelpers.export(exports, "Template", ()=>Template);
parcelHelpers.export(exports, "isTemplatePartActive", ()=>isTemplatePartActive);
parcelHelpers.export(exports, "createMarker", ()=>createMarker);
parcelHelpers.export(exports, "lastAttributeNameRegex", ()=>lastAttributeNameRegex);
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
const boundAttributeSuffix = "$lit$";
class Template {
    constructor(result, element){
        this.parts = [];
        this.element = element;
        const nodesToRemove = [];
        const stack = [];
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */ , null, false);
        // Keeps track of the last index associated with a part. We try to delete
        // unnecessary nodes, but we never want to associate two different parts
        // to the same index. They must have a constant node between.
        let lastPartIndex = 0;
        let index = -1;
        let partIndex = 0;
        const { strings , values: { length  }  } = result;
        while(partIndex < length){
            const node = walker.nextNode();
            if (node === null) {
                // We've exhausted the content inside a nested template element.
                // Because we still have parts (the outer for-loop), we know:
                // - There is a template in the stack
                // - The walker will find a nextNode outside the template
                walker.currentNode = stack.pop();
                continue;
            }
            index++;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */ ) {
                if (node.hasAttributes()) {
                    const attributes = node.attributes;
                    const { length: length1  } = attributes;
                    // Per
                    // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                    // attributes are not guaranteed to be returned in document order.
                    // In particular, Edge/IE can return them out of order, so we cannot
                    // assume a correspondence between part index and attribute index.
                    let count = 0;
                    for(let i = 0; i < length1; i++)if (endsWith(attributes[i].name, boundAttributeSuffix)) count++;
                    while(count-- > 0){
                        // Get the template literal section leading up to the first
                        // expression in this attribute
                        const stringForPart = strings[partIndex];
                        // Find the attribute name
                        const name = lastAttributeNameRegex.exec(stringForPart)[2];
                        // Find the corresponding attribute
                        // All bound attributes have had a suffix added in
                        // TemplateResult#getHTML to opt out of special attribute
                        // handling. To look up the attribute value we also need to add
                        // the suffix.
                        const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                        const attributeValue = node.getAttribute(attributeLookupName);
                        node.removeAttribute(attributeLookupName);
                        const statics = attributeValue.split(markerRegex);
                        this.parts.push({
                            type: "attribute",
                            index,
                            name,
                            strings: statics
                        });
                        partIndex += statics.length - 1;
                    }
                }
                if (node.tagName === "TEMPLATE") {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
            } else if (node.nodeType === 3 /* Node.TEXT_NODE */ ) {
                const data = node.data;
                if (data.indexOf(marker) >= 0) {
                    const parent = node.parentNode;
                    const strings1 = data.split(markerRegex);
                    const lastIndex = strings1.length - 1;
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for(let i1 = 0; i1 < lastIndex; i1++){
                        let insert;
                        let s = strings1[i1];
                        if (s === "") insert = createMarker();
                        else {
                            const match = lastAttributeNameRegex.exec(s);
                            if (match !== null && endsWith(match[2], boundAttributeSuffix)) s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                            insert = document.createTextNode(s);
                        }
                        parent.insertBefore(insert, node);
                        this.parts.push({
                            type: "node",
                            index: ++index
                        });
                    }
                    // If there's no text, we must insert a comment to mark our place.
                    // Else, we can trust it will stick around after cloning.
                    if (strings1[lastIndex] === "") {
                        parent.insertBefore(createMarker(), node);
                        nodesToRemove.push(node);
                    } else node.data = strings1[lastIndex];
                    // We have a part for each match found
                    partIndex += lastIndex;
                }
            } else if (node.nodeType === 8 /* Node.COMMENT_NODE */ ) {
                if (node.data === marker) {
                    const parent1 = node.parentNode;
                    // Add a new marker node to be the startNode of the Part if any of
                    // the following are true:
                    //  * We don't have a previousSibling
                    //  * The previousSibling is already the start of a previous part
                    if (node.previousSibling === null || index === lastPartIndex) {
                        index++;
                        parent1.insertBefore(createMarker(), node);
                    }
                    lastPartIndex = index;
                    this.parts.push({
                        type: "node",
                        index
                    });
                    // If we don't have a nextSibling, keep this node so we have an end.
                    // Else, we can remove it to save future costs.
                    if (node.nextSibling === null) node.data = "";
                    else {
                        nodesToRemove.push(node);
                        index--;
                    }
                    partIndex++;
                } else {
                    let i2 = -1;
                    while((i2 = node.data.indexOf(marker, i2 + 1)) !== -1){
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        // TODO (justinfagnani): consider whether it's even worth it to
                        // make bindings in comments work
                        this.parts.push({
                            type: "node",
                            index: -1
                        });
                        partIndex++;
                    }
                }
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove)n.parentNode.removeChild(n);
    }
}
const endsWith = (str, suffix)=>{
    const index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
};
const isTemplatePartActive = (part)=>part.index !== -1;
const createMarker = ()=>document.createComment("");
const lastAttributeNameRegex = // eslint-disable-next-line no-control-regex
/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9pns4"}],"66gzz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "parts", ()=>parts);
parcelHelpers.export(exports, "render", ()=>render);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ var _domJs = require("./dom.js");
var _partsJs = require("./parts.js");
var _templateFactoryJs = require("./template-factory.js");
const parts = new WeakMap();
const render = (result, container, options)=>{
    let part = parts.get(container);
    if (part === undefined) {
        (0, _domJs.removeNodes)(container, container.firstChild);
        parts.set(container, part = new (0, _partsJs.NodePart)(Object.assign({
            templateFactory: (0, _templateFactoryJs.templateFactory)
        }, options)));
        part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
};

},{"./dom.js":"foIVI","./parts.js":"1yruf","./template-factory.js":"c7dXI","@parcel/transformer-js/src/esmodule-helpers.js":"9pns4"}],"1yruf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPrimitive", ()=>isPrimitive);
parcelHelpers.export(exports, "isIterable", ()=>isIterable);
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attribute. The value is only set once even if there are multiple parts
 * for an attribute.
 */ parcelHelpers.export(exports, "AttributeCommitter", ()=>AttributeCommitter);
/**
 * A Part that controls all or part of an attribute value.
 */ parcelHelpers.export(exports, "AttributePart", ()=>AttributePart);
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */ parcelHelpers.export(exports, "NodePart", ()=>NodePart);
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */ parcelHelpers.export(exports, "BooleanAttributePart", ()=>BooleanAttributePart);
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */ parcelHelpers.export(exports, "PropertyCommitter", ()=>PropertyCommitter);
parcelHelpers.export(exports, "PropertyPart", ()=>PropertyPart);
parcelHelpers.export(exports, "EventPart", ()=>EventPart);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ var _directiveJs = require("./directive.js");
var _domJs = require("./dom.js");
var _partJs = require("./part.js");
var _templateInstanceJs = require("./template-instance.js");
var _templateResultJs = require("./template-result.js");
var _templateJs = require("./template.js");
const isPrimitive = (value)=>{
    return value === null || !(typeof value === "object" || typeof value === "function");
};
const isIterable = (value)=>{
    return Array.isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
    !!(value && value[Symbol.iterator]);
};
class AttributeCommitter {
    constructor(element, name, strings){
        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for(let i = 0; i < strings.length - 1; i++)this.parts[i] = this._createPart();
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */ _createPart() {
        return new AttributePart(this);
    }
    _getValue() {
        const strings = this.strings;
        const l = strings.length - 1;
        const parts = this.parts;
        // If we're assigning an attribute via syntax like:
        //    attr="${foo}"  or  attr=${foo}
        // but not
        //    attr="${foo} ${bar}" or attr="${foo} baz"
        // then we don't want to coerce the attribute value into one long
        // string. Instead we want to just return the value itself directly,
        // so that sanitizeDOMValue can get the actual value rather than
        // String(value)
        // The exception is if v is an array, in which case we do want to smash
        // it together into a string without calling String() on the array.
        //
        // This also allows trusted values (when using TrustedTypes) being
        // assigned to DOM sinks without being stringified in the process.
        if (l === 1 && strings[0] === "" && strings[1] === "") {
            const v = parts[0].value;
            if (typeof v === "symbol") return String(v);
            if (typeof v === "string" || !isIterable(v)) return v;
        }
        let text = "";
        for(let i = 0; i < l; i++){
            text += strings[i];
            const part = parts[i];
            if (part !== undefined) {
                const v1 = part.value;
                if (isPrimitive(v1) || !isIterable(v1)) text += typeof v1 === "string" ? v1 : String(v1);
                else for (const t of v1)text += typeof t === "string" ? t : String(t);
            }
        }
        text += strings[l];
        return text;
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            this.element.setAttribute(this.name, this._getValue());
        }
    }
}
class AttributePart {
    constructor(committer){
        this.value = undefined;
        this.committer = committer;
    }
    setValue(value) {
        if (value !== (0, _partJs.noChange) && (!isPrimitive(value) || value !== this.value)) {
            this.value = value;
            // If the value is a not a directive, dirty the committer so that it'll
            // call setAttribute. If the value is a directive, it'll dirty the
            // committer if it calls setValue().
            if (!(0, _directiveJs.isDirective)(value)) this.committer.dirty = true;
        }
    }
    commit() {
        while((0, _directiveJs.isDirective)(this.value)){
            const directive = this.value;
            this.value = (0, _partJs.noChange);
            directive(this);
        }
        if (this.value === (0, _partJs.noChange)) return;
        this.committer.commit();
    }
}
class NodePart {
    constructor(options){
        this.value = undefined;
        this.__pendingValue = undefined;
        this.options = options;
    }
    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */ appendInto(container) {
        this.startNode = container.appendChild((0, _templateJs.createMarker)());
        this.endNode = container.appendChild((0, _templateJs.createMarker)());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */ insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */ appendIntoPart(part) {
        part.__insert(this.startNode = (0, _templateJs.createMarker)());
        part.__insert(this.endNode = (0, _templateJs.createMarker)());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */ insertAfterPart(ref) {
        ref.__insert(this.startNode = (0, _templateJs.createMarker)());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        if (this.startNode.parentNode === null) return;
        while((0, _directiveJs.isDirective)(this.__pendingValue)){
            const directive = this.__pendingValue;
            this.__pendingValue = (0, _partJs.noChange);
            directive(this);
        }
        const value = this.__pendingValue;
        if (value === (0, _partJs.noChange)) return;
        if (isPrimitive(value)) {
            if (value !== this.value) this.__commitText(value);
        } else if (value instanceof (0, _templateResultJs.TemplateResult)) this.__commitTemplateResult(value);
        else if (value instanceof Node) this.__commitNode(value);
        else if (isIterable(value)) this.__commitIterable(value);
        else if (value === (0, _partJs.nothing)) {
            this.value = (0, _partJs.nothing);
            this.clear();
        } else // Fallback, will render the string representation
        this.__commitText(value);
    }
    __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    __commitNode(value) {
        if (this.value === value) return;
        this.clear();
        this.__insert(value);
        this.value = value;
    }
    __commitText(value) {
        const node = this.startNode.nextSibling;
        value = value == null ? "" : value;
        // If `value` isn't already a string, we explicitly convert it here in case
        // it can't be implicitly converted - i.e. it's a symbol.
        const valueAsString = typeof value === "string" ? value : String(value);
        if (node === this.endNode.previousSibling && node.nodeType === 3 /* Node.TEXT_NODE */ ) // If we only have a single text node between the markers, we can just
        // set its value, rather than replacing it.
        // TODO(justinfagnani): Can we just check if this.value is primitive?
        node.data = valueAsString;
        else this.__commitNode(document.createTextNode(valueAsString));
        this.value = value;
    }
    __commitTemplateResult(value) {
        const template = this.options.templateFactory(value);
        if (this.value instanceof (0, _templateInstanceJs.TemplateInstance) && this.value.template === template) this.value.update(value.values);
        else {
            // Make sure we propagate the template processor from the TemplateResult
            // so that we use its syntax extension, etc. The template factory comes
            // from the render function options so that it can control template
            // caching and preprocessing.
            const instance = new (0, _templateInstanceJs.TemplateInstance)(template, value.processor, this.options);
            const fragment = instance._clone();
            instance.update(value.values);
            this.__commitNode(fragment);
            this.value = instance;
        }
    }
    __commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
            this.value = [];
            this.clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this.value;
        let partIndex = 0;
        let itemPart;
        for (const item of value){
            // Try to reuse an existing part
            itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                itemPart = new NodePart(this.options);
                itemParts.push(itemPart);
                if (partIndex === 0) itemPart.appendIntoPart(this);
                else itemPart.insertAfterPart(itemParts[partIndex - 1]);
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
            this.clear(itemPart && itemPart.endNode);
        }
    }
    clear(startNode = this.startNode) {
        (0, _domJs.removeNodes)(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
}
class BooleanAttributePart {
    constructor(element, name, strings){
        this.value = undefined;
        this.__pendingValue = undefined;
        if (strings.length !== 2 || strings[0] !== "" || strings[1] !== "") throw new Error("Boolean attributes can only contain a single expression");
        this.element = element;
        this.name = name;
        this.strings = strings;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while((0, _directiveJs.isDirective)(this.__pendingValue)){
            const directive = this.__pendingValue;
            this.__pendingValue = (0, _partJs.noChange);
            directive(this);
        }
        if (this.__pendingValue === (0, _partJs.noChange)) return;
        const value = !!this.__pendingValue;
        if (this.value !== value) {
            if (value) this.element.setAttribute(this.name, "");
            else this.element.removeAttribute(this.name);
            this.value = value;
        }
        this.__pendingValue = (0, _partJs.noChange);
    }
}
class PropertyCommitter extends AttributeCommitter {
    constructor(element, name, strings){
        super(element, name, strings);
        this.single = strings.length === 2 && strings[0] === "" && strings[1] === "";
    }
    _createPart() {
        return new PropertyPart(this);
    }
    _getValue() {
        if (this.single) return this.parts[0].value;
        return super._getValue();
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.element[this.name] = this._getValue();
        }
    }
}
class PropertyPart extends AttributePart {
}
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the third
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported = false;
// Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
// blocks right into the body of a module
(()=>{
    try {
        const options = {
            get capture () {
                eventOptionsSupported = true;
                return false;
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.addEventListener("test", options, options);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        window.removeEventListener("test", options, options);
    } catch (_e) {
    // event options not supported
    }
})();
class EventPart {
    constructor(element, eventName, eventContext){
        this.value = undefined;
        this.__pendingValue = undefined;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this.__boundHandleEvent = (e)=>this.handleEvent(e);
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while((0, _directiveJs.isDirective)(this.__pendingValue)){
            const directive = this.__pendingValue;
            this.__pendingValue = (0, _partJs.noChange);
            directive(this);
        }
        if (this.__pendingValue === (0, _partJs.noChange)) return;
        const newListener = this.__pendingValue;
        const oldListener = this.value;
        const shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
        const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        if (shouldAddListener) {
            this.__options = getOptions(newListener);
            this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        this.value = newListener;
        this.__pendingValue = (0, _partJs.noChange);
    }
    handleEvent(event) {
        if (typeof this.value === "function") this.value.call(this.eventContext || this.element, event);
        else this.value.handleEvent(event);
    }
}
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const getOptions = (o)=>o && (eventOptionsSupported ? {
        capture: o.capture,
        passive: o.passive,
        once: o.once
    } : o.capture);

},{"./directive.js":"aiEIG","./dom.js":"foIVI","./part.js":"eevwU","./template-instance.js":"5yznp","./template-result.js":"4qxVC","./template.js":"lM7HN","@parcel/transformer-js/src/esmodule-helpers.js":"9pns4"}],"aiEIG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "directive", ()=>directive);
parcelHelpers.export(exports, "isDirective", ()=>isDirective);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ const directives = new WeakMap();
const directive = (f)=>(...args)=>{
        const d = f(...args);
        directives.set(d, true);
        return d;
    };
const isDirective = (o)=>{
    return typeof o === "function" && directives.has(o);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9pns4"}],"eevwU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "noChange", ()=>noChange);
parcelHelpers.export(exports, "nothing", ()=>nothing);
const noChange = {};
const nothing = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9pns4"}],"5yznp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */ parcelHelpers.export(exports, "TemplateInstance", ()=>TemplateInstance);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ var _domJs = require("./dom.js");
var _templateJs = require("./template.js");
class TemplateInstance {
    constructor(template, processor, options){
        this.__parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }
    update(values) {
        let i = 0;
        for (const part of this.__parts){
            if (part !== undefined) part.setValue(values[i]);
            i++;
        }
        for (const part1 of this.__parts)if (part1 !== undefined) part1.commit();
    }
    _clone() {
        // There are a number of steps in the lifecycle of a template instance's
        // DOM fragment:
        //  1. Clone - create the instance fragment
        //  2. Adopt - adopt into the main document
        //  3. Process - find part markers and create parts
        //  4. Upgrade - upgrade custom elements
        //  5. Update - set node, attribute, property, etc., values
        //  6. Connect - connect to the document. Optional and outside of this
        //     method.
        //
        // We have a few constraints on the ordering of these steps:
        //  * We need to upgrade before updating, so that property values will pass
        //    through any property setters.
        //  * We would like to process before upgrading so that we're sure that the
        //    cloned fragment is inert and not disturbed by self-modifying DOM.
        //  * We want custom elements to upgrade even in disconnected fragments.
        //
        // Given these constraints, with full custom elements support we would
        // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
        //
        // But Safari does not implement CustomElementRegistry#upgrade, so we
        // can not implement that order and still have upgrade-before-update and
        // upgrade disconnected fragments. So we instead sacrifice the
        // process-before-upgrade constraint, since in Custom Elements v1 elements
        // must not modify their light DOM in the constructor. We still have issues
        // when co-existing with CEv0 elements like Polymer 1, and with polyfills
        // that don't strictly adhere to the no-modification rule because shadow
        // DOM, which may be created in the constructor, is emulated by being placed
        // in the light DOM.
        //
        // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
        // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
        // in one step.
        //
        // The Custom Elements v1 polyfill supports upgrade(), so the order when
        // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
        // Connect.
        const fragment = (0, _domJs.isCEPolyfill) ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
        const stack = [];
        const parts = this.template.parts;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */ , null, false);
        let partIndex = 0;
        let nodeIndex = 0;
        let part;
        let node = walker.nextNode();
        // Loop through all the nodes and parts of a template
        while(partIndex < parts.length){
            part = parts[partIndex];
            if (!(0, _templateJs.isTemplatePartActive)(part)) {
                this.__parts.push(undefined);
                partIndex++;
                continue;
            }
            // Progress the tree walker until we find our next part's node.
            // Note that multiple parts may share the same node (attribute parts
            // on a single element), so this loop may not run at all.
            while(nodeIndex < part.index){
                nodeIndex++;
                if (node.nodeName === "TEMPLATE") {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
                if ((node = walker.nextNode()) === null) {
                    // We've exhausted the content inside a nested template element.
                    // Because we still have parts (the outer for-loop), we know:
                    // - There is a template in the stack
                    // - The walker will find a nextNode outside the template
                    walker.currentNode = stack.pop();
                    node = walker.nextNode();
                }
            }
            // We've arrived at our part's node.
            if (part.type === "node") {
                const part1 = this.processor.handleTextExpression(this.options);
                part1.insertAfterNode(node.previousSibling);
                this.__parts.push(part1);
            } else this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
            partIndex++;
        }
        if (0, _domJs.isCEPolyfill) {
            document.adoptNode(fragment);
            customElements.upgrade(fragment);
        }
        return fragment;
    }
}

},{"./dom.js":"foIVI","./template.js":"lM7HN","@parcel/transformer-js/src/esmodule-helpers.js":"9pns4"}],"4qxVC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */ parcelHelpers.export(exports, "TemplateResult", ()=>TemplateResult);
/**
 * A TemplateResult for SVG fragments.
 *
 * This class wraps HTML in an `<svg>` tag in order to parse its contents in the
 * SVG namespace, then modifies the template to remove the `<svg>` tag so that
 * clones only container the original fragment.
 */ parcelHelpers.export(exports, "SVGTemplateResult", ()=>SVGTemplateResult);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ /**
 * @module lit-html
 */ var _domJs = require("./dom.js");
var _templateJs = require("./template.js");
/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */ const policy = window.trustedTypes && trustedTypes.createPolicy("lit-html", {
    createHTML: (s)=>s
});
const commentMarker = ` ${(0, _templateJs.marker)} `;
class TemplateResult {
    constructor(strings, values, type, processor){
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */ getHTML() {
        const l = this.strings.length - 1;
        let html = "";
        let isCommentBinding = false;
        for(let i = 0; i < l; i++){
            const s = this.strings[i];
            // For each binding we want to determine the kind of marker to insert
            // into the template source before it's parsed by the browser's HTML
            // parser. The marker type is based on whether the expression is in an
            // attribute, text, or comment position.
            //   * For node-position bindings we insert a comment with the marker
            //     sentinel as its text content, like <!--{{lit-guid}}-->.
            //   * For attribute bindings we insert just the marker sentinel for the
            //     first binding, so that we support unquoted attribute bindings.
            //     Subsequent bindings can use a comment marker because multi-binding
            //     attributes must be quoted.
            //   * For comment bindings we insert just the marker sentinel so we don't
            //     close the comment.
            //
            // The following code scans the template source, but is *not* an HTML
            // parser. We don't need to track the tree structure of the HTML, only
            // whether a binding is inside a comment, and if not, if it appears to be
            // the first binding in an attribute.
            const commentOpen = s.lastIndexOf("<!--");
            // We're in comment position if we have a comment open with no following
            // comment close. Because <-- can appear in an attribute value there can
            // be false positives.
            isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf("-->", commentOpen + 1) === -1;
            // Check to see if we have an attribute-like sequence preceding the
            // expression. This can match "name=value" like structures in text,
            // comments, and attribute values, so there can be false-positives.
            const attributeMatch = (0, _templateJs.lastAttributeNameRegex).exec(s);
            if (attributeMatch === null) // We're only in this branch if we don't have a attribute-like
            // preceding sequence. For comments, this guards against unusual
            // attribute values like <div foo="<!--${'bar'}">. Cases like
            // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
            // below.
            html += s + (isCommentBinding ? commentMarker : (0, _templateJs.nodeMarker));
            else // For attributes we use just a marker sentinel, and also append a
            // $lit$ suffix to the name to opt-out of attribute-specific parsing
            // that IE and Edge do for style and certain SVG attributes.
            html += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + (0, _templateJs.boundAttributeSuffix) + attributeMatch[3] + (0, _templateJs.marker);
        }
        html += this.strings[l];
        return html;
    }
    getTemplateElement() {
        const template = document.createElement("template");
        let value = this.getHTML();
        if (policy !== undefined) // this is secure because `this.strings` is a TemplateStringsArray.
        // TODO: validate this when
        // https://github.com/tc39/proposal-array-is-template-object is
        // implemented.
        value = policy.createHTML(value);
        template.innerHTML = value;
        return template;
    }
}
class SVGTemplateResult extends TemplateResult {
    getHTML() {
        return `<svg>${super.getHTML()}</svg>`;
    }
    getTemplateElement() {
        const template = super.getTemplateElement();
        const content = template.content;
        const svgElement = content.firstChild;
        content.removeChild(svgElement);
        (0, _domJs.reparentNodes)(content, svgElement.firstChild);
        return template;
    }
}

},{"./dom.js":"foIVI","./template.js":"lM7HN","@parcel/transformer-js/src/esmodule-helpers.js":"9pns4"}],"c7dXI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */ parcelHelpers.export(exports, "templateFactory", ()=>templateFactory);
parcelHelpers.export(exports, "templateCaches", ()=>templateCaches);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ var _templateJs = require("./template.js");
function templateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) return template;
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    const key = result.strings.join((0, _templateJs.marker));
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new (0, _templateJs.Template)(result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
}
const templateCaches = new Map();

},{"./template.js":"lM7HN","@parcel/transformer-js/src/esmodule-helpers.js":"9pns4"}],"a81rX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DefaultTemplateProcessor", ()=>(0, _defaultTemplateProcessorJs.DefaultTemplateProcessor));
parcelHelpers.export(exports, "defaultTemplateProcessor", ()=>(0, _defaultTemplateProcessorJs.defaultTemplateProcessor));
parcelHelpers.export(exports, "directive", ()=>(0, _directiveJs.directive));
parcelHelpers.export(exports, "isDirective", ()=>(0, _directiveJs.isDirective));
// TODO(justinfagnani): remove line when we get NodePart moving methods
parcelHelpers.export(exports, "removeNodes", ()=>(0, _domJs.removeNodes));
parcelHelpers.export(exports, "reparentNodes", ()=>(0, _domJs.reparentNodes));
parcelHelpers.export(exports, "noChange", ()=>(0, _partJs.noChange));
parcelHelpers.export(exports, "nothing", ()=>(0, _partJs.nothing));
parcelHelpers.export(exports, "AttributeCommitter", ()=>(0, _partsJs.AttributeCommitter));
parcelHelpers.export(exports, "AttributePart", ()=>(0, _partsJs.AttributePart));
parcelHelpers.export(exports, "BooleanAttributePart", ()=>(0, _partsJs.BooleanAttributePart));
parcelHelpers.export(exports, "EventPart", ()=>(0, _partsJs.EventPart));
parcelHelpers.export(exports, "isIterable", ()=>(0, _partsJs.isIterable));
parcelHelpers.export(exports, "isPrimitive", ()=>(0, _partsJs.isPrimitive));
parcelHelpers.export(exports, "NodePart", ()=>(0, _partsJs.NodePart));
parcelHelpers.export(exports, "PropertyCommitter", ()=>(0, _partsJs.PropertyCommitter));
parcelHelpers.export(exports, "PropertyPart", ()=>(0, _partsJs.PropertyPart));
parcelHelpers.export(exports, "parts", ()=>(0, _renderJs.parts));
parcelHelpers.export(exports, "render", ()=>(0, _renderJs.render));
parcelHelpers.export(exports, "templateCaches", ()=>(0, _templateFactoryJs.templateCaches));
parcelHelpers.export(exports, "templateFactory", ()=>(0, _templateFactoryJs.templateFactory));
parcelHelpers.export(exports, "TemplateInstance", ()=>(0, _templateInstanceJs.TemplateInstance));
parcelHelpers.export(exports, "SVGTemplateResult", ()=>(0, _templateResultJs.SVGTemplateResult));
parcelHelpers.export(exports, "TemplateResult", ()=>(0, _templateResultJs.TemplateResult));
parcelHelpers.export(exports, "createMarker", ()=>(0, _templateJs.createMarker));
parcelHelpers.export(exports, "isTemplatePartActive", ()=>(0, _templateJs.isTemplatePartActive));
parcelHelpers.export(exports, "Template", ()=>(0, _templateJs.Template));
parcelHelpers.export(exports, "html", ()=>html);
parcelHelpers.export(exports, "svg", ()=>svg);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ /**
 *
 * Main lit-html module.
 *
 * Main exports:
 *
 * -  [[html]]
 * -  [[svg]]
 * -  [[render]]
 *
 * @packageDocumentation
 */ /**
 * Do not remove this comment; it keeps typedoc from misplacing the module
 * docs.
 */ var _defaultTemplateProcessorJs = require("./lib/default-template-processor.js");
var _templateResultJs = require("./lib/template-result.js");
var _directiveJs = require("./lib/directive.js");
var _domJs = require("./lib/dom.js");
var _partJs = require("./lib/part.js");
var _partsJs = require("./lib/parts.js");
var _renderJs = require("./lib/render.js");
var _templateFactoryJs = require("./lib/template-factory.js");
var _templateInstanceJs = require("./lib/template-instance.js");
var _templateJs = require("./lib/template.js");
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
if (typeof window !== "undefined") (window["litHtmlVersions"] || (window["litHtmlVersions"] = [])).push("1.4.1");
const html = (strings, ...values)=>new (0, _templateResultJs.TemplateResult)(strings, values, "html", (0, _defaultTemplateProcessorJs.defaultTemplateProcessor));
const svg = (strings, ...values)=>new (0, _templateResultJs.SVGTemplateResult)(strings, values, "svg", (0, _defaultTemplateProcessorJs.defaultTemplateProcessor));

},{"./lib/default-template-processor.js":"ivkN9","./lib/template-result.js":"4qxVC","./lib/directive.js":"aiEIG","./lib/dom.js":"foIVI","./lib/part.js":"eevwU","./lib/parts.js":"1yruf","./lib/render.js":"66gzz","./lib/template-factory.js":"c7dXI","./lib/template-instance.js":"5yznp","./lib/template.js":"lM7HN","@parcel/transformer-js/src/esmodule-helpers.js":"9pns4"}],"ivkN9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Creates Parts when a template is instantiated.
 */ parcelHelpers.export(exports, "DefaultTemplateProcessor", ()=>DefaultTemplateProcessor);
parcelHelpers.export(exports, "defaultTemplateProcessor", ()=>defaultTemplateProcessor);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ var _partsJs = require("./parts.js");
class DefaultTemplateProcessor {
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */ handleAttributeExpressions(element, name, strings, options) {
        const prefix = name[0];
        if (prefix === ".") {
            const committer = new (0, _partsJs.PropertyCommitter)(element, name.slice(1), strings);
            return committer.parts;
        }
        if (prefix === "@") return [
            new (0, _partsJs.EventPart)(element, name.slice(1), options.eventContext)
        ];
        if (prefix === "?") return [
            new (0, _partsJs.BooleanAttributePart)(element, name.slice(1), strings)
        ];
        const committer1 = new (0, _partsJs.AttributeCommitter)(element, name, strings);
        return committer1.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */ handleTextExpression(options) {
        return new (0, _partsJs.NodePart)(options);
    }
}
const defaultTemplateProcessor = new DefaultTemplateProcessor();

},{"./parts.js":"1yruf","@parcel/transformer-js/src/esmodule-helpers.js":"9pns4"}],"k2RBO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultConverter", ()=>defaultConverter);
parcelHelpers.export(exports, "notEqual", ()=>notEqual);
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 * @noInheritDoc
 */ parcelHelpers.export(exports, "UpdatingElement", ()=>UpdatingElement);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ var _a;
/**
 * Use this module if you want to create your own base class extending
 * [[UpdatingElement]].
 * @packageDocumentation
 */ /*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */ window.JSCompiler_renameProperty = (prop, _obj)=>prop;
const defaultConverter = {
    toAttribute (value, type) {
        switch(type){
            case Boolean:
                return value ? "" : null;
            case Object:
            case Array:
                // if the value is `null` or `undefined` pass this through
                // to allow removing/no change behavior.
                return value == null ? value : JSON.stringify(value);
        }
        return value;
    },
    fromAttribute (value, type) {
        switch(type){
            case Boolean:
                return value !== null;
            case Number:
                return value === null ? null : Number(value);
            case Object:
            case Array:
                // Type assert to adhere to Bazel's "must type assert JSON parse" rule.
                return JSON.parse(value);
        }
        return value;
    }
};
const notEqual = (value, old)=>{
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
};
const defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual
};
const STATE_HAS_UPDATED = 1;
const STATE_UPDATE_REQUESTED = 4;
const STATE_IS_REFLECTING_TO_ATTRIBUTE = 8;
const STATE_IS_REFLECTING_TO_PROPERTY = 16;
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */ const finalized = "finalized";
class UpdatingElement extends HTMLElement {
    constructor(){
        super();
        this.initialize();
    }
    /**
     * Returns a list of attributes corresponding to the registered properties.
     * @nocollapse
     */ static get observedAttributes() {
        // note: piggy backing on this to ensure we're finalized.
        this.finalize();
        const attributes = [];
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this._classProperties.forEach((v, p)=>{
            const attr = this._attributeNameForProperty(p, v);
            if (attr !== undefined) {
                this._attributeToPropertyMap.set(attr, p);
                attributes.push(attr);
            }
        });
        return attributes;
    }
    /**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */ /** @nocollapse */ static _ensureClassProperties() {
        // ensure private storage for property declarations.
        if (!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))) {
            this._classProperties = new Map();
            // NOTE: Workaround IE11 not supporting Map constructor argument.
            const superProperties = Object.getPrototypeOf(this)._classProperties;
            if (superProperties !== undefined) superProperties.forEach((v, k)=>this._classProperties.set(k, v));
        }
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist
     * and stores a PropertyDeclaration for the property with the given options.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     *
     * This method may be overridden to customize properties; however,
     * when doing so, it's important to call `super.createProperty` to ensure
     * the property is setup correctly. This method calls
     * `getPropertyDescriptor` internally to get a descriptor to install.
     * To customize what properties do when they are get or set, override
     * `getPropertyDescriptor`. To customize the options for a property,
     * implement `createProperty` like this:
     *
     * static createProperty(name, options) {
     *   options = Object.assign(options, {myOption: true});
     *   super.createProperty(name, options);
     * }
     *
     * @nocollapse
     */ static createProperty(name, options = defaultPropertyDeclaration) {
        // Note, since this can be called by the `@property` decorator which
        // is called before `finalize`, we ensure storage exists for property
        // metadata.
        this._ensureClassProperties();
        this._classProperties.set(name, options);
        // Do not generate an accessor if the prototype already has one, since
        // it would be lost otherwise and that would never be the user's intention;
        // Instead, we expect users to call `requestUpdate` themselves from
        // user-defined accessors. Note that if the super has an accessor we will
        // still overwrite it
        if (options.noAccessor || this.prototype.hasOwnProperty(name)) return;
        const key = typeof name === "symbol" ? Symbol() : `__${name}`;
        const descriptor = this.getPropertyDescriptor(name, key, options);
        if (descriptor !== undefined) Object.defineProperty(this.prototype, name, descriptor);
    }
    /**
     * Returns a property descriptor to be defined on the given named property.
     * If no descriptor is returned, the property will not become an accessor.
     * For example,
     *
     *   class MyElement extends LitElement {
     *     static getPropertyDescriptor(name, key, options) {
     *       const defaultDescriptor =
     *           super.getPropertyDescriptor(name, key, options);
     *       const setter = defaultDescriptor.set;
     *       return {
     *         get: defaultDescriptor.get,
     *         set(value) {
     *           setter.call(this, value);
     *           // custom action.
     *         },
     *         configurable: true,
     *         enumerable: true
     *       }
     *     }
     *   }
     *
     * @nocollapse
     */ static getPropertyDescriptor(name, key, options) {
        return {
            // tslint:disable-next-line:no-any no symbol in index
            get () {
                return this[key];
            },
            set (value) {
                const oldValue = this[name];
                this[key] = value;
                this.requestUpdateInternal(name, oldValue, options);
            },
            configurable: true,
            enumerable: true
        };
    }
    /**
     * Returns the property options associated with the given property.
     * These options are defined with a PropertyDeclaration via the `properties`
     * object or the `@property` decorator and are registered in
     * `createProperty(...)`.
     *
     * Note, this method should be considered "final" and not overridden. To
     * customize the options for a given property, override `createProperty`.
     *
     * @nocollapse
     * @final
     */ static getPropertyOptions(name) {
        return this._classProperties && this._classProperties.get(name) || defaultPropertyDeclaration;
    }
    /**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */ static finalize() {
        // finalize any superclasses
        const superCtor = Object.getPrototypeOf(this);
        if (!superCtor.hasOwnProperty(finalized)) superCtor.finalize();
        this[finalized] = true;
        this._ensureClassProperties();
        // initialize Map populated in observedAttributes
        this._attributeToPropertyMap = new Map();
        // make any properties
        // Note, only process "own" properties since this element will inherit
        // any properties defined on the superClass, and finalization ensures
        // the entire prototype chain is finalized.
        if (this.hasOwnProperty(JSCompiler_renameProperty("properties", this))) {
            const props = this.properties;
            // support symbols in properties (IE11 does not support this)
            const propKeys = [
                ...Object.getOwnPropertyNames(props),
                ...typeof Object.getOwnPropertySymbols === "function" ? Object.getOwnPropertySymbols(props) : []
            ];
            // This for/of is ok because propKeys is an array
            for (const p of propKeys)// note, use of `any` is due to TypeSript lack of support for symbol in
            // index types
            // tslint:disable-next-line:no-any no symbol in index
            this.createProperty(p, props[p]);
        }
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */ static _attributeNameForProperty(name, options) {
        const attribute = options.attribute;
        return attribute === false ? undefined : typeof attribute === "string" ? attribute : typeof name === "string" ? name.toLowerCase() : undefined;
    }
    /**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */ static _valueHasChanged(value, old, hasChanged = notEqual) {
        return hasChanged(value, old);
    }
    /**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */ static _propertyValueFromAttribute(value, options) {
        const type = options.type;
        const converter = options.converter || defaultConverter;
        const fromAttribute = typeof converter === "function" ? converter : converter.fromAttribute;
        return fromAttribute ? fromAttribute(value, type) : value;
    }
    /**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */ static _propertyValueToAttribute(value, options) {
        if (options.reflect === undefined) return;
        const type = options.type;
        const converter = options.converter;
        const toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
        return toAttribute(value, type);
    }
    /**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */ initialize() {
        this._updateState = 0;
        this._updatePromise = new Promise((res)=>this._enableUpdatingResolver = res);
        this._changedProperties = new Map();
        this._saveInstanceProperties();
        // ensures first update will be caught by an early access of
        // `updateComplete`
        this.requestUpdateInternal();
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */ _saveInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        this.constructor._classProperties.forEach((_v, p)=>{
            if (this.hasOwnProperty(p)) {
                const value = this[p];
                delete this[p];
                if (!this._instanceProperties) this._instanceProperties = new Map();
                this._instanceProperties.set(p, value);
            }
        });
    }
    /**
     * Applies previously saved instance properties.
     */ _applyInstanceProperties() {
        // Use forEach so this works even if for/of loops are compiled to for loops
        // expecting arrays
        // tslint:disable-next-line:no-any
        this._instanceProperties.forEach((v, p)=>this[p] = v);
        this._instanceProperties = undefined;
    }
    connectedCallback() {
        // Ensure first connection completes an update. Updates cannot complete
        // before connection.
        this.enableUpdating();
    }
    enableUpdating() {
        if (this._enableUpdatingResolver !== undefined) {
            this._enableUpdatingResolver();
            this._enableUpdatingResolver = undefined;
        }
    }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */ disconnectedCallback() {}
    /**
     * Synchronizes property values when attributes change.
     */ attributeChangedCallback(name, old, value) {
        if (old !== value) this._attributeToProperty(name, value);
    }
    _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
        const ctor = this.constructor;
        const attr = ctor._attributeNameForProperty(name, options);
        if (attr !== undefined) {
            const attrValue = ctor._propertyValueToAttribute(value, options);
            // an undefined value does not change the attribute.
            if (attrValue === undefined) return;
            // Track if the property is being reflected to avoid
            // setting the property again via `attributeChangedCallback`. Note:
            // 1. this takes advantage of the fact that the callback is synchronous.
            // 2. will behave incorrectly if multiple attributes are in the reaction
            // stack at time of calling. However, since we process attributes
            // in `update` this should not be possible (or an extreme corner case
            // that we'd like to discover).
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
            if (attrValue == null) this.removeAttribute(attr);
            else this.setAttribute(attr, attrValue);
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
        }
    }
    _attributeToProperty(name, value) {
        // Use tracking info to avoid deserializing attribute value if it was
        // just set from a property setter.
        if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) return;
        const ctor = this.constructor;
        // Note, hint this as an `AttributeMap` so closure clearly understands
        // the type; it has issues with tracking types through statics
        // tslint:disable-next-line:no-unnecessary-type-assertion
        const propName = ctor._attributeToPropertyMap.get(name);
        if (propName !== undefined) {
            const options = ctor.getPropertyOptions(propName);
            // mark state reflecting
            this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
            this[propName] = // tslint:disable-next-line:no-any
            ctor._propertyValueFromAttribute(value, options);
            // mark state not reflecting
            this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
        }
    }
    /**
     * This protected version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */ requestUpdateInternal(name, oldValue, options) {
        let shouldRequestUpdate = true;
        // If we have a property key, perform property update steps.
        if (name !== undefined) {
            const ctor = this.constructor;
            options = options || ctor.getPropertyOptions(name);
            if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
                if (!this._changedProperties.has(name)) this._changedProperties.set(name, oldValue);
                // Add to reflecting properties set.
                // Note, it's important that every change has a chance to add the
                // property to `_reflectingProperties`. This ensures setting
                // attribute + property reflects correctly.
                if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
                    if (this._reflectingProperties === undefined) this._reflectingProperties = new Map();
                    this._reflectingProperties.set(name, options);
                }
            } else // Abort the request if the property should not be considered changed.
            shouldRequestUpdate = false;
        }
        if (!this._hasRequestedUpdate && shouldRequestUpdate) this._updatePromise = this._enqueueUpdate();
    }
    /**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */ requestUpdate(name, oldValue) {
        this.requestUpdateInternal(name, oldValue);
        return this.updateComplete;
    }
    /**
     * Sets up the element to asynchronously update.
     */ async _enqueueUpdate() {
        this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
        try {
            // Ensure any previous update has resolved before updating.
            // This `await` also ensures that property changes are batched.
            await this._updatePromise;
        } catch (e) {
        // Ignore any previous errors. We only care that the previous cycle is
        // done. Any error should have been handled in the previous update.
        }
        const result = this.performUpdate();
        // If `performUpdate` returns a Promise, we await it. This is done to
        // enable coordinating updates with a scheduler. Note, the result is
        // checked to avoid delaying an additional microtask unless we need to.
        if (result != null) await result;
        return !this._hasRequestedUpdate;
    }
    get _hasRequestedUpdate() {
        return this._updateState & STATE_UPDATE_REQUESTED;
    }
    get hasUpdated() {
        return this._updateState & STATE_HAS_UPDATED;
    }
    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */ performUpdate() {
        // Abort any update if one is not pending when this is called.
        // This can happen if `performUpdate` is called early to "flush"
        // the update.
        if (!this._hasRequestedUpdate) return;
        // Mixin instance properties once, if they exist.
        if (this._instanceProperties) this._applyInstanceProperties();
        let shouldUpdate = false;
        const changedProperties = this._changedProperties;
        try {
            shouldUpdate = this.shouldUpdate(changedProperties);
            if (shouldUpdate) this.update(changedProperties);
            else this._markUpdated();
        } catch (e) {
            // Prevent `firstUpdated` and `updated` from running when there's an
            // update exception.
            shouldUpdate = false;
            // Ensure element can accept additional updates after an exception.
            this._markUpdated();
            throw e;
        }
        if (shouldUpdate) {
            if (!(this._updateState & STATE_HAS_UPDATED)) {
                this._updateState = this._updateState | STATE_HAS_UPDATED;
                this.firstUpdated(changedProperties);
            }
            this.updated(changedProperties);
        }
    }
    _markUpdated() {
        this._changedProperties = new Map();
        this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `_getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super._getUpdateComplete()`, then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */ get updateComplete() {
        return this._getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async _getUpdateComplete() {
     *       await super._getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     * @deprecated Override `getUpdateComplete()` instead for forward
     *     compatibility with `lit-element` 3.0 / `@lit/reactive-element`.
     */ _getUpdateComplete() {
        return this.getUpdateComplete();
    }
    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async getUpdateComplete() {
     *       await super.getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     */ getUpdateComplete() {
        return this._updatePromise;
    }
    /**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * @param _changedProperties Map of changed properties with old values
     */ shouldUpdate(_changedProperties) {
        return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * @param _changedProperties Map of changed properties with old values
     */ update(_changedProperties) {
        if (this._reflectingProperties !== undefined && this._reflectingProperties.size > 0) {
            // Use forEach so this works even if for/of loops are compiled to for
            // loops expecting arrays
            this._reflectingProperties.forEach((v, k)=>this._propertyToAttribute(k, this[k], v));
            this._reflectingProperties = undefined;
        }
        this._markUpdated();
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */ updated(_changedProperties) {}
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * @param _changedProperties Map of changed properties with old values
     */ firstUpdated(_changedProperties) {}
}
_a = finalized;
/**
 * Marks class as having finished creating properties.
 */ UpdatingElement[_a] = true;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9pns4"}],"g3nVJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>supportsAdoptingStyleSheets);
parcelHelpers.export(exports, "CSSResult", ()=>CSSResult);
parcelHelpers.export(exports, "unsafeCSS", ()=>unsafeCSS);
parcelHelpers.export(exports, "css", ()=>css);
const supportsAdoptingStyleSheets = window.ShadowRoot && (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
const constructionToken = Symbol();
class CSSResult {
    constructor(cssText, safeToken){
        if (safeToken !== constructionToken) throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = cssText;
    }
    // Note, this is a getter so that it's lazy. In practice, this means
    // stylesheets are not created until the first element instance is made.
    get styleSheet() {
        if (this._styleSheet === undefined) {
            // Note, if `supportsAdoptingStyleSheets` is true then we assume
            // CSSStyleSheet is constructable.
            if (supportsAdoptingStyleSheets) {
                this._styleSheet = new CSSStyleSheet();
                this._styleSheet.replaceSync(this.cssText);
            } else this._styleSheet = null;
        }
        return this._styleSheet;
    }
    toString() {
        return this.cssText;
    }
}
const unsafeCSS = (value)=>{
    return new CSSResult(String(value), constructionToken);
};
const textFromCSSResult = (value)=>{
    if (value instanceof CSSResult) return value.cssText;
    else if (typeof value === "number") return value;
    else throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
};
const css = (strings, ...values)=>{
    const cssText = values.reduce((acc, v, idx)=>acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
    return new CSSResult(cssText, constructionToken);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9pns4"}],"d62Oa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "customElement", ()=>customElement);
/**
 * A property decorator which creates a LitElement property which reflects a
 * corresponding attribute value. A [[`PropertyDeclaration`]] may optionally be
 * supplied to configure property features.
 *
 * This decorator should only be used for public fields. Private or protected
 * fields should use the [[`internalProperty`]] decorator.
 *
 * @example
 * ```ts
 * class MyElement {
 *   @property({ type: Boolean })
 *   clicked = false;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */ parcelHelpers.export(exports, "property", ()=>property);
/**
 * Declares a private or protected property that still triggers updates to the
 * element when it changes.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like the Closure Compiler.
 * @category Decorator
 * @deprecated `internalProperty` has been renamed to `state` in lit-element
 *     3.0. Please update to `state` now to be compatible with 3.0.
 */ parcelHelpers.export(exports, "internalProperty", ()=>internalProperty);
parcelHelpers.export(exports, "state", ()=>state);
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 * @param cache An optional boolean which when true performs the DOM query only
 * once and caches the result.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 *
 * ```ts
 * class MyElement {
 *   @query('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */ parcelHelpers.export(exports, "query", ()=>query);
// Note, in the future, we may extend this decorator to support the use case
// where the queried element may need to do work to become ready to interact
// with (e.g. load some implementation code). If so, we might elect to
// add a second argument defining a function that can be run to make the
// queried element loaded/updated/ready.
/**
 * A property decorator that converts a class property into a getter that
 * returns a promise that resolves to the result of a querySelector on the
 * element's renderRoot done after the element's `updateComplete` promise
 * resolves. When the queried property may change with element state, this
 * decorator can be used instead of requiring users to await the
 * `updateComplete` before accessing the property.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * @example
 * ```ts
 * class MyElement {
 *   @queryAsync('#first')
 *   first;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 *
 * // external usage
 * async doSomethingWithFirst() {
 *  (await aMyElement.first).doSomething();
 * }
 * ```
 * @category Decorator
 */ parcelHelpers.export(exports, "queryAsync", ()=>queryAsync);
/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * @example
 * ```ts
 * class MyElement {
 *   @queryAll('div')
 *   divs;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */ parcelHelpers.export(exports, "queryAll", ()=>queryAll);
/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifies event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * @example
 * ```ts
 * class MyElement {
 *   clicked = false;
 *
 *   render() {
 *     return html`
 *       <div @click=${this._onClick}`>
 *         <button></button>
 *       </div>
 *     `;
 *   }
 *
 *   @eventOptions({capture: true})
 *   _onClick(e) {
 *     this.clicked = true;
 *   }
 * }
 * ```
 * @category Decorator
 */ parcelHelpers.export(exports, "eventOptions", ()=>eventOptions);
/**
 * A property decorator that converts a class property into a getter that
 * returns the `assignedNodes` of the given named `slot`. Note, the type of
 * this property should be annotated as `NodeListOf<HTMLElement>`.
 *
 * @param slotName A string name of the slot.
 * @param flatten A boolean which when true flattens the assigned nodes,
 * meaning any assigned nodes that are slot elements are replaced with their
 * assigned nodes.
 * @param selector A string which filters the results to elements that match
 * the given css selector.
 *
 * * @example
 * ```ts
 * class MyElement {
 *   @queryAssignedNodes('list', true, '.item')
 *   listItems;
 *
 *   render() {
 *     return html`
 *       <slot name="list"></slot>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */ parcelHelpers.export(exports, "queryAssignedNodes", ()=>queryAssignedNodes);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ const legacyCustomElement = (tagName, clazz)=>{
    window.customElements.define(tagName, clazz);
    // Cast as any because TS doesn't recognize the return type as being a
    // subtype of the decorated class when clazz is typed as
    // `Constructor<HTMLElement>` for some reason.
    // `Constructor<HTMLElement>` is helpful to make sure the decorator is
    // applied to elements however.
    // tslint:disable-next-line:no-any
    return clazz;
};
const standardCustomElement = (tagName, descriptor)=>{
    const { kind , elements  } = descriptor;
    return {
        kind,
        elements,
        // This callback is called once the class is otherwise fully defined
        finisher (clazz) {
            window.customElements.define(tagName, clazz);
        }
    };
};
const customElement = (tagName)=>(classOrDescriptor)=>typeof classOrDescriptor === "function" ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);
const standardProperty = (options, element)=>{
    // When decorating an accessor, pass it through and add property metadata.
    // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
    // stomp over the user's accessor.
    if (element.kind === "method" && element.descriptor && !("value" in element.descriptor)) return Object.assign(Object.assign({}, element), {
        finisher (clazz) {
            clazz.createProperty(element.key, options);
        }
    });
    else // createProperty() takes care of defining the property, but we still
    // must return some kind of descriptor, so return a descriptor for an
    // unused prototype field. The finisher calls createProperty().
    return {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        // When @babel/plugin-proposal-decorators implements initializers,
        // do this instead of the initializer below. See:
        // https://github.com/babel/babel/issues/9260 extras: [
        //   {
        //     kind: 'initializer',
        //     placement: 'own',
        //     initializer: descriptor.initializer,
        //   }
        // ],
        initializer () {
            if (typeof element.initializer === "function") this[element.key] = element.initializer.call(this);
        },
        finisher (clazz) {
            clazz.createProperty(element.key, options);
        }
    };
};
const legacyProperty = (options, proto, name)=>{
    proto.constructor.createProperty(name, options);
};
function property(options) {
    // tslint:disable-next-line:no-any decorator
    return (protoOrDescriptor, name)=>name !== undefined ? legacyProperty(options, protoOrDescriptor, name) : standardProperty(options, protoOrDescriptor);
}
function internalProperty(options) {
    return property({
        attribute: false,
        hasChanged: options === null || options === void 0 ? void 0 : options.hasChanged
    });
}
const state = (options)=>internalProperty(options);
function query(selector, cache) {
    return (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
    name)=>{
        const descriptor = {
            get () {
                return this.renderRoot.querySelector(selector);
            },
            enumerable: true,
            configurable: true
        };
        if (cache) {
            const prop = name !== undefined ? name : protoOrDescriptor.key;
            const key = typeof prop === "symbol" ? Symbol() : `__${prop}`;
            descriptor.get = function() {
                if (this[key] === undefined) this[key] = this.renderRoot.querySelector(selector);
                return this[key];
            };
        }
        return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
    };
}
function queryAsync(selector) {
    return (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
    name)=>{
        const descriptor = {
            async get () {
                await this.updateComplete;
                return this.renderRoot.querySelector(selector);
            },
            enumerable: true,
            configurable: true
        };
        return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
    };
}
function queryAll(selector) {
    return (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
    name)=>{
        const descriptor = {
            get () {
                return this.renderRoot.querySelectorAll(selector);
            },
            enumerable: true,
            configurable: true
        };
        return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
    };
}
const legacyQuery = (descriptor, proto, name)=>{
    Object.defineProperty(proto, name, descriptor);
};
const standardQuery = (descriptor, element)=>({
        kind: "method",
        placement: "prototype",
        key: element.key,
        descriptor
    });
const standardEventOptions = (options, element)=>{
    return Object.assign(Object.assign({}, element), {
        finisher (clazz) {
            Object.assign(clazz.prototype[element.key], options);
        }
    });
};
const legacyEventOptions = // tslint:disable-next-line:no-any legacy decorator
(options, proto, name)=>{
    Object.assign(proto[name], options);
};
function eventOptions(options) {
    // Return value typed as any to prevent TypeScript from complaining that
    // standard decorator function signature does not match TypeScript decorator
    // signature
    // TODO(kschaaf): unclear why it was only failing on this decorator and not
    // the others
    return (protoOrDescriptor, name)=>name !== undefined ? legacyEventOptions(options, protoOrDescriptor, name) : standardEventOptions(options, protoOrDescriptor);
}
// x-browser support for matches
// tslint:disable-next-line:no-any
const ElementProto = Element.prototype;
const legacyMatches = ElementProto.msMatchesSelector || ElementProto.webkitMatchesSelector;
function queryAssignedNodes(slotName = "", flatten = false, selector = "") {
    return (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
    name)=>{
        const descriptor = {
            get () {
                const slotSelector = `slot${slotName ? `[name=${slotName}]` : ":not([name])"}`;
                const slot = this.renderRoot.querySelector(slotSelector);
                let nodes = slot && slot.assignedNodes({
                    flatten
                });
                if (nodes && selector) nodes = nodes.filter((node)=>node.nodeType === Node.ELEMENT_NODE && (node.matches ? node.matches(selector) : legacyMatches.call(node, selector)));
                return nodes;
            },
            enumerable: true,
            configurable: true
        };
        return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"9pns4"}],"9FAJU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WavesElement", ()=>WavesElement);
var _litElement = require("lit-element");
var _vertexShaderVert = require("./shaders/vertex-shader.vert");
var _vertexShaderVertDefault = parcelHelpers.interopDefault(_vertexShaderVert);
var _fragmentShaderFrag = require("./shaders/fragment-shader.frag");
var _fragmentShaderFragDefault = parcelHelpers.interopDefault(_fragmentShaderFrag);
var _updateShaderFrag = require("./shaders/update-shader.frag");
var _updateShaderFragDefault = parcelHelpers.interopDefault(_updateShaderFrag);
const cout = console.log.bind(console);
function peak(uv, pos, size) {
    const dx = uv.x - pos.x, dy = uv.y - pos.y;
    const d = Math.sqrt(dx * dx + dy * dy);
    return Math.exp(-size * d);
}
function calculate_initial_condition(R, C) {
    // The initial condition is a peak at the center of the screen.
    const arr = new Float32Array(R * C * 2);
    const peak_pos = {
        x: 0.5,
        y: 0.5
    };
    const peak_size = 10;
    for(let r = 1; r < R - 1; r++)for(let c = 1; c < C - 1; c++){
        const i = 2 * (r * C + c);
        const uv = {
            x: c / R,
            y: r / R
        };
        arr[i + 1] = peak(uv, peak_pos, peak_size); // position
    }
    return arr;
}
function init(canvas) {
    const initial_condition = calculate_initial_condition(256, 256);
    const gl = canvas.getContext("webgl2");
    if (!gl) {
        alert("No webgl2 support on your device!!");
        return;
    }
    const ext = gl.getExtension("EXT_color_buffer_float");
    if (!ext) {
        alert("No support for rendering to floating point textures on your device!!");
        return;
    }
    // Compile all the shaders.
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, (0, _vertexShaderVertDefault.default));
    const updateShader = createShader(gl, gl.FRAGMENT_SHADER, (0, _updateShaderFragDefault.default));
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, (0, _fragmentShaderFragDefault.default));
    // Create and link all shader programs.
    const updateProgram = createProgram(gl, vertexShader, updateShader);
    const program = createProgram(gl, vertexShader, fragmentShader);
    // Get locations of shader inputs.
    const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
    const isVelocityUpdateLocation = gl.getUniformLocation(updateProgram, "is_velocity_update");
    const updateImageLocation = gl.getUniformLocation(updateProgram, "i_image");
    const iTimeDeltaLocation = gl.getUniformLocation(updateProgram, "iTimeDelta");
    const iMouseLocation = gl.getUniformLocation(updateProgram, "iMouse");
    const imageLocation = gl.getUniformLocation(program, "u_image");
    // Configure texture 1.
    const texture1 = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture1);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    const mipLevel = 0, internalFormat = gl.RG32F, texWidth = 256, texHeight = 256, texBorder = 0, srcFormat = gl.RG, srcType = gl.FLOAT;
    gl.texImage2D(gl.TEXTURE_2D, mipLevel, internalFormat, texWidth, texHeight, texBorder, srcFormat, srcType, initial_condition);
    // Configure texture 2.
    const texture2 = gl.createTexture();
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texImage2D(gl.TEXTURE_2D, mipLevel, internalFormat, texWidth, texHeight, texBorder, srcFormat, srcType, new Float32Array(131072));
    // Create a framebuffer for rendering to texture.
    const attachmentPoint = gl.COLOR_ATTACHMENT0;
    const frameBuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, attachmentPoint, gl.TEXTURE_2D, texture2, 0);
    // Check framebuffer status and report errors.
    const frameBufferStatus = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    const statuses = {
        [gl.FRAMEBUFFER_COMPLETE]: "complete",
        [gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT]: "incomplete attachment",
        [gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT]: "missing attachment",
        [gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS]: "height and width of attachment are not the same",
        [gl.FRAMEBUFFER_UNSUPPORTED]: "format of the attachedment is not supported or some other conditions",
        [gl.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE]: "the values of gl.RENDERBUFFER_SAMPLES are different among different attached renderbuffers or are non zero if attached images are a mix of render buffers and textures"
    };
    // cout('framebuffer status:', frameBufferStatus, statuses[frameBufferStatus]);
    if (frameBufferStatus != gl.FRAMEBUFFER_COMPLETE) {
        alert("Failed to create a framebuffer!!");
        return;
    }
    // Upload rectangle coordinates.
    const positions = [
        -1,
        -1,
        -1,
        1,
        1,
        1,
        1,
        1,
        1,
        -1,
        -1,
        -1
    ];
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    // Create a VAO to read the position data.
    const size = 2, type = gl.FLOAT, normalize = false, stride = 0, offset = 0;
    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);
    // Data to handle mouse events.
    const mouseData = {
        mouse_x: 0,
        mouse_y: 0,
        mouse_updated: false,
        is_dragging: false
    };
    canvas.addEventListener("mousedown", (e)=>{
        mouseData.is_dragging = true;
        const rect = e.target.getBoundingClientRect();
        mouseData.mouse_x = Math.floor(e.clientX - rect.left); //x position within the element.
        mouseData.mouse_y = Math.floor(rect.bottom - e.clientY); //y position within the element.
        mouseData.mouse_updated = true;
    // cout(mouseData.mouse_x, mouseData.mouse_y, mouseData.mouse_updated);    
    });
    canvas.addEventListener("mousemove", (e)=>{
        if (mouseData.is_dragging) {
            const rect = e.target.getBoundingClientRect();
            mouseData.mouse_x = Math.floor(e.clientX - rect.left); //x position within the element.
            mouseData.mouse_y = Math.floor(rect.bottom - e.clientY); //y position within the element.
            mouseData.mouse_updated = true;
        // cout(mouseData.mouse_x, mouseData.mouse_y, mouseData.mouse_updated);    
        }
    });
    canvas.addEventListener("mouseup", ()=>{
        mouseData.is_dragging = false;
    });
    canvas.addEventListener("mouseleave", ()=>{
        mouseData.is_dragging = false;
    });
    // Arguments passed to update step.
    const args = {
        gl,
        program,
        attachmentPoint,
        updateProgram,
        vao,
        iMouseLocation,
        iTimeDeltaLocation,
        isVelocityUpdateLocation,
        imageLocation,
        updateImageLocation,
        frameBuffer,
        texture1,
        texture2,
        prev: 0,
        mouseData
    };
    window.requestAnimationFrame(step.bind(null, args));
}
function step(args, timestamp) {
    // Update velocities and positions and render a single frame.
    const { gl , program , attachmentPoint , updateProgram , vao , iMouseLocation , iTimeDeltaLocation , isVelocityUpdateLocation , imageLocation , updateImageLocation , frameBuffer , texture1 , texture2 , prev , mouseData  } = args;
    const deltaTime = timestamp - prev;
    // Run the update program for veloctiy update.
    gl.useProgram(updateProgram);
    gl.uniform1i(isVelocityUpdateLocation, 1);
    gl.uniform1f(iTimeDeltaLocation, deltaTime);
    gl.uniform3i(iMouseLocation, mouseData.mouse_x, mouseData.mouse_y, mouseData.mouse_updated ? 1 : 0);
    render(gl, updateProgram, vao, updateImageLocation, 0, frameBuffer);
    // Swap textures.
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texture1);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, attachmentPoint, gl.TEXTURE_2D, texture1, 0);
    // Run the update program for position update.
    gl.useProgram(updateProgram);
    gl.uniform1i(isVelocityUpdateLocation, 0);
    render(gl, updateProgram, vao, updateImageLocation, 0, frameBuffer);
    // Swap textures again.
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture1);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texture2);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, attachmentPoint, gl.TEXTURE_2D, texture2, 0);
    // Run the render program.
    render(gl, program, vao, imageLocation, 0, null);
    mouseData.mouse_updated = false;
    window.requestAnimationFrame(step.bind(null, {
        ...args,
        prev: timestamp
    }));
}
function render(gl, program, vao, imageLocation, texture, frameBuffer) {
    gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
    // clear viewport
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // render
    gl.useProgram(program);
    gl.bindVertexArray(vao);
    gl.uniform1i(imageLocation, texture);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
}
function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) return shader;
    cout("Failed to compile the shader:", type);
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
}
function createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) return program;
    cout("Failed to compile the shader program.");
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
}
class WavesElement extends (0, _litElement.LitElement) {
    static get styles() {
        return (0, _litElement.css)`
            /* Selects the host element */
            :host { display: inline-block;}
            /* Selects the host element if it is hidden */
            :host([hidden]) { display: none; }
        `;
    }
    constructor(){
        super();
        this.setupCanvas();
    }
    async setupCanvas() {
        await this.updateComplete;
        const canvas = this.shadowRoot.getElementById("webgl-canvas");
        init(canvas);
    }
    render() {
        return (0, _litElement.html)`
            <canvas id="webgl-canvas" width="256" height="256"></canvas>
        `;
    }
}
customElements.define("waves-element", WavesElement);

},{"lit-element":"d1gon","./shaders/vertex-shader.vert":"2Cpfl","./shaders/fragment-shader.frag":"6lCc3","./shaders/update-shader.frag":"fD0sz","@parcel/transformer-js/src/esmodule-helpers.js":"9pns4"}],"2Cpfl":[function(require,module,exports) {
module.exports = "#version 300 es\n#define GLSLIFY 1\n\nin vec4 a_position;\n\nvoid main()\n{\n  gl_Position = a_position;\n}\n";

},{}],"6lCc3":[function(require,module,exports) {
module.exports = "#version 300 es\n\nprecision mediump float;\n#define GLSLIFY 1\n\nuniform sampler2D u_image;\n\nout vec4 fragColor;\n\nfloat sigmoid(float x)\n{\n    return 1. / (1. + exp(-x));\n}\n\nvec3 floatToRgb(float v, float scale) {\n    float r = v;\n    float g = mod(v*scale,1.0);\n    r-= g/scale;\n    float b = mod(v*scale*scale,1.0);\n    g-=b/scale;\n    return vec3(r,g,b);\n}\n\nvoid main()\n{\n    vec2 fragCoord = gl_FragCoord.xy;\n    vec2 iResolution = vec2(256., 256.);\n\n    // get current x and y.\n    fragCoord -= 0.5; // pixel coordinates are given as mid intergers, subtract 0.5 to make it interger.\n    ivec2 center = ivec2(fragCoord);\n    ivec2 res    = ivec2(iResolution) - 1;\n\n    float pos = texelFetch(u_image, center, 0).y;\n\n    // vec3 col = floatToRgb(pos, 256.);\n    vec3 col = vec3(sigmoid(pos), sin(pos), cos(pos));\n    // vec3 col = vec3(sigmoid(pos));\n\n    fragColor = vec4(col, 1.0);\n}\n";

},{}],"fD0sz":[function(require,module,exports) {
module.exports = "#version 300 es\n\nprecision mediump float;\n#define GLSLIFY 1\n\nuniform sampler2D i_image;\nuniform bool is_velocity_update;\nuniform float iTimeDelta;\nuniform ivec3 iMouse;\n\nout vec4 fragColor;\n\n#define SPRING_CONSTANT .04\n#define PROP_SPEED 1.\n#define MASS 10.\n#define FRICTION_COEFF 0.005\n#define PEAK_SIZE .2\n#define MAX_VELOCITY_MAGNITUDE 10.\n#define MAX_DISPLACEMENT 64.\n\nfloat sigmoid(float x)\n{\n    return 1. / (1. + exp(-x));\n}\n\nfloat peak(ivec2 center, ivec2 pos, float size)\n{\n    float d = length(vec2(center) - vec2(pos));\n    float e = exp(-size * d);\n    return e;\n}\n\nvoid main()\n{\n    vec2 fragCoord = gl_FragCoord.xy;\n    vec2 iResolution = vec2(256., 256.);\n\n    // get current x and y.\n    fragCoord -= 0.5; // pixel coordinates are given as mid intergers, subtract 0.5 to make it interger.\n    ivec2 center = ivec2(fragCoord);\n    ivec2 res    = ivec2(iResolution) - 1;\n\n    // if it is a boundary cell velocity is 0.\n    if(center.x == 0 || center.y == 0 || center.x == res.x || center.y == res.y)\n    {\n        fragColor = vec4(vec3(0.), 1.0);\n        return;\n    }\n\n    ivec2 left   = center + ivec2(-1,  0);\n    ivec2 top    = center + ivec2( 0,  1);\n    ivec2 right  = center + ivec2( 1,  0);\n    ivec2 bottom = center + ivec2( 0, -1);\n\n    // get previous z coordinate of current cell and neighbour cells.\n	float pos_c = texelFetch(i_image, center, 0).y;\n\n	float pos_l = texelFetch(i_image, left  , 0).y;\n	float pos_t = texelFetch(i_image, top   , 0).y;\n	float pos_r = texelFetch(i_image, right , 0).y;\n	float pos_b = texelFetch(i_image, bottom, 0).y;\n\n    // get previous velocity of current cell.\n	float vel   = texelFetch(i_image, center, 0).x;\n\n    // get 3d positions.\n    vec3 pos_cv = vec3(vec2(center), pos_c);\n\n    if(is_velocity_update)\n    {\n        // UPDATE VELOCITIES\n        // Channel 0 is previous velocities (x coordinate) and previous positions (y coordinate).\n\n        vec3 pos_lv = vec3(vec2(left  ), pos_l);\n        vec3 pos_tv = vec3(vec2(top   ), pos_t);\n        vec3 pos_rv = vec3(vec2(right ), pos_r);\n        vec3 pos_bv = vec3(vec2(bottom), pos_b);\n\n        // calculate total force using Hooke's law.\n        vec3 force_l = (pos_lv - pos_cv);\n        vec3 force_t = (pos_tv - pos_cv);\n        vec3 force_r = (pos_rv - pos_cv);\n        vec3 force_b = (pos_bv - pos_cv);\n\n        force_l = normalize(force_l) * (length(force_l) - 1.) * SPRING_CONSTANT;\n        force_t = normalize(force_t) * (length(force_t) - 1.) * SPRING_CONSTANT;\n        force_r = normalize(force_r) * (length(force_r) - 1.) * SPRING_CONSTANT;\n        force_b = normalize(force_b) * (length(force_b) - 1.) * SPRING_CONSTANT;\n\n        // gravity\n        vec3 force_g = vec3(0.); // ZERO GRAVITY\n        // vec3 force_g = vec3(0., 0., -0.001 * MASS); // VERY LOW GRAVITY\n        // vec3 force_g = vec3(0., 0., -1.62 * MASS); // MOON\n        // vec3 force_g = vec3(0., 0., -9.807 * MASS); // EARTH\n\n        vec3 total_force = force_l + force_t + force_r + force_b + force_g;\n\n        // calculate acceleration and velocity.\n        float acc = total_force.z / MASS;\n        vel = (1. - FRICTION_COEFF) * vel + acc * iTimeDelta * PROP_SPEED;\n        //vel = (1. - FRICTION_COEFF * screen_center_dist(center)) * vel + acc * iTimeDelta * PROP_SPEED;\n\n        // clamp velocity.\n        vel = clamp(vel, -MAX_VELOCITY_MAGNITUDE, MAX_VELOCITY_MAGNITUDE);\n\n        // output current velocity and previous position.\n        fragColor = vec4(vel, pos_c, 0., 1.0);\n    }\n    else\n    {\n        // UPDATE POSITIONS\n        // Channel 0 is previous velocities (x coordinate) and previous positions (y coordinate).\n\n        // calculate new position.\n        pos_c = pos_c + vel * iTimeDelta * PROP_SPEED;\n\n        // if LMB is down insert a peak at the click position.\n        ivec2 click = iMouse.xy;\n        if(iMouse.z == 1)pos_c += 10. * peak(center, click, PEAK_SIZE);\n        // pos_c = 0.;\n\n        // clamp the position.\n        pos_c = clamp(pos_c, -MAX_DISPLACEMENT, MAX_DISPLACEMENT);\n\n        // output current velocity and current position.\n        fragColor = vec4(vel, pos_c, 0., 1.0);\n    }\n}\n\n/*\n\n\nfloat screen_center_dist(ivec2 pos)\n{\n    ivec2 screen_center = ivec2(iResolution) / 2;\n    float d = length(vec2(pos) - vec2(screen_center));\n    return sigmoid(d);\n}\n\nvoid mainImage(out vec4 fragColor, in vec2 fragCoord)\n{\n\n}\n*/\n\n/*\n\n\nvoid mainImage(out vec4 fragColor, in vec2 fragCoord)\n{\n\n}\n*//*\n\n\nvoid mainImage(out vec4 fragColor, in vec2 fragCoord)\n{\n\n}\n*//*\n\n\nvoid mainImage(out vec4 fragColor, in vec2 fragCoord)\n{\n\n}\n*//*\n\n\nvoid mainImage(out vec4 fragColor, in vec2 fragCoord)\n{\n\n}\n*/";

},{}]},["96vqb","hDgCW"], "hDgCW", "parcelRequire50bf")

//# sourceMappingURL=index.ce5dcc49.js.map
