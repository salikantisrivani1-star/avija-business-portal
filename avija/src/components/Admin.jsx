import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = () => {

   const [messages, setMessages] = useState([]);
   const navigate = useNavigate();

   // Check if admin is logged in
   useEffect(() => {

      const isLoggedIn = localStorage.getItem("isLoggedIn");

      if (!isLoggedIn) {
         navigate("/login");
         return;
      }

      fetchMessages();

   }, [navigate]);

   const fetchMessages = async () => {

      try {

         const response = await axios.get(
            "https://avija-backend.onrender.com/contact/all"
         );

         setMessages(response.data);

      } catch (error) {

         console.log(error);

      }

   };

   const handleLogout = () => {

   localStorage.removeItem("isLoggedIn");

   alert("Logged out Successfully");

   navigate("/login");

};

   return (
     <div style={{ padding: "20px" }}>

   <div
      style={{
         display: "flex",
         justifyContent: "space-between",
         alignItems: "center",
         marginBottom: "20px"
      }}
   >

      <h1>Admin Dashboard</h1>

      <div>

         <Link to="/add-event">

            <button
               style={{
                  marginRight: "10px",
                  padding: "10px 20px",
                  background: "#212EA0",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer"
               }}
            >
               + Add New Event
            </button>

         </Link>

         <button
            onClick={handleLogout}
            style={{
               padding: "10px 20px",
               background: "red",
               color: "white",
               border: "none",
               borderRadius: "8px",
               cursor: "pointer"
            }}
         >
            Logout
         </button>

      </div>

   </div>


         <table border="1" cellPadding="10">

            <thead>

               <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Message</th>
               </tr>

            </thead>
            

            <tbody>

               {messages.map((item, index) => (

                  <tr key={index}>

                     <td>{item.name}</td>

                     <td>{item.phone}</td>

                     <td>{item.message}</td>

                  </tr>

               ))}

            </tbody>

         </table>

      </div>
      

   );

};

export default Admin;