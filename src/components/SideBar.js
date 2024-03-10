import React from "react";
import { AiFillHome, AiFillLike, RiVideoFill } from "react-icons/ai";
import {MdSubscriptions,MdVideoLibrary,MdHistory,MdOutlineWatchLater} from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="p-9 mx-5 shadow-lg">
      <ul className="w-50">
        <Link to="/">
          <li className="flex items-center  font-bold mb-4">
            <AiFillHome className="mr-4 text-xl" />
            Home
          </li>
        </Link>
        <Link to="/">
          <li className="flex items-center  font-bold mb-4">
            <MdSubscriptions className="mr-4 text-xl" />
            Subscription
          </li>
        </Link>
        <Link to="/">
          <li className="flex items-center  font-bold mb-4">
            <MdVideoLibrary className="mr-4 text-xl" />
            Library
          </li>
        </Link>
        <Link to="/">
          <li className="flex items-center font-bold mb-4">
            <MdHistory className="mr-4 text-xl" />
            History
          </li>
        </Link>
        <Link to="/">
          <li className="flex items-center   font-bold mb-4">
            <MdOutlineWatchLater className="mr-4 text-xl" />
            Watch Later
          </li>
        </Link>
        <Link to="/">
          <li className="flex items-center   font-bold mb-4">
            <AiFillLike className="mr-4 text-xl" />
            Liked Videos
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
