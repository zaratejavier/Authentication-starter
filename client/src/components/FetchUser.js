import {useState, useEffect, useContext} from 'react'
import { AuthContext } from "../providers/AuthProvider"
import axios from "axios"

export default function FetchUser(props){
  const [loaded, setloaded] = useState(false)
  const {authenticated, setUser} = useContext(AuthContext)

  useEffect(async () =>{
    if(!authenticated){
      await checkLocalToken();
    }
    setloaded(true) //set loaded to true and render all of the other components
  },[])


  // The checkLocalToken function will check to see if we have a token saved in localStorage and retrieve it if it finds one.  
  async function checkLocalToken(){
    if(localStorage.getItem("access-token")){
      try {
        const res = await axios.get("/api/auth/validate_token");
        setUser(res.data.data)
      }catch (e){
        console.log(e)
      }
    }
  }

  return loaded ? props.children : null
}