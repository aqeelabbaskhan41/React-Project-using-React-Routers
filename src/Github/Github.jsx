import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="mx-32 bg-slate-100 shadow-lg rounded-lg mt-10 p-10 flex flex-col items-center">
      {data ? (
        <>
          <h1 className="text-3xl font-bold mb-5">Github Info</h1>
          <div className="grid grid-cols-2 gap-10 items-center">
            <img
              src={data.avatar_url}
              alt="Github Avatar"
              className="w-40 h-40 rounded-full border border-gray-600"
            />
            <p className="text-lg font-medium">Username: {data.login}</p>
          </div>
        </>
      ) : (
        <p className="text-gray-600">Loading...</p>
      )}
    </div>
  );
}

export default Github;

export const GitHubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/aqeelabbaskhan41");
  return response.json();
};
