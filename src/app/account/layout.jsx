import { NavbarAccount } from "@/components/account/NavbarAccount";
import { getCurrentUser } from "@/lib/auth/getCurrentUser";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Account",
  description: "Kasiba.com",
};

const layout = async ({ children }) => {
  const user = await getCurrentUser();

  if (!user) return redirect("/");
  return (
    <div className="w-full px-2 ">
      <NavbarAccount />
      <div className="">
        <div className="mt-20">{children}</div>
      </div>
    </div>
  );
};

export default layout;
