import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import MyObfuscate from '../components/MyObfucate';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import '../styles/global.css'

// export const metadata = {
//     title: {
//         default: "Vincent CHAN",
//         template: '%s | Vincent CHAN',
//     },

// };

export const generateMetadata = (props) => {
    return {
        title: {
            template: "%s | Vincent CHAN",
            default: "Vincent CHAN",
        },
        description: "Vincent CHAN's personal website.",
        openGraph: {
            title: "Vincent CHAN'",
            description: "Vincent CHAN's personal website.",
            siteName: "Vincent CHAN",
            images: [
                {
                    url: "/avatar.jpg",
                    width: 1200,
                    height: 628,
                },
            ],
            type: "website",
        },
        icons: {
            icon: "/favicon.ico",
        }
    };
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-VHDNEZ3ZVV"
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VHDNEZ3ZVV');`,
                    }}
                />
            </head>
            <body>
                <div className="h-screen flex flex-col ">
                    {/*  */}
                    <main className="mb-auto">
                        <div className="container mx-auto sm:grid grid-cols-1 sm:grid-cols-3 sm:mt-28 mt-10 gap-x-5 max-w-5xl mb-2">
                            <div className="side-panel sm:text-right text-center pb-5 mb-5 sm:mb-0 border-b sm:border-b-0 sm:pr-8 sm:border-r sm:pl-4 border-gray-200">
                                <Image
                                    src="/avatar.jpg"
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
                                </div>
                                <div className="hidden sm:flex justify-center sm:justify-end mt-5">
                                    <MyObfuscate email="hkvincentchan@gmail.com" />
                                    <a href="https://github.com/hkvincent" aria-label="GitHub">
                                        <FontAwesomeIcon icon={faGithub} className="text-2xl w-6 mr-3" />
                                    </a>
                                </div>
                            </div>
                            <div className="content-panel col-span-2 sm:mx-4 mx-5">
                                {children}
                            </div>
                        </div>
                    </main>

                    <footer className="text-center pb-3 mt-5">
                        <div className="sm:hidden flex justify-center sm:justify-end mt-5">
                            <MyObfuscate email="vincent.chan@gmail.com" />
                            <a href="https://github.com/hkvincent" aria-label="GitHub">
                                <FontAwesomeIcon icon={faGithub} className="text-2xl w-6 mr-3" />
                            </a>
                        </div>
                        <p className="text-sm text-gray-500">2023 - Vincent Chan</p>
                    </footer>
                </div>
            </body>
        </html>
    );
}