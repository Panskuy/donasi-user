import SectionBlog from "@/components/blog/SectionBlog";
import AboutKasiba from "@/components/home/AboutKasiba";
import Hero from "@/components/home/Hero";
import InformationSection from "@/components/home/InformationSection";
import SectionSumbagan from "@/components/home/SectionSumbangan";
import { getCurrentUser } from "@/lib/auth/getCurrentUser";
import prisma from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await getCurrentUser();
  const sumbangan = await prisma.sumbangan.findMany({
    where: {
      isShow: true,
    },
  });

  const blog = await prisma.blog.findMany({
    include: {
      sumbangan: true,
    },
  });

  return (
    <div className="w-full space-y-20 lg:space-y-40">
      <div className="w-full ">
        <Hero />
      </div>

      <InformationSection />

      <div>
        <h2 className="text-3xl font-bold text-primary mb-10 text-center">
          Program Donasi
        </h2>
        <SectionSumbagan
          sumbangan={sumbangan.slice(0, 6)}
          title="Program Donasi Kami"
          href={"/sumbangan"}
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-primary mb-10 text-center">
          Blog
        </h2>
        <SectionBlog
          blog={blog.slice(0, 3)}
          title={"Blog Kami"}
          href={"/blog"}
        />
      </div>

      <div>
        <AboutKasiba />
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-4 font-bold">
          Panti Asuhan Ingin Bergabung?
        </h1>
        <Link
          href={"https://forms.gle/SWcLsbCLeFBxYWnTA"}
          className="px-4 bg-blue-500 text-white text-lg py-2 rounded-lg"
        >
          Begabung Sekarang!
        </Link>
      </div>
    </div>
  );
}
