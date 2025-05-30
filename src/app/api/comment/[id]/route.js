import prisma from "@/lib/prisma";

export async function DELETE(req, { params }) {
  try {
    const { id } = await params; // Tidak perlu pakai await

    if (!id) {
      return new Response("ID komentar tidak ditemukan", { status: 400 });
    }

    await prisma.comment.delete({
      where: {
        id: String(id),
      },
    });

    return new Response("Komentar berhasil dihapus", { status: 200 });
  } catch (error) {
    console.error("Gagal menghapus komentar:", error);
    return new Response("Terjadi kesalahan server", { status: 500 });
  }
}
