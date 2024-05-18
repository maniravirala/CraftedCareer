import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import TemplateCarousel from "../../components/templateCarousel";
import { blue, violet } from "../../assets";
import Footer from "../Pages/Footer";

const PublicDashboard = () => {
  return (
    <div className="h-[calc(100vh-4rem)] overflow-auto">
      <div className="bg-transparent h-full">
        {/* bg-background dark:bg-background-dark */}

        {/* Hero Section */}
        <section className="py-10 sm:py-20">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 h-full">
            <div className="grid items-center gap-12 lg:grid-cols-5">
              <div className="space-y-6 lg:col-span-3">
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

              <div className="lg:col-span-2">
                <img
                  className="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative ">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-transparent to-transparent dark:from-gray-800 dark:via-transparent dark:to-transparent"></div>

          <div className="relative z-10 w-[75%] flex lg:w-full">
            <img
              src={blue}
              className="absolute animate-breath lg:right-20 top-40 lg:top-0"
              alt={""}
            />
            <img
              src={violet}
              className="absolute lg:right-40 right-50 top-60 lg:top-0 animate-breath"
              alt={""}
            />
          </div>
          <div className="px-4 mx-auto sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
                Why Choose Our Resume Builder?
              </h2>
              <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
                Our resume builder offers a range of features to help you create
                a standout resume that gets noticed by Interviewers.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center justify-center p-6 space-y-4 bg-white rounded-lg shadow-md dark:bg-gray-700">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Easy to Use
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our intuitive interface makes it simple to create and
                  customize your resume.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 space-y-4 bg-white rounded-lg shadow-md dark:bg-gray-700">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Professional Templates
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Choose from a variety of professionally designed templates to
                  make your resume stand out.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-6 space-y-4 bg-white rounded-lg shadow-md dark:bg-gray-700">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Customization Options
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Customize fonts, colors, and layouts to create a unique resume
                  that reflects your style.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Templates Section */}
        <section className="py-10">
          <div className="px-4 mx-auto mb-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
                Choose Your Template
              </h2>
              <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
                Select a professional template that suits your style and
                profession.
              </p>
            </div>
          </div>
          <TemplateCarousel />
        </section>
        {/*        <section className="py-20">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
                Choose Your Template
              </h2>
              <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
                Select a professional template that suits your style and
                profession.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-20 mx-10 mt-12 overflow-hidden">
              <div className="col-span-1 justify-center flex">
                {before.map((template) => (
                  <TemplateCard key={template.id} template={template} />
                ))}
              </div>
              <div
                //key={center.id}
                //className="flex-shrink-0 col-span-4 flex items-center justify-center p-6 space-y-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg transform scale-200 transition-transform duration-1000"
                className="flex col-span-1 justify-center"
              >
                <TemplateCard key={center.id} template={center} />
              </div>
              <div className="flex col-span-1 justify-center">
                {after.map((template) => (
                  <TemplateCard key={template.id} template={template} />
                ))}
              </div>
            </div>
          </div>
        </section>
*/}

        {/* Get Started Section */}
        <section className="py-20">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl">
                Get Started Today
              </h2>
              <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
                Start building your professional resume today and land your
                dream job.
              </p>
              <Link
                to={"/resume"}
                className="inline-block mt-8 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-primary rounded-full hover:bg-secondary"
                role="button"
              >
                Start Building
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default PublicDashboard;
