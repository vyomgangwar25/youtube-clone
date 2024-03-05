import React from 'react'

const VideoCard = ({info}) => {
 //  console.log(info)
//    const{snippet,statistics}=info;
//     const{channelTitle,title,thumbnails}=snippet
if (!info) {
    return <div>No video information available</div>;
  }

  
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
       <img className=" rounded-lg"src= {info.snippet.thumbnails.medium.url} alt="" />
       <ul>
        <li className='font-bold'>{info.snippet.title}</li>
        <li>{info.snippet.channelTitle}</li>
        <li>{info.statistics.viewCount}views</li>
       </ul>
        
    </div>
  )
}

export default VideoCard
