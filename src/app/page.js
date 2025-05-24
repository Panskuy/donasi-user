import SectionSumbagan from "@/components/home/SectionSumbangan";

export default async function Home() {
  const sumbangan = await prisma.sumbangan.findMany();

  return (
    <div className="w-full">
      <SectionSumbagan
        sumbangan={sumbangan.slice(0, 3)}
        title="Program Donasi Kami"
        href={"/sumbangan"}
      />
    </div>
  );
}
