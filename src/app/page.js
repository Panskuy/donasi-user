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

  return (
    <div className="w-full space-y-28">
      <div className="w-full ">
        <Hero user={user} donasi={sumbangan.slice(0, 5)} />
      </div>

      <InformationSection />

      <div>
        <SectionSumbagan
          sumbangan={sumbangan.slice(0, 6)}
          title="Program Donasi Kami"
          href={"/sumbangan"}
        />
      </div>
    </div>
  );
}
