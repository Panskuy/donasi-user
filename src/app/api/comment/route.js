import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const { userId, sumbanganId, comment } = await req.json();

    if (!userId || !sumbanganId || !comment) {
      return new Response(JSON.stringify({ error: "Data tidak lengkap" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    await prisma.comment.create({
      data: {
        content: comment,
        userId: userId,
        sumbanganId: sumbanganId,
      },
    });

    // Return kosong tapi harus ada response
    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("Gagal membuat komentar:", error);

    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
