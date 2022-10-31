import "./UserList.css";
import React, { useEffect, useState } from "react";
import { Card, Avatar } from "antd";

function User() {

  const [users, setUsers] = useState([]);
  const baseURL = "https://kiyan.ir/api/v1/users";
  useEffect(() => {
    const token = JSON.parse(localStorage.user).token;
    console.log(token);
    fetch(baseURL, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`, // notice the Bearer before your token
      },
    })
      .then((response) => response.json())
      .then(
        (res) => setUsers(res)

      );
      console.log(users);
    }, []);
    
  return (
    <div className="userList">
      {users.map((user) => (
        <div className="card-wrapper-userlist">
          <Card
            key={user.id}
            title={user.firstname + " " + user.lastname}
            extra={<a href={`user/${user.id}`}>More</a>}
            style={{ width: 300 }}
          >
            <p>{user.id}</p>
            <p>{user.password}</p>
            <p>
              firstname: {user.firstname}{" "}
              {<Avatar src="https://joeschmoe.io/api/v1/random" />}
            </p>
            <p>lastname: {user.lastname}</p>
          </Card>
        </div>
      ))}
    </div>
  );
}
export default User;
