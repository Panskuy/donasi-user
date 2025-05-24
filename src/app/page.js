import Hero from "@/components/home/Hero";
import SectionSumbagan from "@/components/home/SectionSumbangan";
import { getCurrentUser } from "@/lib/auth/getCurrentUser";

export default async function Home() {
  const user = await getCurrentUser();
  let sumbangan = await prisma.sumbangan.findMany();

  return (
    <div className="w-full">
      <Hero user={user} />
      <SectionSumbagan
        sumbangan={sumbangan.slice(0, 3)}
        title="Program Donasi Kami"
        href={"/sumbangan"}
      />
    </div>
  );
}
