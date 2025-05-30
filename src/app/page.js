import SectionBlog from "@/components/blog/SectionBlog";
import Hero from "@/components/home/Hero";
import InformationSection from "@/components/home/InformationSection";
import SectionSumbagan from "@/components/home/SectionSumbangan";
import { getCurrentUser } from "@/lib/auth/getCurrentUser";
import prisma from "@/lib/prisma";

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
    <div className="w-full space-y-40">
      <div className="w-full ">
        <Hero user={user} blog={blog} />
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
      </div>
    </div>
  );
}
