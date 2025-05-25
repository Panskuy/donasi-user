import React from "react";

const CommentSection = ({ commentData }) => {
  return (
    <div className="flex flex-col w-full gap-2">
      {commentData.map((comment, index) => {
        return (
          <div
            key={comment.id}
            className="w-full border-b border-green-900/20 py-2 flex gap-2 items-center justify-between text-sm"
          >
            <div className="flex gap-2 items-center">
              <h1 className="text-green-800 italic">{index + 1}</h1>
              <h1 className="text-green-800 italic">{comment.content}</h1>
            </div>

            <p className="text-green-800 italic">
              {new Date(comment.createdAt).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentSection;
