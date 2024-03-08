import React, { useState } from "react";

const commentsData = [
  {
    name: "Vyom Gangwar",
    text: "lorem ipsum dolo sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Vyom Gangwar",
    text: "lorem ipsum dolo sit amet, consectetur adip",
    replies: [
      {
        name: "Vyom Gangwar",
        text: "lorem ipsum dolo sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Vyom Gangwar",
        text: "lorem ipsum dolo sit amet, consectetur adip",
        replies: [
          {
            name: "Vyom Gangwar",
            text: "lorem ipsum dolo sit amet, consectetur adip",
            replies: [
              {
                name: "Vyom Gangwar",
                text: "lorem ipsum dolo sit amet, consectetur adip",
                replies: [
                  {
                    name: "Vyom Gangwar",
                    text: "lorem ipsum dolo sit amet, consectetur adip",
                    replies: [],
                  },
                  {
                    name: "Vyom Gangwar",
                    text: "lorem ipsum dolo sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Vyom Gangwar",
                        text: "lorem ipsum dolo sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Vyom Gangwar",
    text: "lorem ipsum dolo sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Vyom Gangwar",
    text: "lorem ipsum dolo sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Vyom Gangwar",
    text: "lorem ipsum dolo sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Vyom Gangwar",
    text: "lorem ipsum dolo sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Vyom Gangwar",
    text: "lorem ipsum dolo sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  const [close, setClose] = useState(false);

  return (
    <div className="flex mt-4 shadow-sm bg-gray-100 p-2 rounded-lg">
      <img
        onClick={() => {
          setClose(!close);
        }}
        className="w-8 h-8 cursor-pointer"
        alt="profile-icon"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
        {close && (
          <div>
            {replies.map((reply, index) => (
              <div key={index} className="ml-8 mt-2">
                <p className="font-bold">{reply.name}</p>
                <p>{reply.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


const CommentsList = ({ comments }) => {
  return (
   <>
      {comments.map((comment) => (
        <div>
        <Comment data={comment} />
        <div className="pl-5 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
        </div>
        
      ))}
      </>
  
  );
};

const CommentsContainer = () => {
  
  return (
    <div  className="m-5 p-2">
      <h1 className="text-2xl font-bold">comments</h1>

      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
