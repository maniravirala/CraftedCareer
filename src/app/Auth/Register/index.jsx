import React from "react";
import RegisterTemplate from "./RegisterTemplate";
import LeftDesignTemplate from "../LeftDesignTemplate";

const Register = () => {
  return (
    <div className="h-[calc(100vh-4rem)] overflow-auto ">
      <main className="relative h-full flex self-center place-content-center place-items-center xl:justify-end">
        <LeftDesignTemplate />
        <div className="flex w-96 justify-center sm:mx-16">
          <RegisterTemplate />
        </div>
      </main>
    </div>
  );
};

export default Register;
