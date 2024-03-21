
import {redirect} from "react-router-dom"
export async function Auth(){
       
       const isLoggedIn= localStorage.getItem('loggedin')
        if(!isLoggedIn){
         const response =  redirect("/login?message=You must login first.")
         response.body = true
         return response
        }
        return null
       
}


