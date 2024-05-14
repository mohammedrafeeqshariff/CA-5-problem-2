import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';

const Timer = () => {


  const [isrunning, setIsrunnning] = useState(true)
  const [ftime, setfTime] = useState(0)
  const [stime, setsTime] = useState(0)
  const [retrieved, setRetrieved] = useState()


  useEffect(()=>{
    const count = setInterval(()=>{setfTime(prevtime => prevtime+1)},1000)
    return ()=> (clearInterval(count))
  },[ftime,isrunning])

  useEffect(()=>{
    const count = setInterval(()=>{setsTime(prevtime => prevtime+1)},2000)
    return ()=> (clearInterval(count))
  },[stime,isrunning])



  const Multiple = async(data)=>{
    try{
      if (ftime%2==0 && stime%2==0){
        await axios.post('https://localhost:3000/POST',data)
        console.log(data)
        console.log(ftime,stime)
      }
      else{
        console.log("nope")
      }
    }catch(error){
      console.log(error.message,"error post")
    }

  }
  Multiple()

  const FetchData = async()=>{
    try{
      const response =  await axios.get('https://localhost:3000/POST')
      const countData = response.data.map((item)=>({
        ...item
    }))
      setRetrieved(countData)
      console.log("retrieved data", countData)
    }catch(error){
      console.log(error.message, "GET error cannot fetch")
    }
  }


  return (
    <div>
      <h1>{ftime}</h1>
      <h1>{stime}</h1>
    </div>
  )
}

export default Timer
