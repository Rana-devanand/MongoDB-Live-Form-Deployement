import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
function Form() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  function validate(values) {
    let errors = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  }

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(value);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/form`,
          value
        );
        console.log(response);
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <>
      <div className="bg-[#4C585B] w-full h-screen flex justify-center items-center">
        <div className="xl:w-1/3 lg:w-1/2 md:w-1/2 sm:w-full h-[80%]">
          <form
            className="p-5 w-full h-full border-2 border-[#4c585b81] bg-[#4c585b81] rounded-lg shadow-2xl
           text-white border-t-2 border-t-white"
            onSubmit={HandleSubmit}
          >
            <h1 className="text-2xl text-center mb-5 font-semibold ">
              Form Validation
            </h1>
            <div className="input-fields flex flex-col w-full">
              <label htmlFor="" className="italic font-medium text-sm ml-1">
                Name
              </label>
              {errors.name && <p className="text-red-500">{errors.name}</p>}
              <input
                className="p-3 text-black bg-zinc-200 mb-5 rounded-lg hover:bg-gray-300 outline-none"
                type="text"
                id="name"
                name="name"
                placeholder="Enter name..."
                value={value.name}
                onChange={(e) => setValue({ ...value, name: e.target.value })}
              />
              <label htmlFor="" className="italic font-medium text-sm ml-1">
                Email
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </label>
              <input
                className="p-3 text-black bg-zinc-200 mb-5 rounded-lg hover:bg-gray-300 outline-none "
                type="email"
                id="email"
                name="email"
                placeholder="Enter email..."
                value={value.email}
                onChange={(e) => setValue({ ...value, email: e.target.value })}
              />
              <label htmlFor="" className="italic font-medium text-sm ml-1">
                Password
              </label>
              <input
                className="p-3 text-black bg-zinc-200 mb-5 rounded-lg hover:bg-gray-300 outline-none "
                type="password"
                id="password"
                name="password"
                placeholder="Enter password..."
                value={value.password}
                onChange={(e) =>
                  setValue({ ...value, password: e.target.value })
                }
              />
            </div>
            <div className="btn">
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
              <button
                className="w-full mt-10 bg-blue-500 p-3 rounded-lg text-white font-semibold text-lg hover:bg-blue-900"
                type="submit"
              >
                Submit
              </button>

              <button className="px-4 py-2 m-3 bg-orange-300 rounded-lg text-black">
                <Link to="/allusers">All Users</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
