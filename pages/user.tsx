import { iUser } from "@/util/user";
import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function User(): JSX.Element {
  const [users, setUsers] = useState<iUser[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:4200/user/all")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-2">
        <h2>Users</h2>
        <h2>Welcome, User</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div>
            <button className="bg-gray-100 p-4 hover:bg-gray-200">
              Add User
            </button>
          </div>

          <div className="my-3 p-2 grid md:grid-cols-5 sm:grid-cols-2 item-center justify-between cursor-pointer ">
            <span className="hidden md:grid">Овог</span>
            <span>Нэр</span>
            <span className="hidden sm:grid">И-мэйл</span>
            <span className="sm:text-right">Утасны дугаар</span>
          </div>
          <ul>
            {users &&
              users.map((user: iUser, i: number) => (
                <li
                  key={i}
                  className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-5 sm:grid-cols-2 grid-cols-2 items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg ">
                      <AiOutlineUser />
                    </div>
                    <p className="pl-4">{user.firstName}</p>
                  </div>
                  <p className="text-gray-600 sm:text-left text-right hidden md:grid">
                    {user.lastName}
                  </p>
                  <p className="text-gray-600 sm:text-left text-right hidden sm:grid">
                    {user.email}
                  </p>
                  <p className="sm:text-right">{user.phone}</p>
                  <p className="text-gray-600 sm:text-right hidden sm:grid  justify-end">
                    <BsThreeDotsVertical />
                  </p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
