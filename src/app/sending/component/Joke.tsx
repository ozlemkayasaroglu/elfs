"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import AddJoke from "./ShowOtherJoke";
import ShowOtherJoke from "./ShowOtherJoke";

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

export default function Joke() {
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
    <>
      <div className=" -mx-4 w-full px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 2xl:w-full md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
        <div className=" grid grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
          <div className="mt-16">
            <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
            Joke of the Day
            </p>
            <p className="mt-4 pt-12 text-lg tracking-tight text-blue-900">
              {randomJokeText}
            </p>
          </div>

          <div className=" mt-5 flex rounded-3xl md:w-72 sm:w-72 xs:w-72 bg-white py-10 pr-2 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
            <div className=" flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents relative">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end relative drop-shadow-2xl">
                <a
                  aria-label="back"
                  href=""
                  className="relative block drop-shadow-md sm:w-74 md:w-72 lg:w-72"
                >
                  <div className="relative flex items-center gap-5 overflow-hidden rounded-xl sm:gap-8  rotate-2">
                    <Image
                      width="1200"
                      height="1200"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      data-nimg="1"
                      className="w-44 h-auto sm:w-72 md:w-72 lg:w-72 object-cover"
                      src={
                        randomJokeImage
                          ? randomJokeImage.toString()
                          : "/images/background.jpg"
                      }
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <ShowOtherJoke />
      </div>
    </>
  );
}
