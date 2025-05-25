"use client";
import { getAllUsers } from "@/api/users";
import Spinner from "@/components/Spinner";
import UsersTable from "@/components/users/Table";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function UserManagementPage() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);

    getAllUsers()
      .then((response) => setUsers(response.data))
      .catch((error) => toast.error(error.response.data, { autoClose: 750 }))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="p-5">
      <div className="grid grid-cols-[1fr_auto_auto] gap-3 items-center justify-between pb-5 px-1">
        <h1 className="font-semibold text-2xl dark:text-white">
          User Management
        </h1>
      </div>
      {loading ? (
        <div className="flex justify-center py-10">
          <Spinner className="h-10 w-10" />
        </div>
      ) : (
        <UsersTable users={users} />
      )}
    </section>
  );
}

export default UserManagementPage;
