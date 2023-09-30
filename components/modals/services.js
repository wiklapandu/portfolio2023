import Image from "next/image";

export default function Services({showModal, service, onClose}) {
    // console.log(service.thumbnail.data.attributes.url)
    const thumbnail = service?.thumbnail.data.attributes;
  return (
    <>
      {(showModal && thumbnail) ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-[50vw]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {service.Title}
                  </h3>
                  <button
                    className="p-1 ml-auto btn btn-primary border-0 float-right leading-none font-semibold outline-none focus:outline-none"
                    onClick={onClose}
                  >
                    <span className="block outline-none focus:outline-none">
                      close
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                    <Image src={process.env.url + thumbnail.url} className="w-2/3 mx-auto mb-8" width={400} height={500} alt="image"/>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed max-w-4xl mx-auto max-h-[25vh] overflow-auto">
                    {service.Description}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}