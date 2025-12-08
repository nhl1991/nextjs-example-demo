import Image from "next/image"
export default function Page(){



    return(
        <main className="w-screen min-h-screen relative flex justify-center">
            <figure className="w-screen h-screen fixed -z-10">
                    <Image
                      src="/resource/background/bg-img.JPEG"
                      className="relative object-cover"
                      fill
                      sizes="(max-width: 768px) 50vw, 100vw"
                      alt="background image"
                    />
                  </figure>
            <section className="md:max-w-3xl w-full min-h-screen ">
                <article className="w-full h-max bg-white flex flex-col gap-4 px-2 py-8">
                    {
                        Array.from({length: 4}).map((item, idx) => {
                            return <div key={idx} className={`w-full md:max-w-3xl h-[20rem] rounded-xl shadow-lg`}></div>
                        })
                    }
                </article>
            </section>
        </main>
    )
}