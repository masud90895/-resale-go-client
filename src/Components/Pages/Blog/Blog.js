import React from "react";

const Blog = () => {
  return (
    <div className="2xl:mx-auto 2xl:container 2xl:px-20 xl:px-12 sm:px-6 px-4 py-16">
      <h1 className="lg:text-4xl text-3xl font-bold font-serif leading-9 text-gray-800">
        Join Our Blog Community
      </h1>
      <p className="md:w-1/2 text-base leading-normal mt-4 sm:pr-10 text-gray-600">
        If you're looking for most unique blog, you've come to the right place.
      </p>
      <div className="md:flex items-start justify-between mt-12">
        <div className="md:w-1/2 lg:w-full">
          <div className="">
            <div className="relative">
              <img
                className="lg:h-[375px]"
                src="https://cdn.educba.com/academy/wp-content/uploads/2021/02/React-State-Management.jpg"
                alt="stairs"
              />
              <div className="bg-white absolute top-0 left-0">
                <p className="text-base leading-4 py-3 px-5 text-gray-800">
                  News
                </p>
              </div>
            </div>
            <p className="text-base font-light leading-4 text-gray-800 mt-6">
              Md Masud Rana
            </p>
            <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800">
              What are the different ways to manage a state in a React
              application
            </h1>
            <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600">
              The Four Kinds of React State to Manage Local state. Global state.
              Server state. URL state.The second option is to store the state in
              the browser via web storage. This is useful when we want to
              persist state between reloads and reboots. Examples include
              cookies, local storage, and IndexedDB. These are native browser
              technologies. Data persisted in the browser is tied to a single
              browser. So, if the user loads the site in a different browser,
              the data will not be available. We avoid storing sensitive data in
              the browser since the user may access the app on a shared machine.
              Some examples of where web storage might be most useful include
              storing a user’s shopping cart, saving partially completed form
              data or storing JWT token in HttpOnly Cookie.
            </p>
            <button className="flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
              <p className="text-base font-medium leading-4 text-white">
                Read more
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33203 8H12.6654"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.6667L12.6667 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 5.33344L12.6667 8.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="mt-9">
            <div className="relative">
              <img
                className="lg:h-[375px]"
                src="https://www.cronj.com/blog/wp-content/uploads/inheritance.png"
                alt=""
              />
              <div className="bg-white absolute top-0 left-0">
                <p className="text-base leading-4 py-3 px-5 text-gray-800">
                  News
                </p>
              </div>
            </div>
            <p className="text-base font-light leading-4 text-gray-800 mt-6">
              Md Masud Rana
            </p>
            <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800">
              How does prototypical inheritance work?
            </h1>
            <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600">
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object.In programming,
              we often want to take something and extend it. For instance, we
              have a user object with its properties and methods, and want to
              make admin and guest as slightly modified variants of it. We’d
              like to reuse what we have in user, not copy/reimplement its
              methods, just build a new object on top of it.
            </p>
            <button className="flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
              <p className="text-base font-medium leading-4 text-white">
                Read more
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33203 8H12.6654"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.6667L12.6667 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 5.33344L12.6667 8.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-6 md:mt-0 mt-9 lg:w-full">
          <div>
            <div className="relative">
              <img
                className="lg:h-[375px]"
                src="https://www.softwaretestinghelp.com/wp-content/qa/uploads/2012/11/Unit-Testing.png"
                alt="stairs"
              />
              <div className="bg-white absolute top-0 left-0">
                <p className="text-base leading-4 py-3 px-5 text-gray-800">
                  News
                </p>
              </div>
            </div>
            <p className="text-base font-light leading-4 text-gray-800 mt-6">
              Md Masud Rana
            </p>
            <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800">
              What is a unit test? Why should we write unit tests?
            </h1>
            <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600">
              Well-written unit tests act as documentation for your code. Any
              developer can quickly look at your tests and know the purpose of
              your functions. It simplifies the debugging process. Unit testing
              is an integral part of extreme programming.Unit testing helps
              developers write better code and detect errors faster. Here are
              eight reasons you should be writing unit tests.A unit test is a
              way of testing a unit - the smallest piece of code that can be
              logically isolated in a system. In most programming languages,
              that is a function, a subroutine, a method or property. The
              isolated part of the definition is important. <br />
              Well-written unit tests act as documentation for your code. Any
              developer can quickly look at your tests and know the purpose of
              your functions. It simplifies the debugging process. Unit testing
              is an integral part of extreme programming.{" "}
            </p>
            <button className="flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
              <p className="text-base font-medium leading-4 text-white">
                Read more
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33203 8H12.6654"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.6667L12.6667 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 5.33344L12.6667 8.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="mt-9">
            <div className="relative">
              <img
                className="lg:h-[375px] lg:w-[630px]"
                src="https://plainenglish.io/assets/post-content/angular-vs-react-vs-vue-js-which-is-the-best-choice-for-2022.png"
                alt="stairs"
              />
              <div className="bg-white absolute top-0 left-0">
                <p className="text-base leading-4 py-3 px-5 text-gray-800">
                  News
                </p>
              </div>
            </div>
            <p className="text-base font-light leading-4 text-gray-800 mt-6">
              Md Masud Rana
            </p>
            <h1 className="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800">
              React vs. Angular vs. Vue?
            </h1>
            <p className="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600">
              React can be used as a UI library to render elements, without
              enforcing a specific project structure, and that’s why it’s not
              strictly a framework. <br />
              The Vue.js core library focuses on the View layer only. It’s
              called a progressive framework because you can extend its
              functionality with official and third-party packages, such as Vue
              Router or Vuex, to turn it into an actual framework. <br />
              AngularJS, the original framework, is an MVC
              (Model-View-Controller) framework. But in Angular 2, there’s no
              strict association with MV*-patterns as it is also
              component-based.
            </p>
            <button className="flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
              <p className="text-base font-medium leading-4 text-white">
                Read more
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33203 8H12.6654"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.6667L12.6667 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 5.33344L12.6667 8.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
