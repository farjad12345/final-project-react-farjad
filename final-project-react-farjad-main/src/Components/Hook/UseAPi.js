import { useState, useEffect } from "react";
const baseURL = "https://kiyan.ir/api/v1" 

export const apiLoginUser = (username,password) => ({
    method: "POST",
    url: `/login`,
    headers: {
        'accept': '*/*',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(
        {
            "username": username,
            "password": password, 
        },
        ),
    })
export const apiGetUsers = (pageId = 1) => ({
    method: "GET",
    url: `/users?page=${pageId}`,
    body: null,
});

export const apiGetUser = (userId) => ({
    method: "GET",
    url: `/users/${userId}`,
});

export default function useApi(request) {
    const [state, setState] = useState(false);
    const fetchData = async () => {
        const res = await fetch(baseURL + request.url, {
            method: request.method,
            headers:request.headers,
            body: request.body,
        });
        const dataa = await ( res.json());
        console.log(dataa);
        setState(dataa)
    };

    useEffect(() => {
        fetchData();
    }, []);

    return [state, setState];
}

export const useUsers = () => useApi(apiGetUsers())
export const useUser = (id) => useApi(apiGetUser(id))
export const useLoginUser = (username, password) => useApi(apiLoginUser(username, password))
