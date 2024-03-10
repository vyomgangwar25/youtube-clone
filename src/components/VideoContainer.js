import React, { useEffect, useState } from 'react'
import { Youtube_Videos_API } from '../utils/Constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import { Google_Api_key } from '../utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { setHomeVideo } from '../utils/appSlice'

const VideoContainer = () => {
 
 const{video,category}=useSelector((store)=>store.app)
  
  const dispatch=useDispatch()
  
  const getVideos=async()=>{
    const data=await fetch(Youtube_Videos_API)
    const json=await data.json();
    //console.log(json.items)
   dispatch(setHomeVideo(json.items))
    
  }

  const fetchVideoByCategory=async()=>{
    const res=await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${Google_Api_key }`)
    const json=await res.json();
    dispatch(setHomeVideo(json.items))
    //console.log(json)
  }
   

  useEffect(()=>{
    if(category === "All")
    {
      getVideos()
    }
    else{
    fetchVideoByCategory()
    }
   
  },[category])


  return (
    <div className='flex flex-wrap'>
    {video.map((data)=>{
      return <Link to={"/watch?v="+data.id} key={data.id}> <VideoCard  info={data}/></Link>
      
    })}
     
    </div> 
  )
}

export default VideoContainer
