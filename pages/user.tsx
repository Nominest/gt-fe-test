import { data } from "@/util/user";
import { AiOutlineUser } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function user(): JSX.Element {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between p-2">
        <h2>Users</h2>
        <h2>Welcome, User</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 item-center justify-between cursor-pointer">
            <span className="hidden md:grid">Овог</span>
            <span>Нэр</span>
            <span className="hidden sm:grid">И-мэйл</span>
            <span className="sm:text-left text-right">Утасны дугаар</span>
          </div>
          <ul>
            {data.map((user, i) => (
              <li
                key={i}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-lg ">
                    <AiOutlineUser />
                  </div>
                  <p className="pl-4">{user.name.first}</p>
                </div>
                <p className="text-gray-600 sm:text-left text-right hidden md:grid">
                  {user.name.last}
                </p>
                <p className="text-gray-600 sm:text-left text-right hidden sm:grid">
                  {user.email}
                </p>
                <p>{user.phone}</p>
                <BsThreeDotsVertical className="sm:flex text-right hidden justify-between itmes-center " />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
