import { FaCheck } from "react-icons/fa6";
import { GoCheck } from "react-icons/go";
import { PiCheckLight } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";

const ProductsPage = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto">
        {/* Section title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            Choose Your Plan
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Select a plan that fits your needs. Simple, transparent pricing.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
          {/* Plan card */}
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm transition hover:shadow-md">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-gray-900">
                Starter
                <span className="sr-only"> Plan</span>
              </h2>

              <p className="mt-2 text-gray-700">
                Ideal for individuals getting started with our platform.
              </p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  $20
                </strong>
                <span className="text-sm font-medium text-gray-700"> /month</span>
              </p>

              <a
                className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                href="#"
              >
                Get Started
              </a>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-gray-900 sm:text-xl">
                What&apos;s included:
              </p>
              <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <GoCheck />
                  <span className="text-gray-700">10 users</span>
                </li>
                <li className="flex items-center gap-1">
                  <GoCheck />
                  <span className="text-gray-700">2GB storage</span>
                </li>
                <li className="flex items-center gap-1">
                  <GoCheck />
                  <span className="text-gray-700">Email support</span>
                </li>
                <li className="flex items-center gap-1">
                  <RxCross1 />
                  <span className="text-gray-700">Help center access</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Plan card */}
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm transition hover:shadow-md">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-gray-900">
                Starter
                <span className="sr-only"> Plan</span>
              </h2>

              <p className="mt-2 text-gray-700">
                Ideal for individuals getting started with our platform.
              </p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  $20
                </strong>
                <span className="text-sm font-medium text-gray-700"> /month</span>
              </p>

              <a
                className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                href="#"
              >
                Get Started
              </a>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-gray-900 sm:text-xl">
                What&apos;s included:
              </p>
              <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <GoCheck />
                  <span className="text-gray-700">10 users</span>
                </li>
                <li className="flex items-center gap-1">
                  <GoCheck />
                  <span className="text-gray-700">2GB storage</span>
                </li>
                <li className="flex items-center gap-1">
                  <GoCheck />
                  <span className="text-gray-700">Email support</span>
                </li>
                <li className="flex items-center gap-1">
                  <RxCross1 />
                  <span className="text-gray-700">Help center access</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Plan card */}
          <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm transition hover:shadow-md">
            <div className="p-6 sm:px-8">
              <h2 className="text-lg font-medium text-gray-900">
                Starter
                <span className="sr-only"> Plan</span>
              </h2>

              <p className="mt-2 text-gray-700">
                Ideal for individuals getting started with our platform.
              </p>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  $20
                </strong>
                <span className="text-sm font-medium text-gray-700"> /month</span>
              </p>

              <a
                className="mt-4 block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 sm:mt-6"
                href="#"
              >
                Get Started
              </a>
            </div>

            <div className="p-6 sm:px-8">
              <p className="text-lg font-medium text-gray-900 sm:text-xl">
                What&apos;s included:
              </p>
              <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                  <GoCheck />
                  <span className="text-gray-700">10 users</span>
                </li>
                <li className="flex items-center gap-1">
                  <GoCheck />
                  <span className="text-gray-700">2GB storage</span>
                </li>
                <li className="flex items-center gap-1">
                  <GoCheck />
                  <span className="text-gray-700">Email support</span>
                </li>
                <li className="flex items-center gap-1">
                  <RxCross1 />
                  <span className="text-gray-700">Help center access</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Repeat the above card structure for 'Pro' and 'Enterprise' plans with appropriate details */}
        </div>

        {/* Additional section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">
            Need a custom plan? <a href="#" className="text-indigo-600 hover:underline">Contact us</a> for a tailored solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
