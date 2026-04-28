import CaptureWorklet from "pkg/worklet/capture?worker";
//#region src/index.ts
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule(CaptureWorklet);
//#endregion
export { audioContext };
