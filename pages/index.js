import Image from "next/image";
import { Inter } from "next/font/google";
import DefaulTemplate from "@/components/templates/defaults";
import Section from "@/components/section";
import Link from "next/link";

const inter = Inter({ subsets: ["greek"] });

export default function Home() {
  return (
    <DefaulTemplate page={"home"}>
      <Section sectionType="primary">
        <div
          className={
            "flex flex-wrap items-center lg:justify-center " + inter.className
          }
        >
          <div className={"lg:w-1/2"}>
            <div className="title text-[3.5rem] font-bold">
              <h1 className="leading-[3.5rem] text-dark_text">
                Hi, I{"'"}m <span className="text-light_text">Wikla!</span>
                <span className="block">Web Developer</span>
                <span className="block">Based in Jogja</span>
              </h1>
            </div>
            <p className="my-6 text-dark_text_secondary text-[18px] md:max-w-[400px]">
              I{"'"}m a Jogja, Indonesia based web developer & back{"‑"}end
              developer with <span className="text-light_text">2+ years</span>{" "}
              of experience
            </p>
            <div className="button-group flex gap-3 mb-[100px]">
              <Link
                href={"/portfolio"}
                className="btn btn-primary"
              >
                Got a project
              </Link>
              <Link
                href={'/contact'}
                className="btn btn-outline-primary"
              >
                Contact Us
              </Link>
            </div>
            <ul className="text-dark font-medium font-sans text-[18px] leading-[32px]">
              <li>
                <a href="#">+77 022 444 05 05</a>
              </li>
              <li>
                <a href="#">support@elisc.com</a>
              </li>
              <li>
                <a href="#">Ave Street Avenue, New York</a>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 w-2/3 mx-auto mb-8 flex pl-[50px] lg:order-none order-first">
            <Image
              src={"/imgs/2.png"}
              className="w-full mx-auto object-contain"
              width={"800"}
              height={"800"}
              alt="image home"
            />
          </div>
        </div>
      </Section>
    </DefaulTemplate>
  );
}
