import "./UserList.css";
import React, { useEffect, useState } from "react";
import { Card, Avatar } from "antd";
import { Link } from "react-router-dom";
import Spiner from "../../Components/Spiner/Spiner";

function User() {

  const [users, setUsers] = useState(false);
  const baseURL = "https://kiyan.ir/api/v1/users";
  useEffect(() => {
    const token = JSON.parse(localStorage.user).token;
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
    }, []);
    
  return (
    <div className="userList">
      {users ? (
        users.map((user) => (
          <div className="card-wrapper-userlist" key={user.id}>
            <Card
              key={user.id}
              title={user.firstname + " " + user.lastname}
              extra={<Link to={`user/${user.id}`}>More</Link>}
              style={{ width: 300 }}
            >
              <p>{user.id}</p>
              <p>{user.password}</p>
              <p>
                firstname: {user.firstname} 
                <Avatar src="https://randomuser.me/api/portraits/men/25.jpg"  id="avatar"/>
              </p>
              <p>lastname: {user.lastname}</p>
            </Card>
          </div>
        ))
      ) : (
        <div className=" Spiner">
          <Spiner />
        </div>
      )}
    </div>
  );
}
export default User;
