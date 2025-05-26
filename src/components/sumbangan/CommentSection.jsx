"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";

const CommentSection = ({ commentData }) => {
  if (!commentData || commentData.length === 0) {
    return (
      <div className="w-full mt-10 text-center text-muted-foreground">
        <h1 className="text-base md:text-lg font-light">
          Belum ada komentar untuk sumbangan ini.
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full gap-4 mt-6">
      {commentData.map((comment) => (
        <div
          key={comment.id}
          className="w-full bg-card border border-blue-600/30 hover:border-blue-700 rounded-xl p-4 flex gap-4 items-start hover:shadow-md transition-shadow duration-200 "
        >
          {/* Avatar */}
          <h1 className="shrink-0">
            <Image
              src={
                comment.user.image ||
                "https://i.pravatar.cc/150?u=" + comment.user.id
              }
              alt="User Avatar"
              width={50}
              height={50}
              className="rounded-full object-cover border border-border hover:scale-105 transition-transform"
            />
          </h1>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h1 className="font-semibold text-sm md:text-base text-text-primary hover:underline">
                {comment.user.name || "Pengguna"}
              </h1>
              <span className="text-xs text-muted-foreground">
                {formatDistanceToNow(new Date(comment.createdAt), {
                  addSuffix: true,
                  locale: id,
                })}
              </span>
            </div>

            <p className="text-sm md:text-base leading-relaxed text-text-primary">
              {comment.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
