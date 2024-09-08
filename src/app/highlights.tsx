"use client";

import { FaArrowRight } from "react-icons/fa6";

const Highlight = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="/img/demo.png"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Chats for your distributed teams
              </h2>

              <p className="mt-4 text-gray-600">
                Team combines the immediacy of real-time chat with an email
                threading model. With Team, you can catch up on important
                conversations while ignoring irrelevant ones.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded text-sm font-medium underline text-primary hover:no-underline focus:outline-none"
              >
                <span className="pr-2">Learn more</span>

                <FaArrowRight className="inline" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Highlight;
