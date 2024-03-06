import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)

  if(!isMenuOpen)
  return null
  return (
    <div className='p-9 mx-5 shadow-lg '>
     <ul className="w-50">
     <Link to="/"> <li>Home</li></Link>
       <Link to="https://www.youtube.com/results?search_query=shorts"> <li>Shorts</li></Link>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscription</h1>

      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default SideBar
