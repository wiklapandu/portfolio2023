import Image from "next/image";

export default function PortfolioModal({ onClose, gallery = [] }) {
  return (
    <div className="absolute animate-galleryOpacity z-50 bg-black max-h-screen bg-opacity-50 w-screen top-0 overflow-x-hidden">
      <div className="w-4/5 mx-auto bg-white my-3 rounded-md">
        <div className="mt-5 flex w-3/4 mx-auto font-bold text-[32px] items-center mb-5 pt-8">
          <h1>Gallery</h1>
          <span className="ml-auto">
            <a
              href="#"
              onClick={onClose}
              className="flex items-center text-xl px-4 py-2 rounded-md border border-dark btn-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
              </a>
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-8 place-content-start place-items-center min-h-[90vh]">
          {gallery &&
            gallery?.map((data, key) => {
              const img_src = data.attributes.url;
              return (
                <div key={key} className="col-auto">
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src={process.env.url + img_src}
                    alt=""
                    width={400}
                    height={400}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
