import Image from "next/image";
import AnimatedCursor from "react-animated-cursor";
import moduleSettings from '@/tailwind.config';
import Link from "next/link";
import Head from "next/head";

export default function DefaulTemplate({children, page = 'home'})
{
    const colorSetting = moduleSettings.theme.extend.colors;

    return (
    <>
    <Head>
        <title>{`${page.toUpperCase()} | Portfolio Wikla`}</title>
    </Head>
    <section>
        <div className="grid min-h-[100vh] grid-cols-12">
            <div className="col-span-3 border-r border-gray-300 bg-white">
                <div className="text-center min-h-[90vh]">
                    <div className="image pt-[60px]">
                        <Image src={'/imgs/1.jpg'} width={150} height={150} className="rounded-full border-4 border-light_text mx-auto mb-4" alt="img"/>
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
            <div className="col-span-9 max-h-[100vh] overflow-auto">
                {children}
            </div>
        </div>
        <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
            backgroundColor: colorSetting.secondary
          }}
          outerStyle={{
            border: '3px solid ' + colorSetting.secondary,
          }}
          showSystemCursor={true}
        />
    </section>
    </>
    );
}