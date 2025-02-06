import React from "react";

function Login() {
  return (
    <form
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <div className=" flex flex-col justify-center items-center mx-32 mt-5 p-10 border-2 border-slate-300 rounded-md shadow-md">
        <h1 className="font-bold text-4xl text-orange-700 font-serif">Log in</h1>
        <input
          type="email"
          name=""
          id=""
          className="p-3 border-2 w-96 m-3  rounded-md border-slate-400 "
          placeholder="Enter your email"
        />
        <input
          type="password"
          name=""
          id=""
          className="p-3 border-2 w-96 m-3  rounded-md border-slate-400"
          placeholder="Enter your password"
        />
       
        <button
          type="submit"
          className="px-2 py-3 m-3 rounded-md text-white bg-orange-700 w-96 font-bold"
        >
          Log in
        </button>
      </div>
    </form>
  );
}

export default Login;
