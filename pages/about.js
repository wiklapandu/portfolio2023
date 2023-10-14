import Section from "@/components/section";
import DefaulTemplate from "@/components/templates/defaults";
import { Inter } from "next/font/google";
import Link from "next/link";
import moment from "moment";
import { useEffect, useState } from "react";
import { getAbout, getSettings } from '@/data/singleData';

const inter = Inter({ subsets: ['greek'] })

export default function About()
{
    const [setting, setSetting] = useState({})
    const [about, setAbout] = useState({})
    useEffect(() => {
        (async () => {
            const resSettings = await getSettings();
            const settings = resSettings.data.data;
            setSetting(settings.attributes)

            const resAbouts = await getAbout();
            const abouts    = resAbouts.data.data;
            setAbout(abouts.attributes);
        })()
    }, []);

    return <DefaulTemplate page="about" themeColor="white">
        <Section sectionType="white">
            <div className={"grid lg:grid-cols-12 gap-8 mb-[100px] " +  inter.className}>
                <div className="col-span-5 text-dark">
                    <h5>- NICE TO MEET YOU!</h5>
                    <h1 className="text-[40px] font-bold mb-2">Wikla Pandu</h1>
                    <h3 className="text-[20px] text-dark mb-7">Web Developer & Back-end Developer</h3>
                    <Link href={'/contact'} className="btn btn-primary">Got a project</Link>
                </div>
                <div className="col-span-6 grid gap-[2rem]">
                    {about?.description?.toString().split('\n').map((text, key) => {
                        text = text.replace('{yearExperience}', moment().diff(moment('2020'), 'year') + '+ years');
                        return <p key={key}>{text}</p>
                    })}
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
                                <td>{setting?.baseIn}</td>
                                <td>{setting?.email}</td>
                                <td>{setting?.phone}</td>
                                <td>
                                    {setting?.language}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="text-center bg-primary py-[60px]">
                    <span className="block font-bold text-[40px]">{moment().diff(moment('2020'), 'year')}+</span>
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
                {about?.experiences?.map((experience, key) => {
                    const signIn = moment(experience?.signIn).format('YYYY');
                    const resign = experience.resign ? moment(experience?.resign).format('YYYY') : 'Now';
                    return (
                        <div key={key} className="card min-h-[20vh]">
                            <div className="card-body">
                                <div className="flex font-medium">
                                    <span className="text-orange-500">{signIn} - {resign}</span>
                                    <span className="text-dark_text_secondary ml-auto">- {experience?.location}</span>
                                </div>
                                <h3 className="font-bold text-dark text-[18px] mb-4">{experience?.roleTitle}</h3>
                                <p className="text-dark_text_secondary text-[18px] leading-[28px]">
                                {experience?.description}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Section>
    </DefaulTemplate>
}