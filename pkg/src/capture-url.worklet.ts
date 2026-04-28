class Capture extends AudioWorkletProcessor {
  #sampleCount = 0

  process(input: Float32Array[][]) {
    if (input.length > 1) throw new Error("only one input is supported.")

    const channels = input[0]!
    if (channels.length === 0) return true // TODO: No input hooked up?

    // Convert sample count to microseconds
    const timestamp = (this.#sampleCount / sampleRate) * 1000000

    const msg = {
      timestamp,
      channels,
    }

    this.port.postMessage(msg)

    this.#sampleCount += channels[0]!.length
    return true
  }
}

registerProcessor("capture", Capture)
