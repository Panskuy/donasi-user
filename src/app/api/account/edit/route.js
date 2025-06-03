import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, name, phone, address } = body;

    if (!email) {
      return NextResponse.json(
        { message: "Email wajib diisi." },
        { status: 400 }
      );
    } else if (!name) {
      return NextResponse.json(
        { message: "name wajib diisi." },
        { status: 400 }
      );
    } else if (!phone) {
      return NextResponse.json(
        { message: "phone wajib diisi." },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { email },
      data: { name, phone: phone, address: address },
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
