// -------- Constants --------
const CELL_SIZE = 1;
const P_EMPTY = "";
const P_PAWN = "p";
const P_ROOK = "r";
const P_KNIGHT = "n";
const P_BISHOP = "b";
const P_QUEEN = "q";
const P_KING = "k";
const FEN_CHESS_START_POS = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const CLASS_CELL = "chess-cell";
const CLASS_CELL_TEXT = "chess-cell-text";
const CLASS_CELL_IMAGE = "chess-cell-image";
const CLASS_POINTER_EVENTS_NONE = "pointer-events-none";
const CLASS_HIDDEN = "hidden";
const BAD_TEXT = '?v=e60effbb';
const DATA_URL_IMAGE_WEBP = 'data:image/webp;base64,';
const DATA_URL_AUDIO_WAV = 'data:audio/wav;base64,';
const DATA_URL_APP_WASM = "data:application/wasm;base64,";
// -------- Constants --------
// -------- Math --------
const add2 = ([x1, y1], [x2, y2]) => [x1 + x2, y1 + y2];
const sub2 = ([x1, y1], [x2, y2]) => [x1 - x2, y1 - y2];
const mul2 = ([x1, y1], [x2, y2]) => [x1 * x2, y1 * y2];
const scale2 = ([x, y], s) => [x * s, y * s];
const len2 = ([x, y]) => Math.sqrt(x * x + y * y);
const norm2 = (v) => scale2(v, 1 / len2(v));
const toRadians = (angle) => Math.PI * angle / 180;
const rotMat2x2 = (angle) => [
  [Math.cos(angle), -Math.sin(angle)],
  [Math.sin(angle), Math.cos(angle)],
];
const matMul2 = ([
  [a, b],
  [c, d],
], [x, y]) => [
    a * x + b * y,
    c * x + d * y,
  ];
const rot2 = (v, angle) => matMul2(rotMat2x2(angle), v);
// -------- Math --------

const THEMES = {
  "classic": {
    colorCellLight: "#ffce9e",
    colorCellDark: "#d18b47",
    colorCellBackground: "beige",
    arrowFillColor: "rgba(255, 0, 0, 0.5)",
  },
  "red": {
    colorCellLight: "coral",
    colorCellDark: "firebrick",
    colorCellBackground: 'lavender',
    arrowFillColor: "rgba(0, 255, 0, 0.5)",
  },
  "blue": {
    colorCellLight: 'lightblue',
    colorCellDark: "teal",
    colorCellBackground: 'lightsteelblue',
    arrowFillColor: "rgba(0, 0, 255, 0.5)",
  },
};

const ALL_DATA = (function () {
  const pre_script_to_get_data = document.querySelector('#pre-script-to-get-data');
  const get_data = eval(atob(pre_script_to_get_data.textContent));
  return get_data();
})();

const PIECE_IMGS = {
  // white
  [P_PAWN.toUpperCase()]: DATA_URL_IMAGE_WEBP + ALL_DATA['pre_data_wp_webp'],
  [P_ROOK.toUpperCase()]: DATA_URL_IMAGE_WEBP + ALL_DATA['pre_data_wr_webp'],
  [P_KNIGHT.toUpperCase()]: DATA_URL_IMAGE_WEBP + ALL_DATA['pre_data_wn_webp'],
  [P_BISHOP.toUpperCase()]: DATA_URL_IMAGE_WEBP + ALL_DATA['pre_data_wb_webp'],
  [P_QUEEN.toUpperCase()]: DATA_URL_IMAGE_WEBP + ALL_DATA['pre_data_wq_webp'],
  [P_KING.toUpperCase()]: DATA_URL_IMAGE_WEBP + ALL_DATA['pre_data_wk_webp'],
  // black
  [P_PAWN]: DATA_URL_IMAGE_WEBP + ALL_DATA['pre_data_bp_webp'],
  [P_ROOK]: DATA_URL_IMAGE_WEBP + ALL_DATA['pre_data_br_webp'],
  [P_KNIGHT]: DATA_URL_IMAGE_WEBP + ALL_DATA['pre_data_bn_webp'],
  [P_BISHOP]: DATA_URL_IMAGE_WEBP + ALL_DATA['pre_data_bb_webp'],
  [P_QUEEN]: DATA_URL_IMAGE_WEBP + ALL_DATA['pre_data_bq_webp'],
  [P_KING]: DATA_URL_IMAGE_WEBP + ALL_DATA['pre_data_bk_webp'],
};

