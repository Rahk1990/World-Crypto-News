import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import useAuth from "../../hooks/useAuth";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [isToggled, setIsToggled] = useState(false)


  // useEffect(() => {
  //   const fetchCars = async () => {
  //     try {
  //       let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //       setCars(response.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };
  //   fetchCars();
  // }, [token]);
  return (
    <div className="container">
      <h1>News and Asset Page {user.username}!</h1>
      <Link to='/searchpage' onClick={()=> setIsToggled(!isToggled)}>Search Articles</Link>
      {/* {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))} */}
    </div>
  );
};

export default HomePage;
