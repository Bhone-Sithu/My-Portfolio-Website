import { Card } from "@/app/components/card";
import { ArrowLeft, Github, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function page() {
  const links: { label: string; href: string }[] = [
    {
      label: "How we developed it",
      href: "https://www.canva.com/design/DAFkAUvQ3sI/yNgyzI4Ma59OLMOClW4cMw/edit?utm_content=DAFkAUvQ3sI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
  ];

  return (
    <div className=" bg-zinc-50 min-h-screen">
      <header className=" relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black">
        <div
          className={`w-full fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 lg:bg-transparent 
                
               "bg-zinc-900/0 border-transparent"
               "bg-white/10  border-zinc-200 lg:border-transparent"
          }`}
        >
          <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
            <div className="flex justify-between gap-8 ">
              {/* <span
                              title="View counter for this page"
                              className={`duration-200 hover:font-medium flex items-center gap-1 ${
                                  isIntersecting
                                      ? " text-zinc-400 hover:text-zinc-100"
                                      : "text-zinc-600 hover:text-zinc-900"
                              } `}
                          >
                              <Eye className="w-5 h-5" />{" "}
                              {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                                  views,
                              )}
                          </span> */}
              <Link target="_blank" href="https://twitter.com/chronark_">
                <Twitter
                  className={`w-6 h-6 duration-200 hover:font-medium
                      " text-zinc-400 hover:text-zinc-100"
                       "text-zinc-600 hover:text-zinc-900"
                  } `}
                />
              </Link>
              <Link target="_blank" href="https://github.com/chronark">
                <Github
                  className={`w-6 h-6 duration-200 hover:font-medium 
                      " text-zinc-400 hover:text-zinc-100"
                       "text-zinc-600 hover:text-zinc-900"
                  } `}
                />
              </Link>
            </div>

            <Link
              href="/projects"
              className={`duration-200 hover:font-medium
                
                   " text-zinc-400 hover:text-zinc-100"
                  "text-zinc-600 hover:text-zinc-900"
              } `}
            >
              <ArrowLeft className="w-6 h-6 " />
            </Link>
          </div>
        </div>
        <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
                Ferry Management Website and Applicatioin
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                The Ferry Management System is designed to modernize the
                company's ferry operations, replacing outdated paper-based
                processes with efficient digital solutions. It includes a web
                version for company use, along with dedicated applications for
                employees and ferry drivers.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <Link target="_blank" key={link.label} href={link.href}>
                    {link.label} <span aria-hidden="true">&rarr;</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
      <article className="px-4 py-12 ">
        <section className="mx-auto w-8/12">
          <h2 className="text-3xl font-medium">Context</h2>
          <p className=" leading-relaxed my-10">
            The company's ferry operation is facing several challenges,
            including time-consuming ferry requests, communication issues
            between drivers, employees, and admin, cumbersome paper-based
            attendance records, and difficulties in emergency notifications.
            Additionally, there's a lack of visibility into employee boarding,
            resulting in wasted time on routes and challenges with leave and
            vehicle changes. Furthermore, there's unnecessary waste of vehicles
            and financial resources, excessive paper documentation for route
            reports, and difficulties in scheduling and planning routes.
          </p>
        </section>

        <h1 className="relative my-20 w-full text-center text-3xl duration-1000 cursor-default text-edge-outline bg-clip-text ">
          <span
            className="lg:absolute -left-1 z-9 top-4 w-5/12 h-px  bg-gradient-to-l from-zinc-500 via-zinc-500/50 to-transparent"
            aria-hidden="true"
          />
          <p className="w-fit mx-auto ">Functions</p>

          <span
            className="lg:absolute -right-1 z-9 top-4 w-5/12 h-px  bg-gradient-to-r from-zinc-500 via-zinc-500/50 to-transparent"
            aria-hidden="true"
          />
        </h1>
        <section id="project-functions" className="">
          <div className="container px-4 my-5 mx-auto">
            <div className="grid grid-cols-1 gap-8  sm:mt-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 justify-center items-center">
              <div className="p-10 flex flex-col border rounded-xl bg-zinc-800">
                <span className=" text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Employee Management Functions
                </span>
                <br />
                <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3 list-disc">
                    <li>
                      An online service that facilitates employee registration,
                      ferry requests, and master data.
                    </li>
                    <li>
                      Providing a centralized platform to oversee and manage
                      employee accounts efficiently.
                    </li>
                    <li>
                      Organizing and Managing ferry stops, akin to bus stops,
                      ensuring smooth operations and optimal routing.
                    </li>
                    <li>
                      Offering comprehensive reports to track and analyze ferry
                      operations, aiding in informed decision-making and
                      performance evaluation.
                    </li>
                    <li>
                      Monitor attendance and ferry requests from employees,
                      enhancing operational efficiency and employee
                      satisfaction.
                    </li>
                  </ul>
                </span>
              </div>
              <div className="z-10 p-10 flex flex-col border rounded-xl bg-zinc-800">
                <span className=" text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Route Management Functions
                </span>
                <br />
                <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3 list-disc">
                    <li>
                      Efficiently manages ferry stops to create new ferry
                      routes, optimize route performance by calculating start
                      and arrival times.
                    </li>
                    <li>
                      Assigns and monitors vehicles and drivers for each ferry
                      route, facilitating seamless adjustments in case of
                      absenteeism.
                    </li>
                    <li>
                      Provides a comprehensive overview of employee check-ins
                      and check-outs in a ferry, complete with timestamps.
                    </li>
                    <li>
                      By managing ferry stops it can create an efficient ferry
                      routes and be able to view route performance from
                      calculating start and arrival time
                    </li>
                    <li>
                      Offers detailed, up-to-date information on ferry routes in
                      real-time.
                    </li>
                    <li>
                      Notifies admins promptly about routes facing emergencies,
                      enabling swift action.
                    </li>
                  </ul>
                </span>
              </div>
              <div className="z-10 p-10 flex flex-col border rounded-xl bg-zinc-800">
                <span className=" text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Vehicle Management Functions
                </span>
                <br />
                <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3 list-disc">
                    <li>
                      Efficiently manages profiles for vehicles and drivers.
                    </li>
                    <li>
                      Assigns vehicles to drivers and updates their status as
                      needed.
                    </li>
                    <li>
                      Tracks vehicle maintenance schedules and ensures timely
                      servicing.
                    </li>
                    <li>
                      Provides access to comprehensive reports on vehicles and
                      drivers for better oversight and decision-making.
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </section>

        <h1 className="relative my-20 w-full text-center text-3xl ">
          <span
            className="lg:absolute -left-1 z-9 top-4 w-4/12 h-px  bg-gradient-to-l from-zinc-500 via-zinc-500/50 to-transparent"
            aria-hidden="true"
          />
          <p className="w-fit mx-auto ">Technologies that I used (MERN)</p>

          <span
            className="lg:absolute -right-1 z-9 top-4 w-4/12 h-px  bg-gradient-to-r from-zinc-500 via-zinc-500/50 to-transparent"
            aria-hidden="true"
          />
        </h1>
        <section id="project-tech">
          <div className="container flexmin-h-screen px-4 mx-auto">
            <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mx-auto sm:mt-0  lg:gap-16">
              <div>
                <span className=" mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000  text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    className=""
                    src={"/logos/JavascriptLogo.jpg"}
                    alt="JS Logo"
                    width={350}
                    height={350}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-500 group-hover:text-white font-display">
                  Javascript
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000  text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/ASPdotnetLogo.png"}
                    alt="Asp Dotnet Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-500 group-hover:text-white font-display">
                  ASP Dotnet
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000  text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/CLogo.png"}
                    alt="C# Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-500 group-hover:text-white font-display">
                  C#
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000  text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/3LayerLogo.png"}
                    alt="3Layer Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-500 group-hover:text-white font-display">
                  3Layer
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000  text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/RestLogo.webp"}
                    alt="Rest Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-500 group-hover:text-white font-display">
                  Rest
                </p>
              </div>
            </div>
          </div>
        </section>
        <h1 className="relative my-20 w-full text-center text-3xl text-transparent duration-1000 text-black cursor-default text-edge-outline bg-clip-text ">
          <span
            className="lg:absolute -left-1 z-9 top-4 w-5/12 h-px  bg-gradient-to-l from-zinc-500 via-zinc-500/50 to-transparent"
            aria-hidden="true"
          />
          <p className="text-black">Gallery</p>
          <span
            className="lg:absolute -right-1 z-9 top-4 w-5/12 h-px  bg-gradient-to-r from-zinc-500 via-zinc-500/50 to-transparent"
            aria-hidden="true"
          />
        </h1>
        <section id="gallery">
          <h1 className="text-center text-2xl text-red-500 w-6/12 mx-auto">
            Due to confidentiality reasons, the example showcase is not
            available for public display as it contains sensitive information
            pertinent to the company's internal operations.
          </h1>
        </section>

        <h1 className="relative my-20 w-full text-center text-3xl text-transparent duration-1000 text-black cursor-default text-edge-outline bg-clip-text ">
          <span
            className="lg:absolute -left-1 z-9 top-4 w-5/12 h-px  bg-gradient-to-l from-zinc-500 via-zinc-500/50 to-transparent"
            aria-hidden="true"
          />
          <p className="text-black">System Design</p>
          <span
            className="lg:absolute -right-1 z-9 top-4 w-5/12 h-px  bg-gradient-to-r from-zinc-500 via-zinc-500/50 to-transparent"
            aria-hidden="true"
          />
        </h1>
        <section id="design">
          <div className=" w-9/12 grid grid-cols-1 md:grid-cols-2 mx-auto gap-10">
            <Image
              alt="System Architecture"
              className="border"
              src={"/mocks/fms/architecture.png"}
              width={600}
              height={600}
            />

            <Image
              alt="Deployment"
              className="border"
              src={"/mocks/fms/deployment.png"}
              width={600}
              height={600}
            />

            <Image
              alt="Users"
              className="border"
              src={"/mocks/fms/users.png"}
              width={600}
              height={600}
            />

            <Image
              alt="Testing"
              className="border"
              src={"/mocks/fms/testing.png"}
              width={600}
              height={600}
            />
          </div>
        </section>
      </article>
    </div>
  );
}

export default page;
