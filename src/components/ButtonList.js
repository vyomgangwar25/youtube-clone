import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setcategory } from "../utils/appSlice";

const ButtonList = () => {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();
  const videoTag = (tag) => {
    if (active !== tag) {
      dispatch(setcategory(tag));
      setActive(tag);
    }
  };

  const list = [
    "All",
    "Java",
    "JavaScript",
    "React",
    "Cricket",
    "News",
    "Music",
    "Javascript",
    " Programming",
    "Computer Science",
    "Mix",
    "Recruitment",
    "Gaming",
    "Live",
  ];
  return (
    <div className="flex w-full overflow">
      {list.map((name, index) => {
        return (
          <div key={index}>
            <button
              onClick={() => {
                videoTag(name);
              }}
              className="bg-gray-200 w-fit font-medium mx-1 cursor-pointer px-3 py-2 rounded-lg"
            >
              {name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
