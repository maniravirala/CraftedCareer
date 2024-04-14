import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const ResumeBuilder = () => {
  return (
    <div className="h-[calc(100vh-4rem)] overflow-auto">
      <div className="bg-background dark:bg-background-dark">
        <section className="py-16 sm:py-10">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <p className="text-base font-semibold tracking-wider text-primary dark:text-secondary uppercase">
                  Create a Professional Resume
                </p>
                <h1 className="mt-4 text-4xl font-bold text-background-dark dark:text-background lg:mt-8 sm:text-6xl xl:text-8xl">
                  Build Your Resume with Ease
                </h1>
                <p className="mt-4 text-base text-background-dark dark:text-tertiary lg:mt-8 sm:text-xl">
                  Design a stunning resume that showcases your skills and
                  experiences.
                </p>

                <Link
                  to={"/resume"}
                  className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-primary rounded-full hover:bg-secondary"
                  role="button"
                >
                  Start Building
                  <BiRightArrowAlt className="ml-2" size={"1.5rem"} />
                </Link>

                <p className="mt-5 text-background-dark dark:text-tertiary ">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="text-background-dark dark:text-tertiary font-semibold transition-all duration-200 hover:underline"
                  >
                    Log in
                  </Link>
                </p>
              </div>

              <div>
                <img
                  className="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumeBuilder;
