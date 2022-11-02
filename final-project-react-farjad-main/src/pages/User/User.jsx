import "./User.css";
import React, { useEffect, useState } from "react";
import { Card, Avatar, Button, Space, Modal ,Form } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import EditUserData from "./EditUserData/EditUserData";
function User() {
  let navigate = useNavigate();

      const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [showEditForm, setshowEditForm] = useState(false);
    const [modalTextDelete, setmodalTextDelete] = useState(
      "Are you sure you want to DELETE this user?"
    );
  const showModal = () => {
    setOpen(true);
  }
  const DeleteAPI = () => {
    fetch(baseURL, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`, // notice the Bearer before your token

        "Content-Type": " application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => console.log(res))
    .then(navigate("/"))
  }
      const handleDeleteOk = () => {
        setmodalTextDelete(
          "The user will be deleted and the modal will be closed after two seconds and return to users page ... "
        );
        setConfirmLoading(true);
        setTimeout(() => {
          DeleteAPI()
          setOpen(false);
          setConfirmLoading(false);
        }, 2000);
      };

 
      const handleCancel = () => {
        setOpen(false);
      };

  const token = JSON.parse(localStorage.user).token;

  let { userId } = useParams();
  const [user, setUsers] = useState([]);
  const baseURL =
    `https://kiyan.ir/api/v1/users/${userId}`;
  useEffect(() => {
    fetch(baseURL , {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // notice the Bearer before your token

        "Content-Type": " application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => setUsers(res));
  }, []);
  return (
    <div className="user">
      <div className="card-wrapper-user">
        {/* <Form > */}

        <Card
          key={user.id}
          title={user.firstname + " " + user.lastname}
          style={{ width: 500 }}
        >
          <p>{user.id}</p>
          <p>
            firstname: {user.firstname}{" "}
            {<Avatar src="https://joeschmoe.io/api/v1/random" />}
          </p>
          <p>lastname: {user.lastname}</p>
          <Space>
            <Button type="primary" ghost onClick={() => setshowEditForm(true)}>
              Edit
            </Button>

            <Button type="danger" onClick={showModal}>
              Delete
            </Button>
            <Modal
              title="DELETE"
              open={open}
              onOk={handleDeleteOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
              <p>{modalTextDelete}</p>
            </Modal>
          </Space>
        </Card>
        {showEditForm ? (
          <div className=" show signUp">
            <EditUserData setshowEditForm={setshowEditForm} />{" "}
          </div>
        ) : (
          <div className=" hide signUp">
            <EditUserData />{" "}
          </div>
        )}
      </div>
    </div>
  );
}
export default User;