const isLowerCase = (s) => s.length === 1 && s >= 'a' && s <= 'z';

const isWhitePiece = (s) => s !== P_EMPTY && !isLowerCase(s);

const createSvgElem = (s) => document.createElementNS("http://www.w3.org/2000/svg", s);

const processFenStringRow = (row) => {
  const cells = row.split("");
  const finalCells = [];
  for (let cell of cells) {
    if (cell < "0" || cell > "9") {
      finalCells.push(cell);
      continue;
    }
    const count = cell - "0";
    for (let i = 0; i < count; i++) finalCells.push(P_EMPTY);
  }
  return finalCells;
};

const processFenString = (s) => {
  const parts = s.split(" ");
  // console.log("parts", parts);
  const boardPart = parts[0];
  // const toPlayPart = parts[1];
  const boardRows = boardPart.split("/").map(processFenStringRow);
  // console.log("boardRows", boardRows);
  return { boardRows };
};

const createCellE = (r, c, fillColor) => {
  const cellE = createSvgElem("rect");
  cellE.setAttribute("x", c * CELL_SIZE);
  cellE.setAttribute("y", r * CELL_SIZE);
  cellE.setAttribute("width", CELL_SIZE);
  cellE.setAttribute("height", CELL_SIZE);
  cellE.setAttribute("fill", fillColor);
  cellE.setAttribute("data-fill", fillColor);
  cellE.setAttribute("data-r", r);
  cellE.setAttribute("data-c", c);
  cellE.classList.add(CLASS_CELL);
  return cellE;
};

const createCellTextE = (r, c, t) => {
  const textE = createSvgElem("text");
  textE.setAttribute("x", (c + 0.3) * CELL_SIZE);
  textE.setAttribute("y", (r + 0.75) * CELL_SIZE);
  textE.classList.add(CLASS_CELL_TEXT);
  textE.textContent = t;
  return textE;
};

const createCellImageE = (r, c, piece) => {
  const img_size = 1;
  const src = piece === P_EMPTY ? '' : PIECE_IMGS[piece];
  const imgE = createSvgElem("image");
  imgE.setAttribute("x", c * CELL_SIZE);
  imgE.setAttribute("y", r * CELL_SIZE);
  imgE.setAttribute("width", img_size);
  imgE.setAttribute("height", img_size);
  imgE.setAttribute("href", src);
  imgE.classList.add(CLASS_CELL_IMAGE);
  if (piece === P_EMPTY) imgE.classList.add(CLASS_HIDDEN);
  return imgE;
};

const createArrowBetweenCellE = (src, dest, fillColor) => {
  const arrowE = createSvgElem("path");
  arrowE.classList.add(CLASS_POINTER_EVENTS_NONE);
  arrowE.setAttribute('fill', fillColor);
  const sx = (src.c + 0.5) * CELL_SIZE;
  const sy = (src.r + 0.5) * CELL_SIZE;
  const dx = (dest.c + 0.5) * CELL_SIZE;
  const dy = (dest.r + 0.5) * CELL_SIZE;

  const srcV = [sx, sy];
  const destV = [dx, dy];
  const dirV = norm2(sub2(destV, srcV));
  const perpDirV = rot2(dirV, toRadians(90));
  const baseOfTriV = add2(destV, scale2(dirV, -0.1));

  // rectangle
  const point1V = add2(srcV, scale2(perpDirV, -0.1));
  const point2V = add2(srcV, scale2(perpDirV, 0.1));
  const point3V = add2(baseOfTriV, scale2(perpDirV, 0.1));
  const point4V = add2(baseOfTriV, scale2(perpDirV, -0.1));
  // triangle
  const point5V = add2(baseOfTriV, scale2(perpDirV, 0.2));
  const point6V = add2(baseOfTriV, scale2(dirV, 0.2));
  const point7V = add2(baseOfTriV, scale2(perpDirV, -0.2));

  const path = [
    // rectangle
    `M ${point1V[0]} ${point1V[1]}`,
    `L ${point2V[0]} ${point2V[1]}`,
    `L ${point3V[0]} ${point3V[1]}`,
    `L ${point4V[0]} ${point4V[1]}`,
    `L ${point1V[0]} ${point1V[1]}`,
    // triangle
    `M ${point5V[0]} ${point5V[1]}`,
    `L ${point6V[0]} ${point6V[1]}`,
    `L ${point7V[0]} ${point7V[1]}`,
    `L ${point5V[0]} ${point5V[1]}`,
  ];
  arrowE.setAttribute('d', path.join(' '));
  return arrowE;
};

