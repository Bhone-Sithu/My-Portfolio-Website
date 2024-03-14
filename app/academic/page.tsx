import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Link from "next/link";
import Image from "next/image";

function Academic() {
  return (
    <div className="py-20 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex justify-center items-center min-h-screen px-4 mx-auto flex-col gap-20">
        <h1 className=" text-center text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline bg-clip-text ">
          Academic Background
        </h1>

        <h1 className="relative w-full text-center text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline bg-clip-text ">
          <span
            className="lg:absolute left-0 z-9 top-4 w-5/12 h-px  bg-gradient-to-l from-zinc-500 via-zinc-500/50 to-transparent"
            aria-hidden="true"
          />
          <p className="w-fit mx-auto z-10">Degrees</p>

          <span
            className="lg:absolute right-0 z-9 top-4 w-5/12 h-px  bg-gradient-to-r from-zinc-500 via-zinc-500/50 to-transparent"
            aria-hidden="true"
          />
        </h1>
        <div id="UOG" className="text-white w-11/12">
          <Card>
            <span
              className="lg:absolute z-9 lg:left-20 w-px h-5/6 top-20 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
            />

            <span className="lg:absolute mx-auto my-5 z-10 flex items-center justify-center lg:w-20 lg:h-20 w-5/12 p-5 lg:p-1 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
              <Image
                src={"/logos/UOGlogo.png"}
                alt="UOG Logo"
                width={600}
                height={600}
              />
            </span>

            <div className="z-10 flex flex-col items-center">
              <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                <h2 className="text-4xl md:text-5xl text-center">
                  {" "}
                  Bachelor of Science in Computing
                </h2>
                <h3 className="text-center opacity-70 mt-3">
                  {" "}
                  University Of Greenwich ( UK )
                </h3>
                <h3 className="text-xl text-center opacity-50 mt-3">
                  {" "}
                  Grade : First Class Honours ( GPA 3.9 )
                </h3>
                <h3 className="text-xl text-center opacity-50 mt-3">
                  {" "}
                  Graduation : 2023
                </h3>
                <br />
              </span>
              <span
                className="lg:ml-12 mt-4 duration-1000 text-zinc-400 group-hover:text-zinc-200"
                // style={{ marginLeft: 3.5 + "em", fontSize: 0.9 + "rem" }}
              >
                <ul className="list-disc z-10 flex flex-col gap-2">
                  <li>
                    Implemented a full-stack final year project (Freelance
                    website similar to Indeed or Upwork) independently,
                    utilizing React for frontend development, ExpressJS (NodeJS)
                    for backend development, and MongoDB for database
                    management.
                  </li>
                  <li>
                    Collaborated within a team to develop an enterprise website,
                    employing HTML, CSS, PHP, and MySQL technologies.
                  </li>
                  <li>
                    Contributed to the development of a mobile application in a
                    team environment, utilizing Flutter for hybrid development
                    and Java for native development.
                  </li>
                  <li>
                    Designed and prototyped a mobile application interface using
                    Figma as part of the Human-Computer Interface (UX) subject.
                  </li>
                </ul>
              </span>
            </div>
          </Card>
        </div>
        <div id="UIT" className="text-white w-11/12">
          <Card>
            <span
              className="lg:absolute z-9 lg:left-20 w-px h-5/6 top-20 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
            />

            <span className="lg:absolute mx-auto my-5 z-10 flex items-center justify-center lg:w-20 lg:h-20 w-5/12 p-5 lg:p-1 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-gray-600 group-hover:border-zinc-200 drop-shadow-orange">
              <Image
                src={"/logos/UITlogo.png"}
                alt="UIT Logo"
                width={600}
                height={600}
              />
            </span>

            <div className="z-10 flex flex-col items-center">
              <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                <h2 className="text-4xl md:text-5xl text-center">
                  {" "}
                  Bachelor of Computer Science
                </h2>
                <h3 className="text-center opacity-70 mt-3">
                  {" "}
                  University Of Information Technology ( Yangon )
                </h3>
                <h3 className="text-xl text-red-700 text-center opacity-50 mt-3">
                  {" "}
                  Grade : Second Year Dropped-out due to country situations
                </h3>
                {/* <h3 className="text-xl text-center opacity-50 mt-3">
                  {" "}
                  Graduation : 2023
                </h3> */}
                <br />
              </span>
              <span
                className="lg:ml-12 mt-4 duration-1000 text-zinc-400 group-hover:text-zinc-200"
                // style={{ marginLeft: 3.5 + "em", fontSize: 0.9 + "rem" }}
              >
                <ul className="list-disc z-10 flex flex-col gap-2">
                  <li>
                    Led a team in the development of a desktop software
                    application using C++ and Qt for GUI development, ensuring
                    smooth execution and high-quality deliverables.
                  </li>
                  <li>
                    Spearheaded a team project to develop a static website using
                    HTML, CSS, and JavaScript, effectively leveraging the latest
                    web technologies to create an engaging user experience.
                  </li>
                  <li>
                    Contributed to the development of an Internet of Things
                    (IoT) product in a team project focused on electronic
                    circuit design, utilizing Arduino and C programming language
                    to bring innovative ideas to life.
                  </li>
                  <li>
                    Acquired proficiency in data structures and algorithms,
                    accompanied by practical implementation in code to enhance
                    problem-solving skills and software development expertise.
                  </li>
                  <li>
                    Expanded knowledge in software structural and behavioral
                    diagramming techniques, including Entity-Relationship
                    Diagrams (ERD), Unified Modeling Language (UML), and Class
                    diagrams, fostering a deeper understanding of software
                    architecture and design principles.
                  </li>
                  <li>
                    Gained a foundational understanding of business functions
                    analysis, enriching skills in identifying and analyzing
                    business requirements to drive effective software solutions.
                  </li>
                </ul>
              </span>
            </div>
          </Card>
        </div>
        <h1 className="relative w-full text-center text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline bg-clip-text ">
          <span
            className="lg:absolute left-0 z-9 top-4 w-5/12 h-px  bg-gradient-to-l from-zinc-500 via-zinc-500/50 to-transparent"
            aria-hidden="true"
          />
          <p className="w-fit mx-auto z-10">Certificates</p>

          <span
            className="lg:absolute right-0 z-9 top-4 w-5/12 h-px  bg-gradient-to-r from-zinc-500 via-zinc-500/50 to-transparent"
            aria-hidden="true"
          />
        </h1>
        <div className="container flexmin-h-screen px-4 mx-auto">
          <div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 lg:grid-cols-3 lg:gap-16">
            <Card>
              <span
                className="absolute left-1/2 top-24 w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                aria-hidden="true"
              />
              <span className="p-1 mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                <Image
                  src={"/logos/NCClogo.png"}
                  alt="NCC Logo"
                  width={300}
                  height={300}
                />
              </span>{" "}
              <div className="z-10 flex flex-col items-center">
                <span className="relative text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  NCC L4 Diploma in Computing
                </span>
                <br />
                <span className="opacity-70 relative text-center lg:text-xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Year : 2018
                </span>
                <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3">
                    <li>Software Development Life Cycle</li>
                    <li>Networking basic</li>
                    <li>Database basic</li>
                    <li>Object Oriented Programming C#</li>
                    <li>Static Website Development</li>
                  </ul>
                </span>
              </div>
            </Card>
            <Card>
              <span
                className="absolute left-1/2 top-24 w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                aria-hidden="true"
              />
              <span className="p-1 mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                <Image
                  src={"/logos/NCClogo.png"}
                  alt="NCC Logo"
                  width={300}
                  height={300}
                />
              </span>{" "}
              <div className="z-10 flex flex-col items-center">
                <span className="relative text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  NCC L5 Diploma in Computing
                </span>
                <br />
                <span className="opacity-70 relative text-center lg:text-xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  Year : 2019
                </span>
                <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3">
                    <li>Agile Principles</li>
                    <li>Network Security and Cryptography</li>
                    <li>Computer Software project with C#</li>
                    <li>Fullstack PHP/Laravel project</li>
                    <li>Database advanced</li>
                    <li>Professional IT principles</li>
                  </ul>
                </span>
              </div>
            </Card>
            <Card>
              <span
                className="absolute left-1/2 top-24 w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                aria-hidden="true"
              />
              <span className="p-1 mx-auto mb-4 relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
                <Image
                  src={"/logos/TTClogo.png"}
                  alt="TTC Logo"
                  width={100}
                  height={100}
                />
              </span>{" "}
              <div className="z-10 flex flex-col items-center">
                <span className="relative text-center lg:text-2xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                  High School
                  <br />
                  <span className="opacity-70 relative text-center lg:text-xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                    Year : 2017
                  </span>
                </span>
                <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  <ul className="flex flex-col  gap-3">
                    <li>
                      Achieved top 10% ranking among all test takers nationwide.
                    </li>
                  </ul>
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academic;
