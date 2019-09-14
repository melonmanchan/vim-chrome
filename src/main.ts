import { VimWasm } from "vim-wasm";

const vim = new VimWasm({
  canvas: document.getElementById("vim-canvas") as HTMLCanvasElement,
  input: document.getElementById("vim-input") as HTMLInputElement,
  workerScriptPath: "vim-wasm/vim.js"
});

vim.start();
