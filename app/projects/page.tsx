import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import {
  Eye,
  PersonStanding,
  PersonStandingIcon,
  UserCircle,
} from "lucide-react";

export const revalidate = 60;
export default async function ProjectsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/lancer-freelancing-website`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">2022</div>
                </div>
                <span className="text-zinc-500 text-xs my-2 flex items-center gap-1">
                  <UserCircle className="w-4 h-4" /> Personal
                </span>
                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Lancer Freelancing Website
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  A freelancing website connects clients with freelancers for
                  various tasks like design, writing, programming, and more.
                  Freelancers showcase their skills and rates, while clients
                  post job listings. Similar platforms include Upwork,
                  Freelancer, and Fiverr.
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            <Card>
              <Link href={`/projects/ferry-management-system`}>
                <article className="p-4 md:p-8">
                  <div className="flex justify-between gap-2 items-center">
                    <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                      2023
                    </span>
                    <span className="text-zinc-500 text-xs my-2 flex items-center gap-1">
                      <UserCircle className="w-4 h-4" /> Team
                    </span>
                  </div>
                  <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    Ferry Management System
                  </h2>
                  <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    The Ferry Management System aims to modernize the company's
                    ferry operations, replacing paper-based processes with
                    digital solutions.
                    {/* The system efficiently manages ferry
                    stops and creates routes by organizing these stops.
                    Additionally, it includes a mobile app for employees to view
                    ferry locations and utilize check-in/check-out functions.
                    Admins can monitor routes in real-time and access various
                    additional functions. */}
                    Click to learn more about its features.
                  </p>
                </article>
              </Link>
            </Card>
            <Card>
              <Link
                href={`https://www.sourcecode.com.mm/delivery-management-system/`}
                target="_blank"
              >
                <article className="p-4 md:p-8">
                  <div className="flex justify-between gap-2 items-center">
                    <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                      2020
                    </span>
                    <span className="text-zinc-500 text-xs my-2 flex items-center gap-1">
                      <UserCircle className="w-4 h-4" /> Team
                    </span>
                  </div>
                  <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    Delivery Management System
                  </h2>
                  <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    The Cloud-Based Delivery Management System aims to enhance
                    productivity, identify operational inefficiencies, and
                    foster business growth through streamlined management.
                  </p>
                </article>
              </Link>
            </Card>
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <Link
                href={`https://www.sourcecode.com.mm/ours-weddings-events-planning/`}
                target="_blank"
              >
                <article className="p-4 md:p-8">
                  <div className="flex justify-between gap-2 items-center">
                    <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                      2021
                    </span>
                    <span className="text-zinc-500 text-xs my-2 flex items-center gap-1">
                      <UserCircle className="w-4 h-4" /> Team
                    </span>
                    {/* <span className="text-zinc-500 text-xs  flex items-center gap-1">
						<Eye className="w-4 h-4" />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
					</span> */}
                  </div>
                  <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    Ours Weddings & Events Planning Website Design
                  </h2>
                  <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    Contributed to developing "Ours Event Planning"'s website,
                    emphasizing on UI design, responsiveness, and performance
                    optimization, ensuring exceptional user experiences for
                    weddings, pre-weddings, celebrations, and corporate events.
                  </p>
                </article>
              </Link>
            </Card>
            <Card>
              <Link href={`/projects/m-expense`}>
                <article className="p-4 md:p-8">
                  <div className="flex justify-between gap-2 items-center">
                    <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                      2022
                    </span>
                    <span className="text-zinc-500 text-xs my-2 flex items-center gap-1">
                      <UserCircle className="w-4 h-4" /> Team
                    </span>
                    {/* <span className="text-zinc-500 text-xs  flex items-center gap-1">
						<Eye className="w-4 h-4" />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
					</span> */}
                  </div>
                  <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    M-Expense
                  </h2>
                  <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    An application for effectively managing your expenses
                  </p>
                </article>
              </Link>
            </Card>
            <Card>
              <Link href={`/projects/ewsd`}>
                <article className="p-4 md:p-8">
                  <div className="flex justify-between gap-2 items-center">
                    <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                      2022
                    </span>
                    <span className="text-zinc-500 text-xs my-2 flex items-center gap-1">
                      <UserCircle className="w-4 h-4" /> Team
                    </span>
                    {/* <span className="text-zinc-500 text-xs  flex items-center gap-1">
						<Eye className="w-4 h-4" />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
					</span> */}
                  </div>
                  <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    Enterprise Web Development Project
                  </h2>
                  <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    A dynamic social website for university communities,
                    fostering creativity through idea sharing and collaboration.
                  </p>
                </article>
              </Link>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <Link
                href={`https://www.sourcecode.com.mm/biz-partner-group-co-ltd/`}
                target="_blank"
              >
                <article className="p-4 md:p-8">
                  <div className="flex justify-between gap-2 items-center">
                    <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                      2019
                    </span>
                    <span className="text-zinc-500 text-xs my-2 flex items-center gap-1">
                      <UserCircle className="w-4 h-4" /> Team
                    </span>
                    {/* <span className="text-zinc-500 text-xs  flex items-center gap-1">
						<Eye className="w-4 h-4" />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
					</span> */}
                  </div>
                  <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    Biz-Partner Website Design
                  </h2>
                  <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    Biz-Partner Group, a big player in the medical solutions
                    field, wanted to get their business online and visible to
                    potential clients. We created a sleek website with easy
                    navigation and organized content to help them stand out.
                  </p>
                </article>
              </Link>
            </Card>
            <Card>
              <Link href={`/projects/november-ecommerce`}>
                <article className="p-4 md:p-8">
                  <div className="flex justify-between gap-2 items-center">
                    <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                      2020
                    </span>
                    <span className="text-zinc-500 text-xs my-2 flex items-center gap-1">
                      <UserCircle className="w-4 h-4" /> Personal
                    </span>
                    {/* <span className="text-zinc-500 text-xs  flex items-center gap-1">
						<Eye className="w-4 h-4" />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
					</span> */}
                  </div>
                  <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    November E-commerce System
                  </h2>
                  <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    A place where you can order your drinks and we will deliver
                    right to you
                  </p>
                </article>
              </Link>
            </Card>
            <Card>
              <Link href={`/projects/monastery-management`}>
                <article className="p-4 md:p-8">
                  <div className="flex justify-between gap-2 items-center">
                    <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                      2023
                    </span>
                    <span className="text-zinc-500 text-xs my-2 flex items-center gap-1">
                      <UserCircle className="w-4 h-4" /> Personal (Ongoing)
                    </span>
                    {/* <span className="text-zinc-500 text-xs  flex items-center gap-1">
						<Eye className="w-4 h-4" />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
					</span> */}
                  </div>
                  <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    Monastery Management Application
                  </h2>
                  <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    An application for a buddhist monastery to manage buildings
                    and their donors.
                  </p>
                </article>
              </Link>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <Link
                href={`https://www.sourcecode.com.mm/htawara-an-educreational-app/`}
                target="_blank"
              >
                <article className="p-4 md:p-8">
                  <div className="flex justify-between gap-2 items-center">
                    <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                      2021
                    </span>
                    <span className="text-zinc-500 text-xs my-2 flex items-center gap-1">
                      <UserCircle className="w-4 h-4" /> Team
                    </span>
                    {/* <span className="text-zinc-500 text-xs  flex items-center gap-1">
						<Eye className="w-4 h-4" />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
					</span> */}
                  </div>
                  <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    HtaWaRa Educational Application
                  </h2>
                  <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    I'm excited to have played a part in bringing HtaWaRa to
                    life! It's an app where everyone can freely explore
                    sexuality education. We've filled it with articles,
                    podcasts, and videos to dive into, plus fun learning games.
                    And you can even grab certificates after completing courses
                    and find all the service info you need.
                  </p>
                </article>
              </Link>
            </Card>
            <Card>
              <Link href={`/projects/biscotti`}>
                <article className="p-4 md:p-8">
                  <div className="flex justify-between gap-2 items-center">
                    <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                      2019
                    </span>
                    <span className="text-zinc-500 text-xs my-2 flex items-center gap-1">
                      <UserCircle className="w-4 h-4" /> Personal
                    </span>
                    {/* <span className="text-zinc-500 text-xs  flex items-center gap-1">
						<Eye className="w-4 h-4" />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
					</span> */}
                  </div>
                  <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    Biscotti
                  </h2>
                  <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    A self-management application designed to enhance
                    productivity by limiting the usage of specified apps
                  </p>
                </article>
              </Link>
            </Card>
            <Card>
              <Link href={`/projects/hci-prototype`}>
                <article className="p-4 md:p-8">
                  <div className="flex justify-between gap-2 items-center">
                    <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                      2022
                    </span>
                    <span className="text-zinc-500 text-xs my-2 flex items-center gap-1">
                      <UserCircle className="w-4 h-4" /> Personal
                    </span>
                    {/* <span className="text-zinc-500 text-xs  flex items-center gap-1">
						<Eye className="w-4 h-4" />{" "}
						{Intl.NumberFormat("en-US", { notation: "compact" }).format(views)}
					</span> */}
                  </div>
                  <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    Mobile Prototype for Skiers
                  </h2>
                  <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    A Figma-designed mobile application prototype for skiers,
                    aiding in tracking records and ensuring safety on the
                    slopes.
                  </p>
                </article>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
