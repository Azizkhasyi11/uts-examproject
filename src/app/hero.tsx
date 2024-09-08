"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="bg-[url(/img/hero.png)] bg-cover bg-center h-screen bg-no-repeat">
      <div className="absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-secondary to-transparent lg:block hidden"></div>
      <div className="mx-auto max-w-screen-xl h-screen content-center px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Instant collaboration for remote teams
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed font-light">
            All-in-one place for your remote team to chat, collaborate and track
            project progress.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Input
              label="email"
              placeholder="Enter your email"
              icon={<FaArrowRightLong />}
            />

            {/* <a
              className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
              href="#"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <svg
                  className="size-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-light transition-all group-hover:me-4">
                Get Early Access
              </span> */}
            {/* </a> */}

            <Button label="Get Early Access" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
