"use client";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from "next/image";

export default function About() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto py-20">
        <div
          id="self-intro"
          className="flex flex-col md:flex-row gap-24 justify-center items-center"
        >
          <span className="p-2 pr-14 mb-4 w-fit relative flex items-center justify-center text-sm duration-1000 border rounded-3xl text-zinc-200 group-hover:text-white  border-zinc-500 bg-transparent group-hover:border-zinc-200 drop-shadow-orange">
            <Image
              className="left-52"
              src={"/BSTtransparent.png"}
              alt="BST photo"
              width={400}
              height={250}
            />
          </span>
          <div className="w-10/12 md:w-8/12 text-white text-opacity-80">
            <p className="text-2xl  leading-relaxed">
              A dedicated software engineer with a focus on continuous learning
              since 2018. Committed to completing tasks assigned to me, I
              maintain emotional control and professionalism, essential for
              effective teamwork. An open-minded individual eager to acquire new
              skills, I am currently seeking full-time or remote job
              opportunities while residing in Bangkok.
            </p>
          </div>
        </div>
        <h1 className=" text-center my-20 text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline bg-clip-text ">
          Skills
        </h1>
        <section id="programming-languages" className="w-full my-5">
          <h1 className="relative mb-20 w-full text-center text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline bg-clip-text ">
            <span
              className="lg:absolute left-0 z-9 top-4 w-4/12 h-px  bg-gradient-to-l from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
            />
            <p className="w-fit mx-auto  ">Programming Languages</p>

            <span
              className="lg:absolute right-0 z-9 top-4 w-4/12 h-px  bg-gradient-to-r from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
            />
          </h1>
          <div className="container flexmin-h-screen px-4 mx-auto">
            <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mx-auto sm:mt-0  lg:gap-16">
              <div>
                <span className=" mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    className="rounded-full"
                    src={"/logos/JavascriptLogo.jpg"}
                    alt="JS Logo"
                    width={350}
                    height={350}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Javascript
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/CLogo.png"}
                    alt="C# Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  C#
                </p>
              </div>
              <div>
                <span className=" mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    className="rounded-full"
                    src={"/logos/PhpLogo.jpg"}
                    alt="Php Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  PHP
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/DartLogo.png"}
                    alt="Dart Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Dart
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="libraries-fameworks" className="w-full my-5">
          <h1 className="relative mb-20 w-full text-center text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline bg-clip-text ">
            <span
              className="lg:absolute left-0 z-9 top-4 w-4/12 h-px  bg-gradient-to-l from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
            />
            <p className="w-fit mx-auto  ">Libraries & Frameworks</p>

            <span
              className="lg:absolute right-0 z-9 top-4 w-4/12 h-px  bg-gradient-to-r from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
            />
          </h1>
          <div className="container flexmin-h-screen px-4 mx-auto">
            <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 gap-8 m-0 lg:grid-cols-4 lg:gap-16">
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    className="rounded-full"
                    src={"/logos/ReactLogo.png"}
                    alt="React Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  ReactJS
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/NextLogo.png"}
                    alt="Next Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  NextJS
                </p>
              </div>
              <div>
                <span className="p-3 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/JestLogo.png"}
                    alt="Jest Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Jest
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    className="rounded-full"
                    src={"/logos/ReduxLogo.png"}
                    alt="Redux Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  ReduxJS
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/TypeScriptLogo.jpg"}
                    alt="TypeScript Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Typescript
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/NodeJSLogo.png"}
                    alt="NodeJS Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  NodeJS
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/ASPdotnetLogo.png"}
                    alt="ASP Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  ASP dotnet
                </p>
              </div>
              <div>
                <span className="p-3 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/LaravelLogo.png"}
                    alt="Laravel Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Laravel
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    className="rounded-full"
                    src={"/logos/FlutterLogo.png"}
                    alt="Flutter Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Flutter
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/BlocLogo.png"}
                    alt="BlocLogo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Bloc
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    className="rounded-full"
                    src={"/logos/FirebaseLogo.png"}
                    alt="Firebase Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Firebase
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Github color="black" size={50} />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  GitHub
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="principles" className="w-full my-5">
          <h1 className="relative mb-20 w-full text-center text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline bg-clip-text ">
            <span
              className="lg:absolute left-0 z-9 top-4 w-5/12 h-px  bg-gradient-to-l from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
            />
            <p className="w-fit mx-auto  ">Principles</p>

            <span
              className="lg:absolute right-0 z-9 top-4 w-5/12 h-px  bg-gradient-to-r from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
            />
          </h1>
          <div className="container flexmin-h-screen px-4 mx-auto">
            <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 gap-8 m-0 lg:grid-cols-4 lg:gap-16">
              <div>
                <span className=" mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    className="rounded-full"
                    src={"/logos/CleanCodeLogo.png"}
                    alt="CleanCode Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Clean Code
                </p>
              </div>
              <div>
                <span className=" mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/SOLIDLogo.png"}
                    alt="SOLID Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  SOLID
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    className="rounded-full"
                    src={"/logos/3LayerLogo.png"}
                    alt="3Layer Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  3 Layered Architecture
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/TDDLogo.webp"}
                    alt="TDD Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Test Driven Development
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    className="rounded-full"
                    src={"/logos/UIUXLogo.png"}
                    alt="UIUX Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  UI/UX
                </p>
              </div>
              <div>
                <span className=" mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    className="rounded-full"
                    src={"/logos/ResponsiveLogo.png"}
                    alt="Responsive Logo"
                    width={400}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Responsive Design
                </p>
              </div>
              <div>
                <span className=" mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/SEOLogo.png"}
                    alt="SEO Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  SEO
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    className="rounded-full"
                    src={"/logos/AgileLogo.webp"}
                    alt="Agile Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Agile
                </p>
              </div>
              <div>
                <span className="p-2 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/ScrumLogo.png"}
                    alt="Scrum Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Scrum
                </p>
              </div>
              <div>
                <span className=" mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/RestLogo.webp"}
                    alt="Rest Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Rest API
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="soft-skills" className="w-full my-5">
          <h1 className="relative mb-20 w-full text-center text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline bg-clip-text ">
            <span
              className="lg:absolute left-0 z-9 top-4 w-5/12 h-px  bg-gradient-to-l from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
            />
            <p className="w-fit mx-auto  ">Soft Skills</p>

            <span
              className="lg:absolute right-0 z-9 top-4 w-5/12 h-px  bg-gradient-to-r from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
            />
          </h1>
          <div className="container flexmin-h-screen px-4 mx-auto">
            <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 gap-8 m-0 lg:grid-cols-4 lg:gap-16">
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    className="rounded-full"
                    src={"/logos/CommunicateLogo.jpg"}
                    alt="Communicate Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Communication
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    className="rounded-full"
                    src={"/logos/CollaborateLogo.png"}
                    alt="Collaborate Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Collaboration
                </p>
              </div>
              <div>
                <span className=" mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    className="rounded-full"
                    src={"/logos/CriticalLogo.png"}
                    alt="Critical Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Critical Thinking
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    className="rounded-full"
                    src={"/logos/ProblemLogo.png"}
                    alt="Problem Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Problem Solving
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    className="rounded-full"
                    src={"/logos/EQLogo.png"}
                    alt="EQ Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Emotional Intelligence
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    className="rounded-full"
                    src={"/logos/DocumentationLogo.jpg"}
                    alt="Documentation Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Documentation
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="languages" className="w-full my-5">
          <h1 className="relative mb-20 w-full text-center text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline bg-clip-text ">
            <span
              className="lg:absolute left-0 z-9 top-4 w-5/12 h-px  bg-gradient-to-l from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
            />
            <p className="w-fit mx-auto  ">Languages</p>

            <span
              className="lg:absolute right-0 z-9 top-4 w-5/12 h-px  bg-gradient-to-r from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
            />
          </h1>
          <div className="container flexmin-h-screen px-4 mx-auto">
            <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 gap-8 m-0 lg:grid-cols-4 lg:gap-16">
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/MyanmarLogo.png"}
                    alt="Myanmar Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Myanmar ( Native )
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    src={"/logos/EnglishLogo.png"}
                    alt="English Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  English ( Fluent - IELTS Band 7 )
                </p>
              </div>
              <div>
                <span className="p-1 mx-auto mb-4 relative  flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                  <Image
                    className="rounded-full"
                    src={"/logos/ThaiLogo.png"}
                    alt="Thai Logo"
                    width={300}
                    height={300}
                  />
                </span>{" "}
                <p className="relative mx-auto text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Thai ( Actively Learning )
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
