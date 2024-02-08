import React from "react";
import { MainLogo } from "./Icons/MainLogo";
import Link from "next/link";

export const Login = () => {
  return (
    <div className="lg:w-screen h-screen flex ">
      {/* INTRACT USER AREA */}

      <div className="lg:w-3/6 h-full flex flex-row justify-center items-center">
        <div className=" w-full flex px-10 items-center lg:flex flex-col lg:items-center gap-10">
          <div className=" flex lg:flex gap-2 items-center">
            <MainLogo width="25" hieght="24" />
            <h1 className=" font-bold text-xl dark:text-slate-50">Geld</h1>
          </div>

          <div className=" flex lg:flex flex-col items-center">
            <h1 className="font-bold text-xl dark:text-slate-50">
              Welcome Back
            </h1>
            <p className="text-slate-700 text-base dark:text-slate-200">
              Welcome back, Please enter your details
            </p>
          </div>

          {/* LOGIN AREA */}

          <div className=" flex lg:flex flex-col gap-2">
            <input
              type="email"
              placeholder="email"
              className=" input h-10 lg:input lg:input-bordered  lg:h-12 dark:text-slate-300  "
            />
            <input
              type="password"
              placeholder="password"
              className=" input input-bordered   h-12 dark:text-slate-300"
            />
            <Link href={"./main"}>
              <button className="btn text-white text-xl bg-blue-600 w-96 h-12 rounded-2xl	">
                Log in
              </button>
            </Link>
          </div>

          {/* CREAT USER AREA */}

          <div className="flex gap-2">
            <p className="text-slate-900 text-base font-normal dark:text-slate-300">
              Don’t have account?
            </p>
            <Link href={"./signup"}>
              <p className="text-blue-600 text-base font-normal cursor-pointer hover:text-blue-400">
                Sign up
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* NULL SIDE AREA */}

      <div className=" hidden lg:w-3/6 lg:block bg-blue-600 h-full"></div>
    </div>
  );
};
