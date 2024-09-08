"use client";

import { FaArrowRight } from "react-icons/fa6";

const Features = () => {
  return (
    <div className="container mx-auto px-4">
      <section className="py-12">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Image section */}
          <div className="relative w-full h-80 rounded-lg overflow-hidden lg:h-full">
            <img
              src="/img/card3.png" // Replace with the correct image path
              alt="Person working on a laptop"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Choose how you want to work
            </h2>
            <p className="mt-4 text-gray-600">
              In Team, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.
            </p>

            <a
              href="#"
              className="mt-6 inline-flex items-center text-primary hover:underline font-medium text-sm"
            >
              <span>Learn more</span>
              <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Text section */}
          <div className="text-left lg:text-left">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Move faster with your Team tools
            </h2>
            <p className="mt-4 text-gray-600">
              With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.
            </p>

            <a
              href="#"
              className="mt-6 inline-flex items-center text-primary hover:underline font-medium text-sm"
            >
              <span>Learn more</span>
              <FaArrowRight className="ml-2" />
            </a>
          </div>

          {/* Image section */}
          <div className="relative w-full h-80 rounded-lg overflow-hidden lg:h-full">
            <img
              src="/img/card1.png" // Replace with the correct image path
              alt="Person working on a laptop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          {/* Image section */}
          <div className="relative w-full h-80 rounded-lg overflow-hidden lg:h-full">
            <img
              src="/img/card2.png" // Replace with the correct image path
              alt="Person working on a laptop"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Chats for your distributed teams
            </h2>
            <p className="mt-4 text-gray-600">
              Team combines the immediacy of real-time chat with an email
              threading model. With Team, you can catch up on important
              conversations while ignoring irrelevant ones.
            </p>

            <a
              href="#"
              className="mt-6 inline-flex items-center text-primary hover:underline font-medium text-sm"
            >
              <span>Learn more</span>
              <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features;