const convertSrcDestCellsToMove = (src, dest) => {
  const xs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ys = [8, 7, 6, 5, 4, 3, 2, 1];
  const sx = xs[src.c];
  const sy = ys[src.r];
  const dx = xs[dest.c];
  const dy = ys[dest.r];
  const move = `${sx}${sy}${dx}${dy}`;
  return move;
};

const convertMoveToSrcDestCells = (move, elems) => {
  const xs = { 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7 };
  const ys = { 8: 0, 7: 1, 6: 2, 5: 3, 4: 4, 3: 5, 2: 6, 1: 7 };

  const ms = move.slice(0, 2);
  const md = move.slice(2, 4);

  const sc = xs[ms[0]];
  const sr = ys[ms[1]];
  const dc = xs[md[0]];
  const dr = ys[md[1]];

  const srcImgE = elems[sr][sc];
  const destImgE = elems[dr][dc];

  const src = { r: sr, c: sc, imgE: srcImgE };
  const dest = { r: dr, c: dc, imgE: destImgE };
  return { src, dest };
};

class ChessEngine {
  constructor(playMoveCallback = null) {
    this.playMoveCallback = playMoveCallback;
    this.initChess();
  }

  initChess() {
    console.log('ChessEngine.initChess start');
    const chess_engine_wasm_b64 = DATA_URL_APP_WASM + ALL_DATA['pre_data_stockfish_wasm'];
    const chess_engine_wasm_wrapper = atob(ALL_DATA['pre_data_stockfish_wasm_js']);
    const chess_engine_wasm_wrapper_fixed = chess_engine_wasm_wrapper.replace(
      "stockfish.wasm",
      chess_engine_wasm_b64
    ).replace(BAD_TEXT, '');
    const chess_engine_wasm_wrapper_fixed_blob = new Blob(
      [chess_engine_wasm_wrapper_fixed],
      { type: "application/javascript" }
    );
    const chess_engine_wasm_wrapper_fixed_blob_url = URL.createObjectURL(
      chess_engine_wasm_wrapper_fixed_blob
    );
    this.chess_engine = new Worker(chess_engine_wasm_wrapper_fixed_blob_url);
    this.moves = [];
    this.chess_engine.addEventListener("message", this.handleEngineMessage.bind(this));
    this.sendMessageToEngine("uci");
    console.log('ChessEngine.initChess end');
  }

  makeMove(move) {
    console.log('ChessEngine.makeMove start, move:', move);
    this.moves.push(move);
    const moves = this.moves.join(' ');
    const msg = `position startpos moves ${moves}`;
    this.sendMessageToEngine(msg);
    this.sendMessageToEngine('go');
    // window.setTimeout(() => {
    //   this.sendMessageToEngine('stop');
    // }, 1000);
    console.log('ChessEngine.makeMove end');
  }

  sendMessageToEngine(msg) {
    console.log('ChessEngine.sendMessageToEngine start, msg:', msg);
    this.chess_engine.postMessage(msg);
  }

  handleEngineMessage(e) {
    const msg = e.data;
    console.log('ChessEngine.handleEngineMessage start, msg:', msg);
    switch (msg) {
      case 'uciok': {
        this.sendMessageToEngine("isready");
        break;
      }
      case 'readyok': {
        this.sendMessageToEngine('ucinewgame');
        break;
      }
      default: {
        const r = /^bestmove\s+(\w+)\s*/;
        if (r.test(msg)) {
          const m = msg.match(r);
          const bestmove = m[1];
          console.log('bestmove', bestmove);
          if (this.playMoveCallback) this.playMoveCallback(bestmove);
        }
        break;
      }
    }
    console.log('ChessEngine.handleEngineMessage end');
  }
}

