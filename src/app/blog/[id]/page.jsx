import BlogLain from "@/components/blog/BlogLain";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  const blog = await prisma.blog.findUnique({
    where: {
      id: id,
    },
    include: {
      sumbangan: true,
    },
  });

  const blogs = await prisma.blog.findMany();
  return (
    <div className="w-full space-y-16">
      <div className="w-full flex flex-col lg:flex-row items-start gap-2 ">
        <Image
          src={blog.image || "https://placehold.co/600x400/png"}
          width={600}
          height={400}
          alt="image"
          className="object-cover rounded-lg"
        />

        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="w-full">
              <div className="flex items-start justify-between mb-10">
                <div>
                  <h1 className="font-bold text-3xl first-letter:uppercase">
                    {blog.title}
                  </h1>
                  <Link
                    href={`/sumbangan/${blog.sumbangan.id}`}
                    className="text-gray-700 hover:text-blue-800 hover:underline"
                  >
                    {blog.sumbangan.title}
                  </Link>
                </div>
                <h1>{blog.sumbangan.location}</h1>
              </div>
            </div>
          </div>
          <h1>
            <span>{blog.content}</span>
          </h1>
        </div>
      </div>

      <div className="w-full">
        <h1>Artikel Lain</h1>

        <BlogLain blog={blogs.slice(0, 3)} />
      </div>
    </div>
  );
};

export default page;
