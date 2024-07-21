import React from 'react';
import { useInView } from 'react-intersection-observer';

const Serve = () => {
    const { ref: cardRef1, inView: cardInView1 } = useInView({ triggerOnce: true });
    const { ref: cardRef2, inView: cardInView2 } = useInView({ triggerOnce: true });
    const { ref: cardRef3, inView: cardInView3 } = useInView({ triggerOnce: true });
    const { ref: cardRef4, inView: cardInView4 } = useInView({ triggerOnce: true });
    const { ref: cardRef5, inView: cardInView5 } = useInView({ triggerOnce: true });

    return (
        <div className='w-full h-full'>
            <div className="Left relative bg-hero-transparent h-full md:flex md:items-center md:justify-center mt-[8vh] z-10">
                <div className="twf-container px-4 text-center md:text-start md:mx-4 lg:mx-32">
                    <h1
                        data-w-id="e04cfbbc-c687-cf90-d90b-4e76b4810bd1"
                        className="text-white text-4xl font-bold mb-6 text-center sm:text-6xl lg:text-6xl md:mt-[-40vh] lg:mt-[-20vh] leading-snug"
                    >
                        What&nbsp;we&nbsp;Do
                        <br />
                    </h1>
                    <p
                        data-w-id="0bb43f52-8070-3db7-bdc7-a1cf88bc3ce8"
                        className="paragraph-4 text-white text-lg font-semibold mb-8 tracking-tighter text-center md:text-start"
                    >
                        360° Degree Talent Development  
                    </p>
                    <button className='text-lg sm:text-xl border rounded-full px-6 py-2 hover:text-black hover:bg-white transition duration-300'>Learn More</button>
                </div>
                {/* right side  */}
                <div className="Right md:overflow-y-auto md:no-scrollbar lg:overflow-y-auto lg:no-scrollbar flex flex-col items-center lg:pt-10 lg:pr-4 md:h-[calc(100vh-8vh)] lg:h-[calc(100vh-8vh)]">
                    <div
                        ref={cardRef1}
                        className={`wwd-right-card bg-black rounded-lg shadow-lg transition-opacity duration-500 ${
                            cardInView1 ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div className="wwd-right-card-icons sm:flex">
                            <img src="./src/assets/rock.svg" loading="lazy" alt="" className="image-3 w-32 sm:w-80 md:w-[60vh] lg:w-[44vh] lg:ml-36 lg:mt-[-6vh] mx-auto sm:mx-4 sm:mt-[-4vh] md:mt-[-8vh]"/>
                            <div className="wwd-right-card-desc">
                                <h1 className="heading-6 text-2xl sm:text-3xl font-bold m-4 mx-32 sm:mx-4">Marketing</h1>
                                <p className="paragraph-6 lg:mr-32 text-center sm:text-start mx-4 sm:mx-4 text-zinc-400">
                                    We pick the best platforms to generate the highest ROI. This includes using Tiktok, Instagram, Twitter, and Reddit to strategically convert to your OnlyFans. We have the network and strategies to grow our clients and reach their target audience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        ref={cardRef2}
                        className={`wwd-right-card bg-black p-4 rounded-lg shadow-lg transition-opacity duration-500 ${
                            cardInView2 ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div className="wwd-right-card-icons sm:flex">
                            <img src="./src/assets/peops.svg" loading="lazy" alt="" className="image-3 w-32 sm:w-80 md:w-[60vh] lg:w-[45vh] lg:ml-36 lg:mt-[-12vh] mx-auto sm:mx-4 sm:mt-[-10vh] md:mt-[-16vh]"/>
                            <div className="wwd-right-card-desc">
                                <h1 className="heading-6 text-2xl sm:text-3xl font-bold m-4 mx-16 sm:mx-4">Custom Acquisition</h1>
                                <p className="paragraph-6 lg:mr-32 text-center sm:text-start sm:mx-4 text-zinc-400">
                                We develop individual relationships with your fans to convert them into paying customers. We handle all incoming messages and are experts at converting your fans into spenders using tested scripts and upsell techniques that we've developed throughout the years.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        ref={cardRef3}
                        className={`wwd-right-card bg-black p-4 rounded-lg shadow-lg transition-opacity duration-500 ${
                            cardInView3 ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div className="wwd-right-card-icons sm:flex">
                            <img src="./src/assets/tcards.svg" loading="lazy" alt="" className="image-3 w-32 sm:w-80 md:w-[70vh] lg:w-[45vh] lg:ml-36 lg:mt-[-12vh] mx-auto sm:mx-4 sm:mt-[-10vh] md:mt-[-16vh]"/>
                            <div className="wwd-right-card-desc">
                                <h1 className="heading-6 text-2xl sm:text-3xl font-bold m-4 mx-12 sm:mx-4 lg:mx-8">Content Management</h1>
                                <p className="paragraph-6 lg:mr-32 text-center sm:text-start sm:mx-4 text-zinc-400 lg:mx-8">
                                All you need to do is provide us with your content, and we'll handle the rest! To maximize revenue, we have an entire team of copywriters, content managers, and writers who are responsible for posting, upselling in messages, and daily fan interaction. Our objective is to significantly enhance our clients' reach, impressions, and revenue.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        ref={cardRef4}
                        className={`wwd-right-card bg-black p-4 rounded-lg shadow-lg transition-opacity duration-500 ${
                            cardInView4 ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div className="wwd-right-card-icons sm:flex">
                            <img src="./src/assets/share.svg" loading="lazy" alt="" className="image-3 w-32 sm:w-32 md:w-[28vh] lg:w-[23vh] lg:ml-36 lg:mt-[-2vh] mx-auto sm:mx-4 sm:mt-[1vh] md:mt-[-2vh]"/>
                            <div className="wwd-right-card-desc">
                                <h1 className="heading-6 text-2xl sm:text-3xl font-bold m-4 mx-24 sm:mx-4">Social Media Management</h1>
                                <p className="paragraph-6 lg:mr-32 text-center sm:text-start sm:mx-4 text-zinc-400">
                                In order to maximize our clients' earning and growth potential, we advise and, in some cases, manage their social media for them.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        ref={cardRef5}
                        className={`wwd-right-card bg-black p-4 rounded-lg shadow-lg transition-opacity duration-500 ${
                            cardInView5 ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div className="wwd-right-card-icons sm:flex">
                            <img src="./src/assets/protect.jpg" loading="lazy" alt="" className="image-3 w-36 sm:w-20 sm:h-28 sm:mx-2 md:w-[13vh] lg:w-20 lg:h-28 lg:ml-36 lg:mx-4 sm:mt-[2vh] lg:mt-4 md:h-28 md:mt-[2vh] mx-auto"/>
                            <div className="wwd-right-card-desc">
                                <h1 className="heading-6 text-2xl sm:text-3xl font-bold m-4 mx-20 sm:mx-6 md:">Leak Protection</h1>
                                <p className="paragraph-6 lg:mr-32 text-center sm:text-start sm:mx-6 text-zinc-400">
                                Our software crawls the internet 24/7 for brand copyright infringements. We submit DMCA takedown notices to social media platforms, hosting sites, tube sites, search engines, and ISPs that are hosting your stolen content to make sure your content is always protected.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Serve;
