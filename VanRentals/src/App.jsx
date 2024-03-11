
import { Hero,About,Vans,VanDetail,Host,HostVans,HostVanDetail,Details,Pricing,Photos} from "./sections"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./server"
import Layout from "./sections/Layout"
import Dashboard from "./components/Dashboard"
import Income from "./components/Income"
import Reviews from "./components/Reviews"
import "./index.css"
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Layout />}>
          <Route index element={<Hero />}/>
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />}/>

          <Route  path="host"element={<Host/>}>
            <Route index element={<Dashboard />} />
            <Route path="vans" element={<HostVans />} />
            
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<Details />}/>
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>

            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> 
        </Route>
      </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
