"use client";

import { FaArrowRight } from "react-icons/fa6";

const Highlight = () => {
  return (
    <section className="relative overflow-hidden py-12">
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 rounded-lg sm:h-80 lg:h-full lg:order-last lg:ml-10 lg:mr-[-100px]">
          <img
            alt="Team chat highlight"
            src="/img/demo.png"
            className="inset-0 h-full w-full object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="relative pl-4 lg:py-24 z-10">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Chats for your distributed teams
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Team combines the immediacy of real-time chat with an email
            threading model. With Team, you can catch up on important
            conversations while ignoring irrelevant ones.
          </p>

          <a
            href="#"
            className="mt-8 inline-flex items-center rounded text-sm font-medium underline text-primary hover:no-underline focus:outline-none"
          >
            <span className="pr-2">Learn more</span>

            <FaArrowRight className="inline" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
