import {useState, useEffect, useContext} from 'react'
import {AuthContext} from '../providers/AuthProvider'
import Axios from "Axios"

export default function FetchUser(props){
  const [loaded, setloaded] = useState(false)
  const {authenticated, setUser} = useContext(AuthContext)

  useEffect(async () =>{
    if(!authenticated){
      await checkLocalToken();
    }
    setloaded(true)
  },[])

  async function checkLocalToken(){
    if(localStorage.getItem("access-token")){
      try {
        const res = await Axios.get("api/auth/validate_token");
        setUser(res.data.data)
      }catch (e){
        console.log(e)
      }
    }
  }

  return loaded ? props.children : null
}