class ChessBoard {
  constructor(rootElem, audioElem) {
    this.rootElem = rootElem;
    this.audioElem = audioElem;
    this.play_engine_move = true;
    this.show_best_move = true;
    this.hookReset = null;
    this.hookPlayTheMoveOnTheBoard = null;
    this.hookHandlePlayEngineMove = null;
    this.applyTheme("classic");
    this.reset();
  }

  applyTheme(theme_name) {
    const theme = THEMES[theme_name];
    this.colorCellLight = theme.colorCellLight;
    this.colorCellDark = theme.colorCellDark;
    this.colorCellBackground = theme.colorCellBackground;
    this.arrowFillColor = theme.arrowFillColor;
  }

  getCellFillColor(idx = 2) {
    const fillColor = idx === 0 ? this.colorCellLight : idx === 1 ? this.colorCellDark : this.colorCellBackground;
    return fillColor;
  }

  playSound() {
    this.audioElem.play();
  }

  reset() {
    console.log('ChessBoard.reset start');
    this.engine = new ChessEngine(this.handlePlayEngineMove.bind(this));
    const { boardRows } = processFenString(FEN_CHESS_START_POS);
    this.boardRows = boardRows;
    this.createChessBoardElems();
    this.to_play_white = true;
    this.last_clicked_cell = null;
    this.last_engine_arrow_elem = null;
    if (this.hookReset) this.hookReset();
    console.log('ChessBoard.reset end');
  }

  createChessBoardElems() {
    console.log('ChessBoard.createChessBoardElems start');
    this.boardElems = [];
    const boardElems = this.boardElems;
    const boardRows = this.boardRows;

    const svgE = createSvgElem('svg');
    svgE.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgE.setAttribute("viewBox", "-1 -1 10 10");
    this.svgElem = svgE;

    // board cells
    const handler = this.handleCellClick.bind(this);
    const boardE = createSvgElem("g");
    for (let r = 0; r < 8; r++) {
      const rowE = createSvgElem("g");
      const boardElemsRow = [];
      for (let c = 0; c < 8; c++) {
        const cellGE = createSvgElem("g");
        const fillColorIdx = (c + (r % 2)) % 2;
        const cellE = createCellE(r, c, this.getCellFillColor(fillColorIdx));
        cellE.addEventListener("click", handler);
        cellGE.appendChild(cellE);
        const piece = boardRows[r][c];
        // const textE = createCellTextE(r, c, piece);
        const imgE = createCellImageE(r, c, piece);
        // cellGE.appendChild(textE);
        cellGE.appendChild(imgE);
        rowE.appendChild(cellGE);
        // boardElemsRow.push(textE);
        boardElemsRow.push(imgE);
      }
      boardE.appendChild(rowE);
      boardElems.push(boardElemsRow);
    }
    svgE.appendChild(boardE);

    // left border text
    const leftVertE = createSvgElem("g");
    for (let r = 0; r < 8; r++) {
      const c = -1;
      const cellGE = createSvgElem("g");
      const cellE = createCellE(r, c, this.getCellFillColor());
      cellGE.appendChild(cellE);
      const textE = createCellTextE(r, c, `${8 - r}`);
      cellGE.appendChild(textE);
      leftVertE.appendChild(cellGE);
    }
    svgE.appendChild(leftVertE);

    // right border text
    const rightVertE = createSvgElem("g");
    for (let r = 0; r < 8; r++) {
      const c = 8;
      const cellGE = createSvgElem("g");
      const cellE = createCellE(r, c, this.getCellFillColor());
      cellGE.appendChild(cellE);
      const textE = createCellTextE(r, c, `${8 - r}`);
      cellGE.appendChild(textE);
      rightVertE.appendChild(cellGE);
    }
    svgE.appendChild(rightVertE);

    // top border text
    const topVertE = createSvgElem("g");
    for (let c = 0; c < 8; c++) {
      const r = -1;
      const cellGE = createSvgElem("g");
      const cellE = createCellE(r, c, this.getCellFillColor());
      cellGE.appendChild(cellE);
      const textE = createCellTextE(r, c, String.fromCodePoint(97 + c));
      cellGE.appendChild(textE);
      topVertE.appendChild(cellGE);
    }
    svgE.appendChild(topVertE);

    // bottom border text
    const bottomVertE = createSvgElem("g");
    for (let c = 0; c < 8; c++) {
      const r = 8;
      const cellGE = createSvgElem("g");
      const cellE = createCellE(r, c, this.getCellFillColor());
      cellGE.appendChild(cellE);
      const textE = createCellTextE(r, c, String.fromCodePoint(97 + c));
      cellGE.appendChild(textE);
      bottomVertE.appendChild(cellGE);
    }
    svgE.appendChild(bottomVertE);

    this.rootElem.innerHTML = "";
    this.rootElem.appendChild(svgE);
    console.log('ChessBoard.createChessBoardElems end');
  }

