import Section from "@/components/section";
import DefaulTemplate from "@/components/templates/defaults";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import {getPortfolios} from '@/data/portfolio';
import Link from "next/link";
import Card from "@/components/card";
import PortfolioModal from "@/components/modals/portfolio";

const inter = Inter({ subsets: ["greek"] });
export default function Portfolio()
{
    const [portfolios, setPortfolios] = useState([]);
    const [meta, setMeta]         = useState({});
    const [modal, setModal]       = useState(false);
    const [gallery, setGallery]   = useState({});

    useEffect(() => {

        (async () => {
            const response = await getPortfolios();
            const data     = response.data;

            setPortfolios(data.data);
            setMeta(data.meta);
        })();
        
    }, []);

    return <>
    <DefaulTemplate page="portfolio" themeColor="white">
        <Section sectionType={"white " + inter}>
            <div className="flex items-center mb-4">
                <div>
                    <h5 className="text-dark_text_secondary font-medium text-[18px]">- PORTFOLIO</h5>
                    <h1 className="text-[40px] text-dark font-bold">My Portfolio</h1>
                </div>
                <span className="ml-auto lg:block hidden font-bold underline">wiklapandu2503@gmail.com</span>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
                {portfolios && portfolios.map((data, key) => {
                    const portfolio = data.attributes;
                    const thumbnail = portfolio.thumbnail.data.attributes;
                    const gallery = portfolio.gallery;
                    return <Card title={portfolio.title} key={key} onClick={() => {
                        setModal(true);
                        setGallery(gallery.data);
                    }} imgSrc={process.env.url + thumbnail.url} desc={portfolio.description} />
                })}
            </div>
        </Section>
    </DefaulTemplate>
    {modal && <PortfolioModal gallery={gallery} onClose={() => setModal(false)}/>}
    </>
}