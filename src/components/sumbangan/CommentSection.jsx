import Image from "next/image";
import React from "react";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";
import { CommentButtons } from "./CommentButtons";
import { getCurrentUser } from "@/lib/auth/getCurrentUser";

const CommentSection = async ({ commentData }) => {
  if (!commentData || commentData.length === 0) {
    return (
      <div className="w-full mt-10 text-center text-gray-500">
        <p className="text-base md:text-lg font-light">
          Belum ada komentar untuk sumbangan ini.
        </p>
      </div>
    );
  }

  const user = await getCurrentUser();

  return (
    <div className="flex flex-col w-full gap-6 mt-6 max-h-[1000px] overflow-auto">
      {commentData.map((comment) => (
        <div
          key={comment.id}
          className="flex w-full items-start bg-white border border-blue-500 p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          {/* Avatar */}
          <Image
            src={
              comment.user.image ||
              `https://i.pravatar.cc/150?u=${comment.user.id}`
            }
            width={48}
            height={48}
            alt={`Foto user ${comment.user.name}`}
            className="object-cover rounded-full border border-blue-300"
          />

          {/* Konten */}
          <div className="flex flex-col ml-4 flex-1">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-black text-sm md:text-base hover:underline">
                {comment.user.name}
              </h1>
              <div className="flex gap-2 items-start">
                <span className="text-xs text-end text-gray-500">
                  {formatDistanceToNow(new Date(comment.createdAt), {
                    addSuffix: true,
                    locale: id,
                  })}
                </span>

                {user ? (
                  <div>
                    {user.id === comment.user.id ? (
                      <div className="flex items-end">
                        <CommentButtons id={comment.id} />
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-2 bg-gray-100 text-blue-950 text-sm md:text-base text-justify p-3 rounded-xl break-words whitespace-pre-line w-60 lg:w-full">
              {comment.content}
            </div>
          </div>

          {/* Tombol Aksi */}
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
