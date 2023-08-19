import React from "react"
import Header from "./header"
import Hero from "./hero"
import About from "./about"
import Projects from "./projects"

function App() {
  return(
    <div className="bg-black w-full min-h-screen font-poppins">
      <Header />
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default App