  getInfoFromCell(cellE) {
    const r = parseInt(cellE.getAttribute("data-r"), 10);
    const c = parseInt(cellE.getAttribute("data-c"), 10);
    const imgE = this.boardElems[r][c];
    return { r, c, imgE };
  }

  handleCellClick(e) {
    const cellE = e.target;
    if (this.last_clicked_cell === null) {
      this.last_clicked_cell = cellE;
      cellE.setAttribute("fill", "yellow");
      return;
    }
    const oldFillColor = this.last_clicked_cell.getAttribute("data-fill");
    this.last_clicked_cell.setAttribute("fill", oldFillColor);
    const src = this.getInfoFromCell(this.last_clicked_cell);
    const dest = this.getInfoFromCell(cellE);
    console.log("src", src, "dest", dest);
    this.last_clicked_cell = null;
    const is_valid = this.playTheMoveOnTheBoard(src, dest);
    if (!is_valid) return;
    const move = convertSrcDestCellsToMove(src, dest);
    console.log('move', move);
    this.engine.makeMove(move);
  }

  isCastling(src, dest) {
    console.log('ChessBoard.isCastling start');
    const boardRows = this.boardRows;
    const srcPiece = boardRows[src.r][src.c];
    const destPiece = boardRows[dest.r][dest.c];
    console.log('1');
    if (srcPiece.toLowerCase() !== P_KING) return undefined;
    console.log('2');
    if (destPiece !== P_EMPTY) return undefined;
    console.log('3');
    if (src.r !== dest.r) return undefined;
    console.log('4');
    if (this.to_play_white && src.r !== 7) return undefined;
    console.log('5');
    if (!this.to_play_white && src.r !== 0) return undefined;
    console.log('6');
    if (src.c === 4 && dest.c === 6) {
      console.log('short castling');
      const t1 = this.boardElems[src.r][7];
      const t2 = this.boardElems[src.r][5];
      return { rookSrc: { r: src.r, c: 7, imgE: t1 }, rookDest: { r: src.r, c: 5, imgE: t2 } };
    }
    console.log('7');
    if (src.c === 4 && dest.c === 2) {
      console.log('long castling');
      const t1 = this.boardElems[src.r][0];
      const t2 = this.boardElems[src.r][3];
      return { rookSrc: { r: src.r, c: 0, imgE: t1 }, rookDest: { r: src.r, c: 3, imgE: t2 } };
    }
    console.log('8');
    return undefined;
  }

