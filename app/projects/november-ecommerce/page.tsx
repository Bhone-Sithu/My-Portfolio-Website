import { Card } from "@/app/components/card";
import { ArrowLeft, Github, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function page() {
  const links: { label: string; href: string }[] = [
    {
      label: "Github",
      href: "https://github.com/Bhone-Sithu/NovemberNight",
    },
    {
      label: "Documentation",
      href: "https://docs.google.com/document/d/1FS3NsrIFdDUcrmt6lYBOQJmflwQcUY0_/edit?usp=sharing&ouid=101093057551389131492&rtpof=true&sd=true",
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
                November Single-product Ecommerce Website
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-300">
                Developed a single product e-commerce system for 'November',
                with functionalities including recording band performances,
                managing schedules, menu types, and raw material procurement.
                Additionally, the system allows customers to place orders, make
                payments, track deliveries, and provide feedback seamlessly
                through the website interface.
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
            The café chain 'November' faces several business challenges.
            Firstly, with multiple branches but no dedicated HR department,
            managing and keeping track of staff records is a headache. Secondly,
            their manual attendance system makes it hard to calculate salaries
            and give bonuses accurately. Thirdly, scheduling bands for Friday
            night performances is a hassle, as it's all done manually and bands
            aren't always available. Fourthly, their menu changes a lot due to
            ingredient availability, making it hard to keep customers satisfied.
            Fifthly, importing materials adds complexity and cost to their
            operations. Sixthly, their cash-based payment system and offline
            order processing make it tough to track sales and profits. Lastly,
            they struggle to gather feedback effectively since surveys are only
            available at the main café. These issues could hamper their growth
            and customer satisfaction if not addressed efficiently.
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
                  Account Management
                </span>
                <br />
                <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3 list-disc">
                    <li>
                      Admin can manage accounts and perform CRUD
                    </li>
                    <li>
                      There are four different accounts (Customer, Staff, Delivery, Admin)
                    </li>
                  </ul>
                </span>
              </div>
              <div className="z-10 p-10 flex flex-col border rounded-xl bg-zinc-800">
                <span className=" text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Order Management
                </span>
                <br />
                <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3 list-disc">
                    <li>
                      Customer can order drinks by browsing through menu, adding to shopping cart and checking out along with payment types.
                    </li>
                    <li>
                      Orders are monitored by staff and can be updated or deleted.
                    </li>
                  </ul>
                </span>
              </div>
              <div className="z-10 p-10 flex flex-col border rounded-xl bg-zinc-800">
                <span className=" text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Delivery Management
                </span>
                <br />
                <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3 list-disc">
                    <li>
                      Orders are then selected by delivery staff.
                    </li>
                    <li>
                      Delivery staff can edit detail of where about.
                    </li>
                    <li>
                      Customers can track order when delivery staff edit the details
                    </li>
                  </ul>
                </span>
              </div>
              <div className="z-10 p-10 flex flex-col border rounded-xl bg-zinc-800">
                <span className=" text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Ingredient Management
                </span>
                <br />
                <span className="mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3 list-disc">
                    <li>
                      Ingredient orders consists of a different stock system
                    </li>
                    <li>
                      Ordering supply can be done by admin and staff by creating supplier id, raw ingredient id and ordering them.
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
                    src={"/logos/PhpLogo.jpg"}
                    alt="Php Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-500 group-hover:text-white font-display">
                  Php
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000  text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/MySQLLogo.png"}
                    alt="MySQL Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-500 group-hover:text-white font-display">
                  MySQL
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
