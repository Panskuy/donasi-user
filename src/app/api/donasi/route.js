import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request) {
  try {
    const { sumbanganId, userId, item } = await request.json();

    if (!sumbanganId || !item || !Array.isArray(item) || item.length === 0) {
      return NextResponse.json(
        { error: "Data tidak valid, mohon isi dengan benar." },
        { status: 400 }
      );
    }

    // Simpan data donasi ke DB
    const donasi = await prisma.donasi.create({
      data: {
        sumbanganId,
        userId: userId, // userId bisa optional
        item,
      },
    });

    return NextResponse.json({ message: "Donasi berhasil disimpan", donasi });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
