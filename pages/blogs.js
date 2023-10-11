import Section from "@/components/section";
import DefaulTemplate from "@/components/templates/defaults";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { getBlogs } from "@/data/blogs";
import PortfolioModal from "@/components/modals/portfolio";
import Card from "@/components/card";

const inter = Inter({ subsets: ["greek"] });
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [meta, setMeta] = useState({});
  const [modal, setModal] = useState(false);
  const [gallery, setGallery] = useState({});

  useEffect(() => {
    (async () => {
      const response = await getBlogs();
      const data = response.data;

      setBlogs(data.data);
      setMeta(data.meta);
    })();
  }, []);

  return (
    <>
      <DefaulTemplate page="blogs" themeColor="white">
        <Section sectionType={"white " + inter}>
          <div className="flex items-center mb-4">
            <div>
              <h5 className="text-dark_text_secondary font-medium text-[18px]">
                - BLOGS
              </h5>
              <h1 className="text-[40px] text-dark font-bold">My Blogs</h1>
            </div>
            <span className="ml-auto lg:block hidden font-bold underline">
              wiklapandu2503@gmail.com
            </span>
          </div>
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {blogs &&
              blogs.map((data, key) => {
                const blog = data.attributes;
                const thumbnail = blog.thumbnail.data.attributes;
                return (
                  <Card
                    key={key}
                    title={blog.title}
                    withIcon={false}
                    desc={blog.short_description?.split(' ').slice(0, 20).join(' ') + '...'}
                    onClick={() => {
                      location.href = blog.url;
                    }}
                    imgSrc={process.env.url + thumbnail.url}
                    buttonText="Show More"
                  />
                );
              })}
          </div>
        </Section>
      </DefaulTemplate>
      {modal && (
        <PortfolioModal gallery={gallery} onClose={() => setModal(false)} />
      )}
    </>
  );
}
