import { Card } from "@/app/components/card";
import { ArrowLeft, Github, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function page() {
  const links: { label: string; href: string }[] = [
    {
      label: "Github (Flutter)",
      href: "https://github.com/Bhone-Sithu/MonasteryManagementApp",
    },{
      label: "Github (Web)",
      href: "https://github.com/Bhone-Sithu/monastery-management-website",
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
                Monastery Management Application
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                A buddhist monastery asked me to develop an application, aimed
                at efficiently managing their buildings and donor relationships,
                thereby enhancing their organizational capabilities.
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
          <div className=" leading-relaxed my-10">
            <h2 className="text-xl font-medium">Problem:</h2> <br/>

            A Buddhist monastery traditionally manages its building information and donor relationships using static
            documents like PDFs and Word files. This approach presents several limitations:
            <br/><br/>
            <ul className={"list-disc"}>
              <li> Inefficiency: Manual data entry from PDFs into Excel spreadsheets is time-consuming and prone to
                errors.
              </li>
              <li>Data Silos: Information is scattered across multiple files, making it difficult to retrieve and
                analyze.
              </li>
              <li>Scalability: The system struggles to handle a growing number of buildings and donors.
              </li>
            </ul>
<br/>
            <h2 className="text-xl font-medium"> Proposed Solution: </h2><br/>

              The monastery seeks to digitally transform its data management system through a web and mobile
              application. This new system will offer several advantages:
            <br/><br/>
              <ul  className={"list-disc"}>
                <li>Centralized Database: A secure cloud-based database (e.g., Firebase Firestore) will store all
                  building information, donor details, and associated media (photos and maps in firebase file storage).
                </li>
                <li>Streamlined Data Entry: A user-friendly web interface will simplify data entry and eliminate the
                  need for manual file conversions.
                </li>
                <li> Improved Accessibility: Both the web and mobile applications will allow authorized users to access
                  and manage building information and donor relationships from anywhere.
                </li>
                <li>Enhanced Reporting: The centralized database will facilitate the generation of reports and data
                  analysis, enabling better decision-making.
                </li>
              </ul>
          </div>
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
                  Centralized Firebase Backend
                </span>
                <br />
                <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3 list-disc">
                    <li>
                      Offline Capabilities
                    </li>
                    <li>
                      Enhanced Security and Scalability
                    </li>
                    <li>
                      Realtime data
                    </li>
                    <li>
                      Serverless Architecture
                    </li>
                  </ul>
                </span>
              </div>
              <div className="z-10 p-10 flex flex-col border rounded-xl bg-zinc-800">
                <span className=" text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Account Management
                </span>
                <br />
                <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3 list-disc">
                    <li>
                      Guests can view building data without logging in with limited functionality
                    </li>
                    <li>
                      Admin account can manage building data
                    </li>
                  </ul>
                </span>
              </div>
              <div className="z-10 p-10 flex flex-col border rounded-xl bg-zinc-800">
                <span className=" text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Web and mobile support
                </span>
                <br />
                <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3 list-disc">
                    <li>
                      Website built with Nextjs/Reactjs
                    </li>
                    <li>
                      Mobile app developed with Flutter
                    </li>
                  </ul>
                </span>
              </div>
              <div></div>
              <div className="z-10 p-10 flex flex-col border rounded-xl bg-zinc-800">
                <span className=" text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Buildings management
                </span>
                <br />
                <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3 list-disc">
                    <li>
                      Admin can manage building from both mobile and web apps
                    </li>
                    <li>
                      Create new buildings with donor name and photo of building
                    </li>
                    <li>
                      Update existing buildings
                    </li>
                    <li>
                      Delete old buildings
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
                <span
                    className=" mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000  text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
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
                <span
                    className="p-1 mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000  text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                      src={"/logos/ReactLogo.png"}
                      alt="React Logo"
                      width={300}
                      height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-500 group-hover:text-white font-display">
                  React
                </p>
              </div>
              <div>
                <span
                    className="p-1 mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000  text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                      src={"/logos/FlutterLogo.png"}
                      alt="Flutter Logo"
                      width={300}
                      height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-500 group-hover:text-white font-display">
                  Flutter
                </p>
              </div>
              <div>
                <span
                    className="p-1 mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000  text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                      src={"/logos/ReduxLogo.png"}
                      alt="Redux Logo"
                      width={300}
                      height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-500 group-hover:text-white font-display">
                  Redux
                </p>
              </div>
              <div>
                <span
                    className="p-1 mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000  text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                      src={"/logos/JestLogo.png"}
                      alt="Jest Logo"
                      width={300}
                      height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-500 group-hover:text-white font-display">
                  Jest
                </p>
              </div>
              <div>
                <span
                    className="p-1 mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000  text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                      src={"/logos/FirebaseLogo.png"}
                      alt="Firebase Logo"
                      width={300}
                      height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-500 group-hover:text-white font-display">
                  Firebase
                </p>
              </div>
              <div>
                <span
                    className="p-1 mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000  text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                      src={"/logos/NextLogo.png"}
                      alt="Next Logo"
                      width={300}
                      height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-500 group-hover:text-white font-display">
                  NextJS
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
          <div className=" w-9/12 grid grid-cols-1 md:grid-cols-2 mx-auto">
            <Image
              alt="Chat Mockup"
              src={"/mocks/monastery/MonasteryMock1.png"}
              width={600}
              height={600}
            />

            <Image
              alt="Dashboard Mockup"
              className="border"
              src={"/mocks/monastery/MonasteryMock2.png"}
              width={600}
              height={600}
            />

            <Image
              alt="Payment Mockup"
              src={"/mocks/monastery/MonasteryMock3.png"}
              width={600}
              height={600}
            />

            <Image
              alt="ProjectList Mockup"
              src={"/mocks/lancer/ProjectListMock.png"}
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
