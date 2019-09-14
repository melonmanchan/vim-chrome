import { VimWasm } from "vim-wasm";

const vim = new VimWasm({
  canvas: document.getElementById("vim-screen") as HTMLCanvasElement,
  input: document.getElementById("vim-input") as HTMLInputElement,
  workerScriptPath: "./vim/vim.js"
});

vim.start();
