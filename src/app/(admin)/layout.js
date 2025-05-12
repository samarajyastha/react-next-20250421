"use client";

import AdminSidebar from "@/components/admin/Sidebar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { allowedAdminRoles } from "@/helpers/auth";

function AdminLayout({ children }) {
  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/");

    //allow only MERCHANT and ADMIN roles
    const isAllowed = allowedAdminRoles(user?.roles);

    if (!isAllowed) router.push("/");
  }, [router, user]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-5">
      <AdminSidebar />
      <div>{children}</div>
    </div>
  );
}

export default AdminLayout;
