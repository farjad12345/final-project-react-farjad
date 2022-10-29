import "./Home.css";
import React, { useEffect,  } from "react";

function Home() {
    const baseURL = "https://kiyan.ir/api/v1/users";
    const token = JSON.parse(localStorage.user).token;

  
  useEffect(() => {
          
        fetch(baseURL, {
          method: "GET",

          headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`, // notice the Bearer before your token
          },
        })
          .then((res) => res.json())
          .then((result) => console.log(result));
      }, []);

  return <div className="Home"> </div>;
}
export default Home;
