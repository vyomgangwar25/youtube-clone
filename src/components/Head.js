import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Youtube_Search_Api } from "../utils/Constants";

const Head = () => {
  const[searchQuery,setSearchQuery]=useState("");
  const[Suggestion,SetSuggestion]=useState([])
  const[showSuggestion,setShowSuggestion]=useState(false)

  const getSearchSuggestions=async()=>{
    const data=await fetch(Youtube_Search_Api + searchQuery);
    const json=await data.json();
   // console.log(json)
   SetSuggestion(json[1])

  }
 
  useEffect(()=>{
  getSearchSuggestions()
  },[searchQuery])

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
 


  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          className="h-6 cursor-pointer"
          src="https://as2.ftcdn.net/v2/jpg/01/09/84/11/1000_F_109841191_B1qcKCxRwwt4DWIBpXD7bc4IPcozRBzT.jpg"
          alt="hanb"
        />
        <a href="/">
        <img
          className="h-10 mx-3"
          src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
          alt="youtube"
        />
        </a>
      </div>
      <div className="col-span-10 px-12">
      <div>
        <input
          className="px-5 py-2 w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestion(true)}
          onBlur={()=>setShowSuggestion(false)}
        />
        <button className="border border-gray-400 p-2 rounded-r-full">
          🔍
        </button>
        </div>
       
        {showSuggestion && (
          <div className="fixed bg-white py-2 px-2 w-[31rem] shadow-lg rounded-lg border border-gray-100 ">
          <ul>
          {Suggestion.map((s)=>{
            return <li key={s} className=" py-2 px-3 shadow-sm hover:bg-gray-100">🔍  {s}</li>
          })}
         </ul>
        </div>
        )
        
        }
      </div>
      <div className=" col-span-1">
        <img
          className="h-8"
          src="https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Head;
