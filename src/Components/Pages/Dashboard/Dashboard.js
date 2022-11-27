import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { data: users = {} } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      fetch(`https://assinment-12-server.vercel.app/user/?email=${user?.email}`).then((res) =>
        res.json()
      ),
  });
  console.log(users);

  return (
    <div className="py-2 bg-gray-100">
      {/* test  */}

      {/* end */}

      <div className="w-full max-w-6xl px-4 mx-auto sm:px-6 md:px-8">
        {/* <!-- Desktop navbar --> */}
        <header className="hidden md:block  w-full bg-white shadow rounded-2xl">
          <nav className="flex items-center justify-between px-4 h-14">
            <Link className="text-lg font-semibold tracking-tight" to="#">
              Analytics
            </Link>

            <ul className="items-center hidden space-x-2 text-sm font-medium text-gray-600 md:flex">
              <li>
                <Link
                  className="px-3 py-2 text-blue-600 transition rounded-lg bg-blue-500/10 ring-2 ring-blue-500 ring-inset focus:outline-none"
                  to="#"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  className="px-3 py-2 transition rounded-lg hover:text-blue-600 focus:text-blue-600 focus:outline-none hover:bg-blue-500/10 focus:bg-blue-500/10 focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  to="#"
                >
                  Sites
                </Link>
              </li>

              <li>
                <Link
                  className="px-3 py-2 transition rounded-lg hover:text-blue-600 focus:text-blue-600 focus:outline-none hover:bg-blue-500/10 focus:bg-blue-500/10 focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  to="#"
                >
                  Teams
                </Link>
              </li>

              <li>
                <div className="block ml-3 transition rounded-full focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
                  <div className="relative w-8 h-8">
                    <div className="absolute inset-0 bg-gray-200 rounded-full animate-pulse"></div>

                    <img
                      className="absolute inset-0 object-cover rounded-full"
                      src="https://thispersondoesnotexist.com/image"
                      alt=""
                    />
                  </div>
                </div>
              </li>
            </ul>

            {/* <!-- Hamburger --> */}
            <div className="md:hidden">
              <button
                className="flex items-center justify-center w-10 h-10 -mr-2 text-blue-500 transition rounded-full hover:bg-gray-500/5 focus:bg-blue-500/10 focus:outline-none"
                type="button"
              >
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4.75 5.75H19.25"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4.75 18.25H19.25"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4.75 12H19.25"
                  />
                </svg>{" "}
              </button>
            </div>
          </nav>

          {/* <!-- Mobile menu --> */}
          <nav className="px-2 md:hidden">
            <div className="border-t"></div>

            <ul className="flex flex-col py-2 space-y-1 text-sm font-medium text-gray-600">
              <li>
                <Link
                  className="block p-2 transition rounded-lg hover:text-blue-600 focus:text-blue-600 focus:outline-none hover:bg-blue-500/10 focus:bg-blue-500/10 focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  to="#"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  className="block p-2 text-blue-600 transition rounded-lg bg-blue-500/10 ring-2 ring-blue-500 ring-inset"
                  to="#"
                >
                  Sites
                </Link>
              </li>

              <li>
                <Link
                  className="block p-2 transition rounded-lg hover:text-blue-600 focus:text-blue-600 focus:outline-none hover:bg-blue-500/10 focus:bg-blue-500/10 focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  to="#"
                >
                  Teams
                </Link>
              </li>

              <li>
                <Link
                  className="block p-2 transition rounded-lg hover:text-blue-600 focus:text-blue-600 focus:outline-none hover:bg-blue-500/10 focus:bg-blue-500/10 focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  to="#"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <div className="mt-3">
          <h1 className="text-3xl font-serif text-center">
            Welcome Dear Honorable <span>{users?.role}</span>{" "}
          </h1>
          <h1 className="mt-3 text-blue-600 underline  text-2xl font-serif text-center">
            {users?.name}
          </h1>
          <p className="md:text-lg my-1 text-center">
            Thank you for coming here! I hope you enjoy our product.If any
            problem contract us
          </p>
        </div>

        <div className="grid gap-2 my-12 md:gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Resale Go
            </h1>

            <Link
              className="inline-flex items-center space-x-1 font-medium"
              to="#"
            >
              <svg
                className="text-green-500 w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M5.75 11.75C5.75 11.1977 6.19772 10.75 6.75 10.75H17.25C17.8023 10.75 18.25 11.1977 18.25 11.75V17.25C18.25 18.3546 17.3546 19.25 16.25 19.25H7.75C6.64543 19.25 5.75 18.3546 5.75 17.25V11.75Z"
                />
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M7.75 10.5V10.3427C7.75 8.78147 7.65607 7.04125 8.74646 5.9239C9.36829 5.2867 10.3745 4.75 12 4.75C13.6255 4.75 14.6317 5.2867 15.2535 5.9239C16.3439 7.04125 16.25 8.78147 16.25 10.3427V10.5"
                />
              </svg>
              <span>www.resale-go.com</span>
            </Link>
          </div>

          <div className="space-y-2 md:justify-self-end">
            <div>
              <label className="sr-only" htmlFor="date_range">
                Show statistics for
              </label>

              <div className="relative group">
                <select
                  className="block w-full pr-10 text-sm font-medium transition duration-75 border-gray-300 rounded-lg shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none"
                  id="date_range"
                >
                  <option value="week">Last week</option>
                  <option value="month">Last month</option>
                  <option value="year">Last year</option>
                </select>

                <span className="absolute inset-y-0 right-0 flex items-center justify-center text-gray-400 transition pointer-events-none w-9 h-9 group-focus-within:text-blue-500">
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15.25 10.75L12 14.25L8.75 10.75"
                    />
                  </svg>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="grid gap-6 my-6 md:grid-cols-3">
          <div className="p-6 bg-white shadow rounded-2xl">
            <dl className="space-y-2">
              <dt className="text-sm font-medium text-gray-500">
                Unique views
              </dt>

              <dd className="text-5xl font-light md:text-6xl">192.1k</dd>

              <dd className="flex items-center space-x-1 text-sm font-medium text-green-500">
                <span>32k increase</span>
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.25 15.25V6.75H8.75"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 7L6.75 17.25"
                  />
                </svg>{" "}
              </dd>
            </dl>
          </div>

          <div className="p-6 bg-white shadow rounded-2xl">
            <dl className="space-y-2">
              <dt className="text-sm font-medium text-gray-500">Bounce rate</dt>

              <dd className="text-5xl font-light md:text-6xl">21%</dd>

              <dd className="flex items-center space-x-1 text-sm font-medium text-red-500">
                <span>7% increase</span>
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.25 8.75V17.25H8.75"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 17L6.75 6.75"
                  />
                </svg>{" "}
              </dd>
            </dl>
          </div>

          <div className="p-6 bg-white shadow rounded-2xl">
            <dl className="space-y-2">
              <dt className="text-sm font-medium text-gray-500">
                Average time on page
              </dt>

              <dd className="text-5xl font-light md:text-6xl">03:12</dd>

              <dd className="flex items-center space-x-1 text-sm font-medium text-green-500">
                <span>3% increase</span>
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.25 15.25V6.75H8.75"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17 7L6.75 17.25"
                  />
                </svg>{" "}
              </dd>
            </dl>
          </div>
        </section>

        <section className="grid gap-6 my-6 md:grid-cols-2">
          <div className="p-2 space-y-2 bg-white shadow rounded-xl">
            <header className="px-4 py-2">
              <h2 className="text-xl font-semibold tracking-tight">
                Visits per page
              </h2>
            </header>

            <div className="border-t"></div>

            <div className="p-4">
              <dl className="-my-2 space-y-1">
                <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 text-sm font-medium text-gray-500 pb-2">
                  <dt>Content</dt>

                  <dt className="text-right">Views</dt>

                  <dt className="text-right">Unique</dt>
                </div>

                <div className="relative py-2 -mx-2">
                  <div className="absolute inset-0 w-4/5 h-full rounded-lg bg-blue-500/5"></div>

                  <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 text-sm font-medium px-2 relative">
                    <dd>/</dd>

                    <dd className="text-right">963</dd>

                    <dd className="text-right">567</dd>
                  </div>
                </div>

                <div className="relative py-2 -mx-2">
                  <div className="absolute inset-0 w-1/2 h-full rounded-lg bg-blue-500/5"></div>

                  <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 text-sm font-medium px-2 relative">
                    <dd>/blog</dd>

                    <dd className="text-right">414</dd>

                    <dd className="text-right">124</dd>
                  </div>
                </div>

                <div className="relative py-2 -mx-2">
                  <div className="absolute inset-0 w-1/4 h-full rounded-lg bg-blue-500/5"></div>

                  <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 text-sm font-medium px-2 relative">
                    <dd>/product</dd>

                    <dd className="text-right">251</dd>

                    <dd className="text-right">203</dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>

          <div className="p-2 space-y-2 bg-white shadow rounded-xl">
            <header className="px-4 py-2">
              <h2 className="text-xl font-semibold tracking-tight">
                Visits per country
              </h2>
            </header>

            <div className="border-t"></div>

            <div className="p-4">
              <dl className="-my-2 space-y-1">
                <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 text-sm font-medium text-gray-500 pb-2">
                  <dt>Country</dt>

                  <dt className="text-right">Views</dt>

                  <dt className="text-right">Unique</dt>
                </div>

                <div className="relative py-2 -mx-2">
                  <div className="absolute inset-0 w-2/3 h-full rounded-lg bg-blue-500/5"></div>

                  <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 text-sm font-medium px-2 relative">
                    <dd>Bangladesh</dd>

                    <dd className="text-right">71k</dd>

                    <dd className="text-right">40k</dd>
                  </div>
                </div>

                <div className="relative py-2 -mx-2">
                  <div className="absolute inset-0 w-1/2 h-full rounded-lg bg-blue-500/5"></div>

                  <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 text-sm font-medium px-2 relative">
                    <dd>United States</dd>

                    <dd className="text-right">41k</dd>

                    <dd className="text-right">32k</dd>
                  </div>
                </div>

                <div className="relative py-2 -mx-2">
                  <div className="absolute inset-0 w-1/6 h-full rounded-lg bg-blue-500/5"></div>

                  <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 text-sm font-medium px-2 relative">
                    <dd>Germany</dd>

                    <dd className="text-right">36k</dd>

                    <dd className="text-right">27k</dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

{
  /* <div className="h-screen flex items-center justify-center">
     <div>
       <h1 className="md:text-4xl text-2xl font-serif text-center">
         Welcome Dear Honorable{" "}
         <span className="underline text-green-600">{users?.role}</span>{" "}
       </h1>
       <h1 className="mt-3 bg-gray-300 p-2 text-green-600 md:text-3xl text-2xl font-serif text-center">
         {users?.name}
       </h1>
       <p className="md:text-2xl my-4 text-center">
         Thank you for coming here! I hope you enjoy our product.If any problem
         contract us
       </p>
     </div>
   </div> */
}
export default Dashboard;
