"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import Joke from "./Joke";

type Joke = {
  image: String;
  text: String;
  xLink: String;
  _id: String;
};

async function getAJoke(): Promise<Joke | null> {
  try {
    const res = await axios.get("/api/joke");
    const jokes: Joke[] = res.data.data;

    if (!jokes || jokes.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * jokes.length);

    return jokes[randomIndex];
  } catch (error) {
    console.error("Joke fetching error:", error);
    return null;
  }
}

export default function Sidebar() {
  const [randomJokeText, setRandomJokeText] = useState<String | null>(null);
  const [randomJokeImage, setRandomJokeImage] = useState<String | null>(null);

  useEffect(() => {
    getAJoke()
      .then((data: Joke | null) => {
        if (data) {
          setRandomJokeText(data.text);
          setRandomJokeImage(data.image);
        } else {
          setRandomJokeText("No joke avaible.");
          setRandomJokeImage(null);
        }
      })
      .catch((error) => {
        console.error("Jokes fetching error:", error);
      });
  }, []);

  return (
    <header className="bg-slate-50 lg:fixed lg:flex ">
      <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-10 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
        <span className="font-mono text-sky-900 hover:text-sky-700">
          Fikir analığı:
        </span>
        <a
          href="http://twitter.com/mommy4_0"
          className="mt-6 flex gap-6 font-bold text-sky-900 hover:text-sky-700"
        >
          Mommy4_0
        </a>
      </div>
      {/* Elf bio */}
      <div className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:px-8 lg:py-12 xl:px-12">
        <a
          className="mx-auto block w-48 overflow-hidden sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
          aria-label="Homepage"
          href="/"
        >
          <div className="flex justify-center items-center">
            <Image
              className="w-1/4 "
              src="/images/elf.png"
              alt=""
              width="100"
              height="100"
            />
          </div>
          <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl"></div>
        </a>
        <div className="mt-6 text-center lg:mt-12 lg:text-left">
          <p className="text-xl font-bold text-slate-900 ">
            <a href="/">Ben Elf!</a>
          </p>
          <p className="mt-3 text-lg font-medium leading-8 text-slate-700">
            Conversations with the most tragically misunderstood people of our
            time.
          </p>
        </div>
        <section className="mt-6 hidden lg:block">
          <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
            <svg aria-hidden="true" viewBox="0 0 10 10" className="h-2.5 w-2.5">
              <path
                d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                className="fill-violet-300"
              ></path>
              <path
                d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                className="fill-pink-300"
              ></path>
            </svg>
            <span className="ml-2.5">Hakkında</span>
          </h2>
          <p className="mt-2 text-base leading-7 text-slate-700 lg:line-clamp-4">
            In this show, Eric and Wes dig deep to get to the facts with guests
            who have been labeled villains by a society quick to judge, without
            actually getting the full story. Tune in every Thursday to get to
            the truth with another misunderstood outcast as they share the
            missing context in their tragic tale.
          </p>
        </section>

{/* fotolar */}
<div className="-my-10 mt-8 flex justify-center overflow-hidden py-4 sm:gap-8">
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
            <Image
              alt=""
              loading="lazy"
              width="3744"
              height="5616"
              decoding="async"
              data-nimg="1"
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(min-width: 640px) 18rem, 11rem"
              src="/images/elf-photo-1.png"
            />
          </div>
         
          <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
            <Image
              alt=""
              loading="lazy"
              width="3744"
              height="5616"
              decoding="async"
              data-nimg="1"
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(min-width: 640px) 18rem, 11rem"
              src="/images/elf-photo-3.png"
            />
          </div>
        </div>

        <section className="mt-10 lg:mt-12">
          <h2 className="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only">
            <svg aria-hidden="true" viewBox="0 0 10 10" className="h-2.5 w-2.5">
              <path
                d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                className="fill-indigo-300"
              ></path>
              <path
                d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                className="fill-blue-300"
              ></path>
            </svg>
            <span className="ml-2.5">Elf'i Takip Et!</span>
          </h2>
          <div className="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden hover:text-slate-300"></div>
          <ul
            role="list"
            className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
          >
            <li className="flex ">
              <a
                className="group flex items-center mr-3"
                aria-label="Twitter"
                href="https://twitter.com/elf_ozen"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 fill-slate-400 group-hover:fill-slate-800"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>

              <a
                className="group flex items-center mr-3"
                aria-label="Instagram"
                href="https://www.instagram.com/elfozzn/"
              >
                <svg
                  className="h-8 w-8 fill-slate-400 group-hover:fill-slate-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            </li>
          </ul>
        </section>

      </div>

      {/* Şaka bölümü */}
<Joke />
    </header>
  );
}
