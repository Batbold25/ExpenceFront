import React, { useState } from "react";
import { MainLogo } from "./Icons/MainLogo";
import Link from "next/link";

const BASE_URL = "http://localhost:8080/";

export default function Signup() {
  //  fron end ees input deer bichsen data buriig USESTATE ashiglaj
  // hadgalah daraachiin uil ajilgaan ashuglah

  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRePass] = useState("");

  //-----------------

  const [showPassword, setShowPassword] = useState(false);
  const [reShowpass, setRepassShow] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const rePassShow = () => {
    setRepassShow(!reShowpass);
  };

  //----------------

  //INPUT BUREES VALUE GAA AVAH

  const userNameInput = (e) => {
    console.log(e.target.value, "name");
    setUsername(e.target.value);
  };
  // console.log(userName, " user name");

  const emailInput = (e) => {
    console.log(e.target.value, "email");
    setEmail(e.target.value);
  };

  const passwordInput = (e) => {
    console.log(e.target.value, "pass");
    setPassword(e.target.value);
  };

  const rePassInput = (e) => {
    console.log(e.target.value, "re-Pass");
    setRePass(e.target.value);
  };

  //DB LUU CREAT USER IIN NEW DATA YVUULAH, BURTGEL HIILGEH UIL YVTS
  const handleSignup = async () => {
    const userData = {
      name: userName,
      email: email,
      password: password,
    };

    try {
      if (rePass !== password) {
        return alert(" Not match witch Password");
      } else {
        if (userName && email && password) {
          const res = await fetch(BASE_URL + "signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
          });

          console.log(res, "res");
        }
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="lg:w-3/6 h-full flex flex-row justify-center items-center">
        <div className=" flex lg:flex flex-col items-center gap-10">
          <div className="flex gap-2 items-center">
            <MainLogo width="25" hieght="24" />
            <h1 className=" font-bold text-xl dark:text-slate-50">Geld</h1>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="font-bold text-xl dark:text-slate-50">
              Create Geld account
            </h1>
            <p className="text-slate-700 text-base dark:text-slate-200">
              Sign up below to create your Wallet account
            </p>
          </div>

          {/* SIGN-UP AREA */}

          <div className="flex lg:flex flex-col gap-2">
            <input
              type="text"
              placeholder="Name"
              className=" input input-bordered  h-12 dark:text-slate-300  "
              onChange={userNameInput}
            />
            <input
              type="email"
              placeholder="email"
              className=" input input-bordered   h-12 dark:text-slate-300"
              onChange={emailInput}
            />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered h-12 w-11/12 dark:text-slate-300"
                  onChange={passwordInput}
                />
                <img
                  src="./view.png"
                  alt="view"
                  className="w-7 h-6"
                  onClick={handleTogglePassword}
                />
              </div>

              <div className="flex items-center gap-4">
                <input
                  type={reShowpass ? "text" : "password"}
                  placeholder="re-password"
                  className="input input-bordered h-12 w-11/12 dark:text-slate-300"
                  onChange={rePassInput}
                />
                <img
                  src="./view.png"
                  alt="view"
                  className="w-7 h-6"
                  onClick={rePassShow}
                />
              </div>
            </div>

            <button
              className="btn text-white bg-blue-600 text-xl w-96 h-12 rounded-2xl	"
              onClick={handleSignup}
            >
              Sign up
            </button>
          </div>

          {/* BACK LOGIN AREA */}

          <div className="flex gap-2">
            <p className="text-slate-900 text-base font-normal dark:text-slate-300">
              Already have account?
            </p>
            <Link href={"./"}>
              <p className="text-blue-600 text-base font-normal cursor-pointer hover:text-blue-400">
                Log in
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className=" hidden lg:w-3/6 bg-blue-600 lg:block h-full"></div>
    </div>
  );
}
