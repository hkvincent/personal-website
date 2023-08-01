import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Obfuscate from "react-obfuscate";

import styles from "./layout.module.css";

export const name = "Vincent Chan";
export const siteTitle = "Vincent Chan";

export default function Layout({ children, description, titleSuffix }) {
  var email = "";

  return (
    <div className="h-screen flex flex-col ">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        {/* <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&sm=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta
          property="og:title"
          content={titleSuffix ? `${siteTitle} | ${titleSuffix}` : siteTitle}
          key="title"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="website" />
        <title>
          {titleSuffix ? `${siteTitle} | ${titleSuffix}` : siteTitle}
        </title>
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7N5W44X0L3"
        ></script> */}
        <script
        //   dangerouslySetInnerHTML={{
        //     __html: `
        //     window.dataLayer = window.dataLayer || [];
        //     function gtag(){dataLayer.push(arguments);}
        //     gtag('js', new Date());
        //     gtag('config', 'G-*****');
        // `,
        //   }}
        />
      </Head>
      <main className="mb-auto">
        <div className="container mx-auto sm:grid grid-cols-1 sm:grid-cols-3 sm:mt-28 mt-10 gap-x-5 max-w-5xl mb-2">
          <div className="side-panel sm:text-right text-center pb-5 mb-5 sm:mb-0 border-b sm:border-b-0 sm:pr-8 sm:border-r sm:pl-4 border-gray-200">
            <Image
              src="/avatar.jpg"
              alt={name}
              width="100"
              height="100"
              className="rounded-full ml-auto"
              quality="100"
            />
            <h1 className="text-3xl pt-3 font-extrabold">
              <Link href="/">
                Vincent Chan
              </Link>
            </h1>
            <p className="text-gray-600 pt-3">Software Developer</p>
            <p className="text-gray-600">Hong Kong</p>
            <div className="inline-flex sm:block mt-2 sm:mt-0">
              <p className="sm:mt-5 mx-2 sm:mx-0 hover:underline text-xl">
                <Link href="/">
                  About
                </Link>
              </p>
              <p className="sm:mt-3 mx-4 sm:mx-0 hover:underline text-xl">
                <Link href="/resume">
                  Resume
                </Link>
              </p>
              {/* <p className="sm:mt-3 mx-2 sm:mx-0 hover:underline text-xl">
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </p> */}
            </div>
            <div className="hidden sm:flex justify-center sm:justify-end mt-5">
              <Obfuscate email="hkvincentchan@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="w-6 mr-3" />
              </Obfuscate>
              <a href="https://github.com/hkvincent" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} className="w-6 mr-3" />
              </a>
              {/* <a
                href="https://www.linkedin.com/in/vincenthk/"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-6 text-blue-600"
                />
              </a> */}
            </div>
          </div>
          <div className="content-panel col-span-2 sm:mx-4 mx-5">
            {children}
          </div>
        </div>
      </main>

      <footer className="text-center pb-3 mt-5">
        <div className="sm:hidden flex justify-center sm:justify-end mt-5">
          <Obfuscate email="vincent.chan@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="w-6 mr-3" />
          </Obfuscate>
          <a href="https://github.com/hkvincent" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} className="w-6 mr-3" />
          </a>
          {/* <a
            href="https://www.linkedin.com/in/vincenthk/"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-6 text-blue-600" />
          </a> */}
        </div>
        <p className="text-sm text-gray-500">2023 - Vincent Chan</p>
      </footer>
    </div>
  );
}
