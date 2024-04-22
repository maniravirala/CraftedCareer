import React from "react";
import LoginTemplate from "./LoginTemplate";
import LeftDesignTemplate from "../LeftDesignTemplate";

const Login = () => {
  return (
    <div className="h-[calc(100vh-4rem)] overflow-auto ">
      {/* bg-background dark:bg-background-dark */}
      <main className="relative h-full flex self-center place-content-center place-items-center xl:justify-end">
        <LeftDesignTemplate />
        <div className="flex w-96 justify-center sm:mx-16">
          <LoginTemplate />
        </div>
      </main>
    </div>
  );
};

export default Login;
