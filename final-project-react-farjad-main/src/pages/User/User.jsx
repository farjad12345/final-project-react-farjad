import "./User.css";
import React, { useEffect, useState } from "react";
import { Card, Avatar, Button, Space, Modal } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import EditUserData from "./EditUserData/EditUserData";
import Spiner from "../../Components/Spiner/Spiner";
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
  };
  const DeleteAPI = () => {
    fetch(baseURL, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": " application/json",
      }
    })
      .then((response) => response.json())
      .then(navigate("/"));
  };
  const handleDeleteOk = () => {
    setmodalTextDelete(
      "The user will be deleted and the modal will be closed after two seconds and return to users page ... "
    );
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      DeleteAPI();
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const token = JSON.parse(localStorage.user).token;

  let { userId } = useParams();
  const [user, setUsers] = useState(false);
  const baseURL = `https://kiyan.ir/api/v1/users/${userId}`;
  useEffect(() => {
    fetch(baseURL, {
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
      {user ? (
        <div className="card-wrapper-user">
          <Card
            key={user.id}
            title={user.firstname + " " + user.lastname}
            style={{ width: 500 }}
          >
            <p>{user.id}</p>
            <p>
              firstname: {user.firstname}
              <Avatar
                src="https://randomuser.me/api/portraits/men/25.jpg"
                id="avatar"
              />
            </p>
            <p>lastname: {user.lastname}</p>
            <Space>
              <Button
                type="primary"
                ghost
                onClick={() => setshowEditForm(true)}
              >
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
              <EditUserData setshowEditForm={setshowEditForm} />
            </div>
          ) : (
            <div className=" hide signUp">
              <EditUserData />
            </div>
          )}
        </div>
      ) : (
        <div className=" Spiner">
          <Spiner />
        </div>
      )}
    </div>
  );
}
export default User;
