import { Card } from "@/app/components/card";
import { ArrowLeft, Github, Twitter } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function page() {
  const links: { label: string; href: string }[] = [
    {
      label: "Github",
      href: "https://github.com/Bhone-Sithu/Biscotti",
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
                Biscotti Self Management Application
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                I designed a personal app to optimize my productivity and
                digital habits. It records hour and minute data for different
                tasks, regulates app usage with a math quiz feature, and tracks
                usage time with customizable daily limits. This tailored
                solution empowers efficient time management and fosters a
                healthy balance between productivity and leisure.
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
            In some Freelancing Websites, there's a lack of background checks,
            enabling account creation with just an email. Despite efforts to
            review scam job postings, some slip through, with fraud targeting
            users on the rise. Job applicants often find themselves redirected
            to external websites or given email addresses. The platform connects
            candidates and employers without specifying job types, leading to
            confusion. Additionally, freelancers bidding on projects with
            timelines and budgets seems counterintuitive, as typically employers
            set payment terms. I developed this project using MERN Stack along
            with features that would solve these problems.
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
                  Starting Freelance Project
                </span>
                <br />
                <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3 list-disc">
                    <li>
                      Verified accounts can utilize key functions, including
                      project posting, freelancer acceptance, and project
                      initiation.
                    </li>
                    <li>
                      Admins review project requests, notifying employers of
                      approval or rejection.
                    </li>
                    <li>
                      Approved projects are accessible for freelancers to apply,
                      and employers can accept candidates or send invitations.
                    </li>
                    <li>
                      Payment transfer to the assigned admin initiates the
                      project, unlocking communication and dashboard functions
                      for both parties.
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
                      Account management functions involve registering and
                      managing accounts.
                    </li>
                    <li>
                      Users register and await approval from admins, who conduct
                      background checks on unapproved accounts.
                    </li>
                    <li>
                      Approved or rejected accounts receive automatic emails
                      from the Lancer system.
                    </li>
                  </ul>
                </span>
              </div>
              <div className="z-10 p-10 flex flex-col border rounded-xl bg-zinc-800">
                <span className=" text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Payment Transaction
                </span>
                <br />
                <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3 list-disc">
                    <li>
                      The website offers a dollar-equivalent currency for
                      top-ups and withdrawals via Visa, Mastercard, etc.
                    </li>
                    <li>
                      Employers must fund their accounts for project
                      commencement, with admin approval upon payment receipt.
                    </li>
                    <li>
                      Admins oversee project initiation upon payment
                      confirmation and handle payments to freelancers upon
                      project completion.
                    </li>
                    <li>
                      Users can view payment history for past transactions.
                    </li>
                  </ul>
                </span>
              </div>
              <div className="z-10 p-10 flex flex-col border rounded-xl bg-zinc-800">
                <span className=" text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Feedback and Ratings
                </span>
                <br />
                <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3 list-disc">
                    <li>
                      Employers can rate give feedbacks to their project’s
                      freelancers when the project is completed.
                    </li>
                    <li>
                      The rating and feedback will be shown on the user profile.
                    </li>
                  </ul>
                </span>
              </div>
              <div className="z-10 p-10 flex flex-col border rounded-xl bg-zinc-800">
                <span className=" text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Management Report
                </span>
                <br />
                <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3 list-disc">
                    <li>
                      This feature enables Lancer's management to analyze
                      website data for future planning.
                    </li>
                    <li>
                      Statistical reports include project counts for each
                      skillset or industry, freelancer skillset distribution,
                      and more.
                    </li>
                  </ul>
                </span>
              </div>
              <div className="z-10 p-10 flex flex-col border rounded-xl bg-zinc-800">
                <span className=" text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Communication Features
                </span>
                <br />
                <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3 list-disc">
                    <li>
                      After payment transfer, a communication channel opens for
                      freelancers, employers, and admins to discuss projects,
                      share files, and communicate.
                    </li>
                    <li>
                      Admins monitor and manage conversations, deleting
                      inappropriate messages as needed.
                    </li>
                  </ul>
                </span>
              </div>
              <div className="z-10 p-10 flex flex-col border rounded-xl bg-zinc-800">
                <span className=" text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Project Dashboard
                </span>
                <br />
                <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3 list-disc">
                    <li>
                      The dashboard will include chat functions, project
                      progress bars, requirements, and files.
                    </li>
                    <li>
                      Employers provide requirements, and freelancers upload
                      files and update progress levels.
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
                <span className="p-1 mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000  text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/NodeJSLogo.png"}
                    alt="NodeJS Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-500 group-hover:text-white font-display">
                  NodeJS
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000  text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
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
                <span className="p-1 mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000  text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
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
              src={"/mocks/lancer/ChatMock.png"}
              width={600}
              height={600}
            />

            <Image
              alt="Dashboard Mockup"
              className="border"
              src={"/mocks/lancer/DashboardMock.png"}
              width={600}
              height={600}
            />

            <Image
              alt="Payment Mockup"
              src={"/mocks/lancer/PaymentMock.png"}
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
              alt="ERD"
              className="border"
              src={"/mocks/lancer/ERD.png"}
              width={600}
              height={600}
            />

            <Image
              alt="Employer Activity"
              className="border"
              src={"/mocks/lancer/Activity.png"}
              width={400}
              height={300}
            />

            <Image
              alt="Freelancer Activity"
              className="border"
              src={"/mocks/lancer/ActivityF.png"}
              width={400}
              height={200}
            />
            <Image
              alt="Use Case"
              className="border"
              src={"/mocks/lancer/UseCase.png"}
              width={400}
              height={400}
            />
          </div>
        </section>
      </article>
    </div>
  );
}

export default page;
