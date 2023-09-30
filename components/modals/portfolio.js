import Image from "next/image";

export default function PortfolioModal({ onClose, gallery = [] }) {
  return (
    <div className="absolute animate-galleryOpacity z-50 bg-black max-h-[100vh] bg-opacity-50 w-[100vw] top-0 overflow-x-hidden">
      <div className="container mx-auto bg-white my-3 rounded-md">
        <div className="mt-5 flex w-3/4 mx-auto font-bold text-[32px] items-center mb-5 pt-8">
          <h1>Gallery</h1>
          <span className="ml-auto">
            <a
              href="#"
              onClick={onClose}
              className="flex items-center text-xl px-4 py-2 rounded-md border border-dark font-medium btn-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrows-angle-contract inline-block"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707zM15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707z"
                />
              </svg>
              <span className="ml-2">close</span>
            </a>
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-8 place-content-start place-items-center min-h-[90vh]">
          {gallery &&
            gallery?.map((data, key) => {
              const img_src = data.attributes.url;
              return (
                <div key={key}>
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
