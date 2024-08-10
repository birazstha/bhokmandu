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
        <div className="border-2 flex flex-col gap-2 items-center justify-center p-4 rounded-lg">
          <img src={user.profile_picture} alt="" className="rounded-full" />
          <div className="text-center">
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
