import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Link from "next/link";
import Image from "next/image";

function Experiences() {
  return (
    <div className="py-20 bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex justify-center items-center min-h-screen px-4 mx-auto flex-col gap-20">
        <h1 className=" text-center text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline bg-clip-text ">
          Professional Experiences
        </h1>
        <div id="Source Code" className="text-white w-11/12">
          <Card>
            <span
              className="lg:absolute z-9 lg:left-20 w-px h-5/6 top-20 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
            />

            <span className="lg:absolute mx-auto my-5 z-10 flex items-center justify-center lg:w-20 lg:h-20 w-5/12 p-5 lg:p-1 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
              <Image
                src={"/SourceCodeLogo.png"}
                alt="Source Code Logo"
                width={600}
                height={600}
              />
            </span>

            <div className="z-10 flex flex-col items-center">
              <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                <h2 className="text-4xl md:text-5xl text-center">
                  {" "}
                  Source Code Myanmar Co., Ltd.
                </h2>
                <h3 className="text-center opacity-50 mt-3">
                  {" "}
                  2019 Jul - 2021 Nov
                </h3>
                <br />
              </span>
              <span
                className="lg:ml-12 mt-4 duration-1000 text-zinc-400 group-hover:text-zinc-200"
                // style={{ marginLeft: 3.5 + "em", fontSize: 0.9 + "rem" }}
              >
                <ul className="list-disc z-10 flex flex-col gap-2">
                  <li>
                    Collaborated effectively with backend and testing teams to
                    ensure seamless integration of frontend components.
                  </li>
                  <li>
                    Developed and provided ongoing support for websites
                    utilizing JavaScript/Typescript, ReactJS, and Redux for
                    advanced state management.
                  </li>
                  <li>
                    Implemented optimization techniques to enhance performance,
                    SEO, and responsiveness of web applications.
                  </li>
                  <li>
                    Employed Jest for Test Driven Development (TDD) practices
                    and facilitated communication with NodeJS server via API
                    endpoints.
                  </li>
                  <li>
                    Successfully created and maintained mobile applications
                    using Flutter with Bloc state management, ensuring
                    consistent performance and user experience.
                  </li>
                  <br />
                  Key Achievements:
                  <br /> <br />
                  <li>
                    Developed websites with optimal performance, SEO, and
                    responsiveness, resulting in improved user engagement and
                    retention.
                  </li>
                  <li>
                    Implemented Test Driven Development methodologies using
                    Jest, resulting in robust and reliable codebases.
                  </li>
                  <li>
                    Utilized Redux for state management, ensuring efficient data
                    flow and maintainability of frontend applications.
                  </li>
                  <li>
                    Integrated Firebase for server-less mobile applications,
                    enhancing scalability and reducing infrastructure overhead.
                  </li>
                </ul>
              </span>
            </div>
          </Card>
        </div>
        <div id="CMHL" className="text-white w-11/12">
          <Card>
            <span
              className="lg:absolute z-9 left-20 w-px  md:h-3/6 h-5/6 top-28 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
              aria-hidden="true"
            />

            <span className="lg:absolute z-10 mx-auto my-5 flex items-center justify-center lg:w-20 lg:h-20 w-5/12 p-3 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white  border-zinc-500 bg-white group-hover:border-zinc-200 drop-shadow-orange">
              <Image
                src={"/CMHLLogo.png"}
                alt="CMHL Logo"
                width={600}
                height={600}
              />
            </span>

            <div className="z-10 flex flex-col items-center">
              <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                <h2 className="text-4xl md:text-5xl text-center">
                  {" "}
                  City Mart Holding Co., Ltd.
                </h2>
                <h3 className="text-center opacity-50 mt-3">
                  {" "}
                  2023 Feb - 2023 Jul
                </h3>
                <br />
              </span>
              <span
                // style={{ marginLeft: 3.5 + "em", fontSize: 0.9 + "rem" }}
                className="lg:ml-12 mt-4 duration-1000 text-zinc-400 group-hover:text-zinc-200"
              >
                <ul className="list-disc z-10 flex flex-col gap-2">
                  <li>
                    Collaborated, employing Scrum methodology, with
                    cross-functional teams including Backend, Mobile, DevOps,
                    and QA testers to architect and develop the Ferry Management
                    System for the company.
                  </li>
                  <li>
                    Took ownership of managing the frontend server independently
                    and designed APIs tailored for the mobile team's
                    requirements.
                  </li>
                  <li>
                    Utilized ASP dotnet MVC framework to communicate with
                    backend server and serve static UI components.
                  </li>
                  <li>
                    Leveraged a diverse range of technologies including C#.NET,
                    JavaScript, Flutter, EF Core, Azure, Github, and adhered to
                    Scrum practices to ensure efficient project management and
                    delivery.
                  </li>
                </ul>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
