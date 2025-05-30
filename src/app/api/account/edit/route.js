import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, name } = body;

    if (!email || !name) {
      return NextResponse.json(
        { message: "Email dan nama wajib diisi." },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { email },
      data: { name },
    });

    return NextResponse.json({
      message: "Profil berhasil diperbarui",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Gagal update profil:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan saat update" },
      { status: 500 }
    );
  }
}
