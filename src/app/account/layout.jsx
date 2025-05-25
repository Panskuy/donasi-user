import { getCurrentUser } from "@/lib/auth/getCurrentUser";
import { redirect } from "next/navigation";

const layout = async ({ children }) => {
  const user = await getCurrentUser();

  if (!user) return redirect("/");
  return <div>{children}</div>;
};

export default layout;
