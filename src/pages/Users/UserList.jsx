import { useEffect, useState } from "react";
import { loadUsers } from "../../api";

export default function UserList(params) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers().then((data) => setUsers(data));
  });

  console.log(users);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-6 gap-4">
      {users.map((user) => (
        <div className="flex flex-col gap-2 items-center justify-center p-4 border-2 shadow-lg rounded-lg">
          <img
            src={
              user.profile_picture
                ? user.profile_picture
                : "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg"
            }
            alt=""
            className="rounded-full h-20 border-2"
          />
          <div className="text-center">
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
