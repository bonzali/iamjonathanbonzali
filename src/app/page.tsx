"use client";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export default function Home() {
  const [showDescription, setShowDescription] = useState(false);
  const [showContact, setShowContact] = useState(false);
  return (
    <main className="min-h-screen px-10 md:px-24  py-24">
      <div className="mx-auto max-w-5xl relative">
        <div className="before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]" />
        <div className="w-full flex flex-col md:flex-row fle gap-10">
          <div className={"w-52 h-52 rounded-full flex-shrink-0 "}>
            <div
              className="image w-52 h-52 "
              style={{
                backgroundImage: "url('./me.jpg')",
                backgroundPosition: "0% 10%",
                filter: "brightness(80%)",
              }}
            />
          </div>
          <div className={"md:hidden"}>
            <div className="font-black  text-2xl flex-1">
              I Am Jonathan Bonzali
            </div>
            <p className={"text-sm text-opacity-60"}>
              Software Engineering at{" "}
              <a
                className={"underline text-blue-700 "}
                href={"https://www.carlito-app.com/about"}
              >
                Carlito
              </a>
            </p>
            <div className="font-medium pt-10 text-xl flex-1">
              Highly driven software engineer with experience in designing and
              developing small and large scale applications. My expertise spans
              a range of technology domains, encompassing mobile, API, and web
              development. My adeptness lies in crafting scalable solutions,
              with a steadfast commitment to enhancing user experiences and
              ensuring future scalability.
              <p className={"mt-5 text-sm text-opacity-60"}>
                Currently, I am not available for new projects but do have some
                openings for consulting. Feel free to book a call with me, and I
                can show you how to maximize the potential of your web
                application!
              </p>
            </div>
            <div className="font-medium pt-10 text-sky-900 text-sm flex-1">
              business@iamjonathanbonzali.com
            </div>
          </div>

          <div className={"flex-1 w-full hidden md:block"}>
            <div className="font-black  text-2xl flex-1">
              <TypeAnimation
                sequence={[
                  " I Am Jonathan Bonzali",
                  200,
                  () => {
                    setShowDescription(true);
                  },
                ]}
                wrapper="span"
                cursor={false}
                repeat={Infinity}
              />
            </div>
            <div className="font-medium pt-10 text-xl flex-1">
              {showDescription && (
                <TypeAnimation
                  sequence={[
                    `Highly driven software engineer with experience in designing and developing small and large scale applications. My expertise spans a range of technology domains, encompassing mobile, API, and web development. My adeptness lies in crafting scalable solutions, with a steadfast commitment to enhancing user experiences and ensuring future scalability.
`,
                    1000,
                    () => {
                      setShowContact(true);
                    },
                  ]}
                  wrapper="span"
                  cursor={false}
                  repeat={Infinity}
                />
              )}
            </div>
            <div className="font-medium text-sky-900 pt-10 text-xl flex-1">
              {showContact && (
                <TypeAnimation
                  sequence={["business@iamjonathanbonzali.com", 1000]}
                  wrapper="span"
                  cursor={false}
                  repeat={Infinity}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
