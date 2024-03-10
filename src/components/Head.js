import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchSuggestion, toggleMenu } from "../utils/appSlice";
import { Youtube_Search_Api } from "../utils/Constants";
import { setcategory } from "../utils/appSlice";
import { CiSearch } from "react-icons/ci";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  //const[Suggestion,SetSuggestion]=useState([])
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const { searchSuggestion } = useSelector((store) => store.app);

  const getSearchSuggestions = async () => {
    const data = await fetch(Youtube_Search_Api + searchQuery);
    const json = await data.json();
    //console.log(json)
    //SetSuggestion(json[1])
    //console.log(json[1])
    dispatch(setSearchSuggestion(json[1]));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [active, setActive] = useState("All");
  const videoTag = (tag) => {
    setActive(tag);
    //console.log(active)
    dispatch(setcategory(tag));
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          className="h-6 cursor-pointer my-2"
          src="https://as2.ftcdn.net/v2/jpg/01/09/84/11/1000_F_109841191_B1qcKCxRwwt4DWIBpXD7bc4IPcozRBzT.jpg"
          alt="hanb"
        />
        <a href="/">
          <img
            className="h-12 mx-5 pb-2"
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
            alt="youtube"
          />
        </a>
      </div>
      <div className="col-span-10 px-12  ">
        <div>
          <input
            className="px-5  py-[10px] w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button
            onClick={() => {
              videoTag(searchQuery);
            }}
            className=" px-3 py-[14px] border border-gray-400 p-2  rounded-r-full"
          >
            <CiSearch />
          </button>
        </div>

        {showSuggestion && (
          <div className="fixed bg-white py-2 px-2 w-[31rem] shadow-lg rounded-lg border border-gray-100 ">
            <ul>
              {searchSuggestion.map((s) => {
                return (
                  <li
                    key={s}
                    className=" py-2 px-3 shadow-sm hover:bg-gray-100"
                  >
                    🔍 {s}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
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
