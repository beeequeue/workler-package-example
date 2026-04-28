//#region src/capture.worklet.ts
var Capture = class extends AudioWorkletProcessor {
	#sampleCount = 0;
	process(input) {
		if (input.length > 1) throw new Error("only one input is supported.");
		const channels = input[0];
		if (channels.length === 0) return true;
		const msg = {
			timestamp: this.#sampleCount / sampleRate * 1e6,
			channels
		};
		this.port.postMessage(msg);
		this.#sampleCount += channels[0].length;
		return true;
	}
};
registerProcessor("capture", Capture);
//#endregion
export {};
