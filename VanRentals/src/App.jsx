
import {Header, Hero,Footer,About,Vans,VanDetail} from "./sections"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./server"
function App() {

  return (
    <>
    <BrowserRouter>
      <section>
        <Header />
      </section>
      <Routes>
          <Route path="/" element={<Hero />}/>
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />}/>
      </Routes>
      <section>
        <Footer />
      </section>
      </BrowserRouter>
    </>

  )
}

export default App
