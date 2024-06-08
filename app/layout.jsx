import Image from 'next/image';
import Link from 'next/link';
import React from "react";
import MyObfuscate from '../components/my-obfucate';
import * as brandIcons from "@fortawesome/free-brands-svg-icons";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import '../styles/global.css'
import { getPersonalData, getPersonalDataWithPage } from "../utils/directus";
import Script from 'next/script';
import PageLink from '../components/path-link';


export const generateMetadata = async (props) => {
    const personal = await getPersonalData();
    return {
        title: {
            template: `%s | ${personal[0].name}`,
            default: `${personal[0].name}`,
        },
        description: "Vincent CHAN's personal website.",
        openGraph: {
            title: `${personal[0].name}`,
            description: "Vincent CHAN's personal website.",
            siteName: `${personal[0].name}`,
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

export default async function RootLayout({ children, params }) {
    const iconCollections = {
        brandIcons: brandIcons,
        solidIcons: solidIcons,
    };
    const personal = await getPersonalDataWithPage();
    return (
        <html lang="en">
            <head>
                <Script defer data-domain="vincentchan.info" src="https://analyst.zeabur.app/js/script.js"></Script>
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-VHDNEZ3ZVV"
                ></Script>
                <Script
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
                    <main className="mb-auto">
                        {/* <div className="container mx-auto sm:grid grid-cols-1 sm:grid-cols-3 sm:mt-28 mt-10 gap-x-5 mb-2 max-w-5xl"> */}
                        <div className="container mx-auto grid-cols-1 sm:grid sm:grid-cols-3 sm:mt-12 mt-6 gap-x-5 mb-2">
                            <div className="side-panel sm:text-right text-center pb-5 mb-5 sm:mb-0 border-b sm:border-b-0 sm:pr-8 sm:border-r sm:pl-4 border-gray-200">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${personal[0].avatar}`}
                                    width="100"
                                    height="100"
                                    className="rounded-full ml-auto"
                                    quality="100"
                                />
                                <h1 className="text-3xl pt-3 font-extrabold">
                                    <Link href="/">
                                        {personal[0].name}
                                    </Link>
                                </h1>
                                <p className="text-gray-600 pt-3">{personal[0].position}</p>
                                <p className="text-gray-600">{personal[0].location}</p>
                                <div className="inline-flex sm:block mt-2 sm:mt-6">
                                    <PageLink pagePaths={personal[0].pages} />
                                </div>
                                <div className="hidden sm:flex justify-center sm:justify-end mt-5">
                                    {
                                        personal[0].icons.map((icon) => (
                                            <MyObfuscate key={icon.link} link={icon.link} icon={iconCollections[icon.iconfrom][icon.icon]} isEmail={icon.isEmail} />
                                        ))
                                    }
                                    {/* <MyObfuscate email="hkvincentchan@gmail.com" />
                                    <a href="https://github.com/hkvincent" aria-label="GitHub">
                                        <FontAwesomeIcon icon={icons.faGithub} className="text-2xl w-6 mr-3" />
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
                            {
                                personal[0].icons.map((icon) => (
                                    <MyObfuscate key={icon.link} link={icon.link} icon={iconCollections[icon.iconfrom][icon.icon]} isEmail={icon.isEmail} />
                                ))
                            }
                        </div>
                        <p className="text-sm text-gray-500">{personal[0].footer}</p>
                    </footer>
                </div>
            </body>
        </html>
    );
}