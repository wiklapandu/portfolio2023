import Section from "@/components/section";
import ServiceModal from '@/components/modals/services';
import DefaulTemplate from "@/components/templates/defaults";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import {getArticles} from '@/data/articles';
import Link from "next/link";

const inter = Inter({ subsets: ["greek"] });
export default function Services()
{
    const [services, setServices] = useState([]);
    const [meta, setMeta]         = useState({});
    const [modal, setModal]       = useState(false);
    const [theService, setService]   = useState({});

    useEffect(() => {

        (async () => {
            const response = await getArticles();
            const data     = response.data;
            
            setServices(data.data);
            setMeta(data.meta);
        })();

    }, []);

    return <>
    <DefaulTemplate page="services" themeColor="white">
        <Section sectionType={"white " + inter}>
            <div className="flex items-center mb-4">
                <div>
                    <h5 className="text-dark_text_secondary font-medium text-[18px]">- SERVICES</h5>
                    <h1 className="text-[40px] text-dark font-bold">My Services</h1>
                </div>
                <span className="ml-auto lg:block hidden font-bold underline">wiklapandu2503@gmail.com</span>
            </div>
            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
                {services && services.map((service, index) => {
                    const attribute = service.attributes;
                    return (
                        <div className="card-2 min-h-[20vh]" key={index}>
                            <div className="card-body">
                                <h5 className="text-[24px] text-dark_text_secondary">{++index}</h5>
                                <h3 className="text-[24px] font-bold text-dark mb-3">{attribute.Title}</h3>
                                <p className="mb-3">{attribute.Description?.split(' ').splice(0, 15).join(' ')}...</p>
                                <Link href={"#"} onClick={() => {
                                    setModal(!modal)
                                    setService(service);
                                    }} className="flex text-xl items-center font-medium text-dark">
                                    Read More
                                    <span className="ml-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    </DefaulTemplate>
    <ServiceModal showModal={modal} service={theService?.attributes} onClose={() => {
            setModal(false);
        }} />
    </>
}