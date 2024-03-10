import { useState } from 'react'
import {Header, Hero,Footer,About} from "./sections"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <section>
        <Header />
      </section>
      <Routes>
          <Route path="/" element={<Hero />}/>
          <Route path="/about" element={<About />} />
      </Routes>
      <section>
        <Footer />
      </section>
      </BrowserRouter>
    </>

  )
}

export default App
