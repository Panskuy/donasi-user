// app/login/page.js (untuk App Router)

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import { redirect } from "next/navigation";
import LoginForm from "@/components/auth/LoginForm";

export default async function LoginPage() {
  // Cek jika user sudah login di server-side
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/"); // redirect jika sudah login
  }

  return <LoginForm />;
}
