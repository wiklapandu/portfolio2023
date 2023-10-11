import Section from "@/components/section";
import DefaulTemplate from "@/components/templates/defaults";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['greek'] })

export default function About()
{
    return <DefaulTemplate page="about">
        <Section sectionType="white">
            <div className={"grid lg:grid-cols-12 gap-8 mb-[100px] " +  inter.className}>
                <div className="col-span-5 text-dark">
                    <h5>- NICE TO MEET YOU!</h5>
                    <h1 className="text-[40px] font-bold mb-2">Wikla Pandu</h1>
                    <h3 className="text-[20px] text-dark mb-7">Web Developer & Back-end Developer</h3>
                    <a href="#" className="btn btn-primary">Got a project</a>
                </div>
                <div className="col-span-6 grid gap-[2rem]">
                    <p>Hello there! My name is Wikla Pandu. I am a Full-stack Developer & Backend Developer, and I{"'"}m very passionate and dedicated to my work.</p>
                    <p>
                    With {"2+"} years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
                    </p>
                    <table className="table max-xl:hidden">
                        <thead>
                            <tr className="underline uppercase">
                                <td>Base in</td>
                                <td>Mail</td>
                                <td>Phone</td>
                                <td>Language</td>
                            </tr>
                        </thead>
                        <tbody className="font-bold">
                            <tr>
                                <td>Jogja</td>
                                <td>wiklapandu2503@gmail.com</td>
                                <td>08123123</td>
                                <td>
                                    English, Indonesia, Java
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="text-center bg-primary py-[60px]">
                    <span className="block font-bold text-[40px]">10+</span>
                    <p className="text-[18px] font-medium">YEARS OF EXPERIENCES</p>
                </div>
                <div className="text-center bg-dark text-white py-[60px]">
                    <span className="block font-bold text-[40px]">20+</span>
                    <p className="text-[18px] font-medium">PROJECT COMPLETED</p>
                </div>
                <div className="text-center bg-orange-100 py-[60px]">
                    <span className="block font-bold text-[40px]">9+</span>
                    <p className="text-[18px] font-medium">HAPPY CLIENTS</p>
                </div>
            </div>
        </Section>
        <Section sectionType={"blue " + inter.className}>
            <div className="grid grid-cols-12 mb-8">
                <div className="col-span-5 text-dark">
                    <h5>- EXPERIENCE</h5>
                    <h1 className="text-[40px] font-bold mb-2">Everything about me!</h1>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="card min-h-[20vh]">
                    <div className="card-body">
                        <div className="flex font-medium">
                            <span className="text-orange-500">2023 - Now</span>
                            <span className="text-dark_text_secondary ml-auto">- MADEINDONESIA, Jogja</span>
                        </div>
                        <h3 className="font-bold text-dark text-[18px] mb-4">Back end Developer</h3>
                        <p className="text-dark_text_secondary text-[18px] leading-[28px]">
                        A backend developer is a software engineer who specializes in building and maintaining the server-side components of applications and websites. They work on databases, server logic, and APIs to ensure data processing, security, and performance, enabling seamless interaction between users and the application{"'"}s frontend.
                        </p>
                    </div>
                </div>
                <div className="card min-h-[20vh]">
                    <div className="card-body">
                        <div className="flex font-medium">
                            <span className="text-orange-500">2022 - 2023</span>
                            <span className="text-dark_text_secondary ml-auto">- TOOMBOO, Bali</span>
                        </div>
                        <h3 className="font-bold text-dark text-[18px] mb-4">Junior Developer</h3>
                        <p className="text-dark_text_secondary text-[18px] leading-[28px]">
                        A junior developer is an entry-level software developer who is at the beginning of their career. They typically work under the guidance of more experienced developers or team leads, learning and gaining practical experience in coding, debugging, and collaborating on software projects. Junior developers are often involved in tasks such as writing code, testing, and assisting with various aspects of software development while they build their skills and expertise in the field.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    </DefaulTemplate>
}