import CaptureWorklet from "pkg/worklet/capture?worker"
import CaptureWorkletUrl from "pkg/worklet/capture?worker&url"

const audioContext = new AudioContext()
await audioContext.audioWorklet.addModule(CaptureWorklet)
await audioContext.audioWorklet.addModule(CaptureWorkletUrl)

export { audioContext }
