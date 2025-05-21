import { useEffect, useState } from 'react'
import { axios } from 'axios';
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('')
    .then((res)=>setData(res))
    .catch((err)=>console.error("dikkat ho ye toh ",err))
  },[]);

  return (
    <>
      
    </>
  )
}

export default App
