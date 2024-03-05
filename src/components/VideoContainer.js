import React, { useEffect, useState } from 'react'
import { Youtube_Videos_API } from '../utils/Constants'
import VideoCard from './VideoCard'

const VideoContainer = () => {
  const[videos,setVideos]=useState([])

  const getVideos=async()=>{
    const data=await fetch(Youtube_Videos_API)
    const json=await data.json();
    //console.log(json.items)
    setVideos(json.items)
  }
   

  useEffect(()=>{
    getVideos()
  },[])


  return (
    <div className='flex flex-wrap'>
    {videos.map((data)=>{
      return <VideoCard key={data.id} info={data}/>
      
    })}
     
    </div>
  )
}

export default VideoContainer
