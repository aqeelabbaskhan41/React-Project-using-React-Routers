import React from "react";

function Contact() {
  return (
    <>
      <div className="grid grid-cols-2 mx-32 mt-16 ">
        <div className="p-10 bg-slate-100 m-5  flex items-center flex-col
        rounded-md">
          <h1 className="font-bold text-4xl">Get in touch:</h1>
          <p>Fill in the form to start conversation</p>
          <p>Acme, inc, street, state, postal code</p>
          <p>+92333000011</p>
          <p>info@acme.com</p>
        </div>
        <div className="m-5">
          <form onClick={(e)=>{
            e.preventDefault()
          }}>
            <input className="p-5 border-2 w-full rounded-md border-slate-400 m-2" placeholder="Full Name" type="text" name="" id="" />
            <input className="p-5 border-2 w-full rounded-md border-slate-400 m-2" placeholder="Email" type="email" name="" id="" />
            <input className="p-5 border-2 w-full rounded-md border-slate-400 m-2" placeholder="Telephone Number" type="text" name="" id="" />
            <button className="px-2 py-2 m-2 rounded-md text-white bg-orange-700">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
