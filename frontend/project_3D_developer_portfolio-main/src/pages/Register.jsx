import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { EarthCanvas, StarsCanvas } from "../components/canvas";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";

function Register() {
  // const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [password2, setPassword2] = useState("");

  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    const password2 = e.target.password2.value;

    email.length > 0 && registerUser(email, username, password, password2);
    console.log(email);
    console.log(username);
    console.log(password);
    console.log(password2);
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="h-screen flex l:flex-col l:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="l:w-1/3 max-w-l">
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
          >
            <EarthCanvas />
          </motion.div>
        </div>
        <div className="md:w-1/3 max-w-sm">
          <div className="text-center md:text-left">
            <label className="text-white font-black md:text-[30px] sm:text-[10px] xs:text-[10px] text-[10px]">
              Register to FarmAssist
            </label>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
              --
            </p>
          </div>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            name="email"
            placeholder="Email Address"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            placeholder="User Name"
            name="username"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
            name="password"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Confirm Password"
            name="password2"
          />
          {/* <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a
              className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
              href="#"
            >
              Forgot Password?
            </a>
          </div> */}
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Submit
            </button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don't have an account?{" "}
            <a
              className="text-red-600 hover:underline hover:underline-offset-4"
              href="#"
            >
              Register
            </a>
          </div>
        </div>
      </section>
    </form>
  );
}

export default Register;
