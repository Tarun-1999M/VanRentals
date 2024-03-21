
import { Hero,About,Vans,VanDetail,Host,HostVans,HostVanDetail,Details,Pricing,Photos,FourOFour,Login} from "./sections"
import {Route} from "react-router-dom"
import {Auth} from "./components/Auth"
import "./server"
import Layout from "./sections/Layout"
import Dashboard from "./components/Dashboard"
import Income from "./components/Income"
import Reviews from "./components/Reviews"
import Error from "./components/Error"
import { createBrowserRouter,RouterProvider,createRoutesFromElements } from "react-router-dom"
import {loader as vansLoader} from "./sections/Vans"
import {loader as hostVansLoader} from "./sections/HostVans"
import {loader as hostVanDetail} from "./sections/HostVanDetail"
import {loader as vanDetailLoader} from "./sections/VanDetail"
import "./index.css"
import {action as loginAction} from "./sections/Login"
import {loader as loaderLogin} from "./sections/Login"
localStorage.removeItem('loggedin')
function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/"element={<Layout />} errorElement={<Error />}>
    <Route index element={<Hero />}/>
    <Route path="about" element={<About />} />
    <Route path="vans" element={<Vans />}  loader={vansLoader} />
    <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader}/>

    <Route  path="host"element={<Host/>}>
     
      <Route index element={<Dashboard />} loader={async ()=>await Auth()}/>
      <Route path="vans" element={<HostVans />} loader={hostVansLoader}/>
      <Route path="vans/:id" element={<HostVanDetail />} loader={hostVanDetail}>
        <Route index element={<Details />} loader={async ()=>await Auth()}/>
        <Route path="pricing" element={<Pricing />} loader={async ()=>await Auth()} />
        <Route path="photos" element={<Photos />} loader={async ()=>await Auth()}/>
      </Route>
      <Route path="income" element={<Income />} loader={async ()=>await Auth()}/>
      <Route path="reviews" element={<Reviews />} loader={async ()=>await Auth()}/>

    </Route>

    <Route path="login" element={<Login />} action={loginAction} loader={loaderLogin}/>
    <Route path="*" element={<FourOFour />} />
  </Route>
  ))
  return (
    <>
    <RouterProvider router={router} />
    </>

  )
}

export default App
