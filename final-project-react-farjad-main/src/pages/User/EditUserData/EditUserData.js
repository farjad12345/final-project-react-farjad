import React, { useState, useRef,  } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import "./EditUserData.css"

function EditUserData({ setshowEditForm }) {
    let navigate = useNavigate();

    const token = (JSON.parse(localStorage.user).token);
    const [error, setError] = useState(false)

    const formRef = useRef();
    let { userId } = useParams();

    function handelSubmit(e) {
        e.preventDefault();
        const id = e.target.id.value;
        const username = e.target.username.value;
        const firstname = e.target.firstname.value;
        const lastname = e.target.lastname.value;
        console.log(id, username, firstname, lastname);


        const baseURL =
            `https://kiyan.ir/api/v1/users/${userId}`
        fetch(baseURL, {
            method:'PUT',
            headers: {
                'accept':'application/json',
                "Authorization":`Bearer ${token}`, 
            },
            body: JSON.stringify(
                {
                    "id":id,
                    "username":username,
                    "firstname":firstname,
                    "lastname":lastname,
                },
            ),
        },
        )
            .then(response => response.json())
            .then(res => {
                if (res.token) {
                    setError(false);
                } else {
                    setError((res.error));
                    console.log(error);
                }

            })
            .then(navigate("/"))

    }
    const onReset = () => {
        formRef.current.reset();

    };

    return (
        <div className="signUp">
            <div className='container'>
                <form className="signInForm" ref={formRef} onSubmit={handelSubmit}>
                    <h1 className="title">Edit user</h1>
                    <div className='input-part'>
                        <label className="label" htmlFor="id">
                            id:
                        </label>
                        <input
                            type="text"
                            id="id"
                            name="id"
                            className="input"
                        />
                    </div>
                    <div className='input-part'>
                        <label className="label" htmlFor="username">
                            username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="input"

                        />
                    </div>
                    <div className='input-part'>
                        <label className="label" htmlFor="firstname">
                            firstname:
                        </label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            className="input"

                        />
                    </div>
                    <div className='input-part'>
                        <label className="label" htmlFor="lastname">
                            lastname:
                        </label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            className="input"

                        />

                    </div>
                    <div className='button-wrapper-parent'>
                        <div className='button-wrapper'>
                            <button type="submit" >
                                edit
                            </button>
                            <button type="button" onClick={() => setshowEditForm(setshowEditForm(false))} >
                                cancel
                            </button>
                            <button type="button" onClick={onReset}>
                                reset
                             </button>
                        </div>
                    </div>
                </form>


            </div>
        </div>
    );
}
export default EditUserData;
