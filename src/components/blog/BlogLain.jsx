import Link from "next/link";
import React from "react";
import { format } from "date-fns";

const BlogLain = ({ blog }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blog.map((item) => {
        const formattedDate = format(new Date(item.createdAt), "dd MMM yyyy");

        return (
          <Link href={`/blog/${item.id}`} key={item.id}>
            <div className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                  Blog
                </span>
                <span className="text-xs text-gray-400">{formattedDate}</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-800 group-hover:underline mb-2 line-clamp-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 group-hover:text-gray-800 line-clamp-3">
                {item.content}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogLain;