  playTheMoveOnTheBoard(src, dest) {
    console.log('ChessBoard.playTheMoveOnTheBoard start src, dest:', src, dest);
    const boardRows = this.boardRows;
    if (src.r === dest.r && src.c === dest.c) return false;
    const srcPiece = boardRows[src.r][src.c];
    const destPiece = boardRows[dest.r][dest.c];
    if (srcPiece === P_EMPTY) return false;
    if (this.to_play_white && isWhitePiece(destPiece)) return false;
    const isCastling = this.isCastling(src, dest);
    boardRows[src.r][src.c] = P_EMPTY;
    boardRows[dest.r][dest.c] = srcPiece;
    if (isCastling) {
      const { rookSrc, rookDest } = isCastling;
      boardRows[rookSrc.r][rookSrc.c] = P_EMPTY;
      const t1 = this.to_play_white ? P_ROOK.toUpperCase() : P_ROOK;
      boardRows[rookDest.r][rookDest.c] = t1;
      rookSrc.imgE.classList.add(CLASS_HIDDEN);
      rookSrc.imgE.setAttribute('href', '');
      rookDest.imgE.setAttribute('href', PIECE_IMGS[t1]);
      rookDest.imgE.classList.remove(CLASS_HIDDEN);
    }
    src.imgE.classList.add(CLASS_HIDDEN);
    src.imgE.setAttribute('href', '');
    dest.imgE.setAttribute('href', PIECE_IMGS[srcPiece]);
    dest.imgE.classList.remove(CLASS_HIDDEN);
    this.to_play_white = !this.to_play_white;
    this.playSound();
    const move = convertSrcDestCellsToMove(src, dest);
    if (this.hookPlayTheMoveOnTheBoard) this.hookPlayTheMoveOnTheBoard(move, src, dest);
    console.log('ChessBoard.playTheMoveOnTheBoard end');
    return true;
  }

  handlePlayEngineMove(move) {
    console.log('ChessBoard.handlePlayEngineMove start move:', move);
    const { src, dest } = convertMoveToSrcDestCells(move, this.boardElems);
    console.log('src, dest', src, dest);
    if (this.last_engine_arrow_elem) this.svgElem.removeChild(this.last_engine_arrow_elem);
    this.last_engine_arrow_elem = null;
    if (this.show_best_move) {
      const arrowE = createArrowBetweenCellE(src, dest, this.arrowFillColor);
      this.last_engine_arrow_elem = arrowE;
      this.svgElem.appendChild(arrowE);
    }
    if (!this.play_engine_move) return;
    if (this.to_play_white) return; // player is white
    const is_valid = this.playTheMoveOnTheBoard(src, dest);
    if (!is_valid) return;
    this.engine.makeMove(move);
    if (this.hookHandlePlayEngineMove) this.hookHandlePlayEngineMove(move, src, dest);
    console.log('ChessBoard.handlePlayEngineMove end');
  }
}

const initialize = () => {
  console.log('initialize start');

  const input_show_best_move = document.querySelector('#input-show-best-move');
  const input_play_engine_move = document.querySelector('#input-play-engine-move');
  const select_theme = document.querySelector('#select-theme');
  const button_reset = document.querySelector("#button-reset");
  const textarea_moves_elem = document.querySelector('#textarea-moves');
  const audio_tap = document.querySelector("#audio-tap");
  const div_chessboard = document.body.querySelector("#div-chessboard");

  audio_tap.setAttribute('src', DATA_URL_AUDIO_WAV + ALL_DATA['pre_data_tap_wav']);
  textarea_moves_elem.textContent = '';

  const chessboard = new ChessBoard(div_chessboard, audio_tap);
  chessboard.play_engine_move = input_play_engine_move.checked;
  chessboard.show_best_move = input_show_best_move.checked;
  chessboard.hookReset = () => { textarea_moves_elem.textContent = ''; };
  chessboard.hookPlayTheMoveOnTheBoard = (m, _, __) => { textarea_moves_elem.textContent += m + ' ' };
  // console.log('chessboard', chessboard);

  button_reset.addEventListener("click", () => chessboard.reset());

  input_play_engine_move.addEventListener('change', () => {
    chessboard.play_engine_move = input_play_engine_move.checked;
  });

  input_show_best_move.addEventListener('change', () => {
    chessboard.show_best_move = input_show_best_move.checked;
  });

  select_theme.addEventListener('change', () => {
    const theme_name = select_theme.value;
    // console.log('theme_name', theme_name);
    chessboard.applyTheme(theme_name);
    chessboard.reset();
    const theme = THEMES[theme_name];
    document.body.style.backgroundColor = theme.colorCellBackground;
  });

  console.log('initialize end');
};

const main = () => {
  console.log('main start');
  initialize();
  console.log('main end');
};

main();
