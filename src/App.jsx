function App() {

  return (
    <>
    <div role="alert" className="flex justify-center text-center alert alert-success">      
      <span>Your basic installation done!</span>
      <br />
      <ul className="text-white steps steps-vertical lg:steps-horizontal">
        <li className="step" data-content="✓">Vite</li>
        <li className="step" data-content="✓">React</li>
        <li className="step" data-content="✓">Tailwind</li>
        <li className="step" data-content="✓">DaisyUI</li>
      </ul>
      
    </div>
      
    </>
  )
}

export default App
