import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Allusers() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const getAllusers = async (req, res) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/allusers`
      );
      console.log(response);
      setUsers(response.data.data);
    } catch (error) {
      console.error("Something went wrong");
    }
  };
  useEffect(() => {
    getAllusers();
  }, []);
  console.log("fetched data : ", users);
  return (
    <>
      <div className="bg-[#4C585B] w-full h-screen flex justify-center items-center">
        <div className="xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-full h-[80%]">
          <div
            className="p-5 w-full h-full border-2 border-[#4c585b81] bg-[#4c585b81] rounded-lg shadow-2xl
           text-white border-t-2 border-t-white"
          >
            <h1 className="text-2xl text-center mb-5 font-semibold ">
              All Users
            </h1>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">S.no</th>
                  <th className="text-left">Name</th>
                  <th className="text-left">Email</th>
                  <th className="text-left">Password</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 &&
                  users.map((user, index) => (
                    <tr>
                      <>
                        <td key={index}>{index + 1}</td>
                        <td key={index}>{user.name}</td>
                        <td key={index}>{user.email}</td>
                        <td key={index}>{user.password}</td>
                      </>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <button
            className="px-4 py-2 bg-red-500 rounded-lg text-white"
            onClick={() => navigate(-1)}
          >
            Go back
          </button>
        </div>
      </div>
    </>
  );
}

export default Allusers;
