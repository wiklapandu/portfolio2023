import Image from "next/image";
import AnimatedCursor from "react-animated-cursor";
import moduleSettings from '@/tailwind.config';
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import Drawer from "../drawer";
import { ToastContainer, toast } from "react-toastify";

export default function DefaulTemplate({children, page = 'home', themeColor = 'primary'})
{
    const colorSetting = moduleSettings.theme.extend.colors;
    const [navbarModal, setModal] = useState(true);
    const [isOpen, onClose] = useState(false);

    return (
    <>
    <Head>
        <title>{`${page.toUpperCase()} | Portfolio Wikla`}</title>
    </Head>
    <section className="relative">
        <Drawer className={"text-center"} isOpen={isOpen} onClose={onClose}>
            <div className="image text-center">
                <Image src={'/imgs/1.jpg'} width={150} height={150} className="rounded-full border-4 border-light_text mx-auto mb-4" alt="img"/>
                <h3 className="block text-[30px] font-bold">Wikla Pandu</h3>
            </div>
            <ul className="navs-link">
                <li className={(page == 'home') ? "active" : ''}>
                    <Link href={"/"}>Home</Link>
                </li>
                <li className={(page == 'about') ? 'active' : ''}><Link href="/about">About</Link></li>
                <li className={(page == 'services') ? 'active' : ''}><Link href="/services">Services</Link></li>
                <li className={(page == 'portfolio') ? 'active' : ''}><Link href="/portfolio">Portfolio</Link></li>
                <li className={(page == 'blogs') ? 'active' : ''}><Link href="/blogs">Blogs</Link></li>
                <li className={(page == 'contact') ? 'active' : ''}><Link href="/contact">Contact</Link></li>
            </ul>
        </Drawer>
        <div className="grid grid-cols-12" onClick={() => setModal(false)}>
            <div className="md:col-span-3 md:block hidden border-r border-gray-300 bg-white">
                <div className="text-center min-h-screen">
                    <div className="image pt-[60px]">
                        <Image src={'/imgs/profile.png'} width={150} height={150} className="rounded-full border-4 border-light_text mx-auto mb-4" alt="img"/>
                        <h3 className="block text-[30px] font-bold">Wikla Pandu</h3>
                    </div>
                    <ul className="navs-link">
                        <li className={(page == 'home') ? "active" : ''}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className={(page == 'about') ? 'active' : ''}><Link href="/about">About</Link></li>
                        <li className={(page == 'services') ? 'active' : ''}><Link href="/services">Services</Link></li>
                        <li className={(page == 'portfolio') ? 'active' : ''}><Link href="/portfolio">Portfolio</Link></li>
                        <li className={(page == 'blogs') ? 'active' : ''}><Link href="/blogs">Blogs</Link></li>
                        <li className={(page == 'contact') ? 'active' : ''}><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="md:col-span-9 col-span-full overflow-auto max-h-screen">
                <div className={`md:hidden sticky z-40 bg-${themeColor} shadow-xl text-dark_text w-full top-0 min-h-[10vh] items-center flex`}>
                    <div className="flex p-4 w-full items-center">
                        <h1 className="text-2xl font-medium">Wikla Pandu</h1>
                        <button className="ml-auto btn" onClick={() => onClose(!isOpen)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={28}
                                height={28}
                                fill="currentColor"
                                className="bi bi-list"
                                viewBox="0 0 16 16">
                                <path
                                    fillRule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                {children}
            </div>
        </div>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
        <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
            backgroundColor: colorSetting.light_text
          }}
          outerStyle={{
            border: '3px solid ' + colorSetting.light_text,
          }}
          showSystemCursor={true}
        />
    </section>
    </>
    );
}