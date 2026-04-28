import { audioContext } from "pkg"
import { createSignal } from "solid-js"
import "./App.css"

function App() {
  const [count, setCount] = createSignal(0)

  audioContext.close()

  return (
    <>
      <section id="center">
        <div class="hero"></div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          class="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count()}
        </button>
      </section>

      <div class="ticks"></div>

      <section id="spacer"></section>
    </>
  )
}

export default App
