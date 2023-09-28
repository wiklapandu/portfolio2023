import Image from "next/image";

export default function DefaulTemplate({children})
{
    return (
    <section>
        <div className="grid min-h-[100vh] grid-cols-12">
            <div className="col-span-3 bg-white">
                <div className="text-center min-h-[90vh]">
                    <div className="image pt-[60px]">
                        <Image src={'/imgs/1.jpg'} width={150} height={150} className="rounded-full border-4 border-light_text mx-auto mb-4" alt="img"/>
                        <h3 className="block text-[30px] font-bold">Wikla Pandu</h3>
                    </div>
                    <ul className="text-[18px] my-8 text-[#55527C] font-normal flex flex-col gap-y-[20px]">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="col-span-9 bg-primary">
                <div className="p-5 md:max-w-[1250px] w-full px-[20px] mx-auto">
                    {children}
                </div>
            </div>
        </div>
    </section>
    );
}