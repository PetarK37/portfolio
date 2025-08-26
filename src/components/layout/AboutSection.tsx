import { useRef } from "react";
import { useIsVisible } from "../../hooks/UseIsVisible";
import { useTheme } from "../../context/ThemeContext";

function AboutSection() {
    const topRef = useRef<HTMLDivElement | null>(null);
    const isTopVisible = useIsVisible(topRef);
    const bottomRef = useRef<HTMLDivElement | null>(null);
    const isBottomVisible = useIsVisible(bottomRef);
    const { theme } = useTheme();

    return (
        <section
            className="flex items-stretch gap-4 justify-start lg:px-16 px-8 py-11 max-h-full max-w-[1200px]"
            id="about"
        >
            <div className="flex-col flex items-center  w-auto gap-2">
                <div className="flex flex-col gap-5">
                    <div
                        className={`flex gap-1 flex-col py-1 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0  transition-opacity ease-in duration-300 ${isTopVisible ? "opacity-100" : "opacity-0"
                            }`}
                        ref={topRef}
                    >
                        <h2 className="h-fit text-left text-4xl font-bold">Who Am I?</h2>
                        <p className="mt-4 text-left text-lg w-full font-semibold text-text_secondary lg:max-w-[80%]">
                            My name is Petar, and I am a {new Date().getFullYear() - 2001}-year old full-stack developer.
                            Ever since I got my first PC at the age of 5, I’ve known I wanted
                            to work in the tech world. I was always the <strong>"IT guy"</strong> in my
                            family and even ran an improvised PC and electronics repair shop
                            with my best friend.
                        </p>
                        <p className="mt-4 text-left text-lg w-full font-semibold text-text_secondary lg:max-w-[80%]">
                            Beyond technology, I’ve explored a variety of hobbies. I was an
                            active member of the{" "}
                            <strong>"Amatersko Pozorište Janko Veselinović"</strong> theatre group,
                            earning quite a few medals at amateur festivals across the
                            country. I’ve also dabbled in poetry recitation, hosting local
                            festivals, and even danced traditional Serbian folklore during
                            middle school. Oh, and I used to practice swimming too!
                        </p>
                        <p className="mt-4 text-left text-lg w-full font-semibold text-text_secondary lg:max-w-[80%]">
                            These days, I enjoy <strong>traveling</strong> and immersing myself in new
                            places and cultures. Sipping coffee at cozy cafes or trying out
                            new cuisines is something I’m always up for. A good movie marathon
                            is another favorite activity of mine. <strong>Fun fact:</strong> I once
                            reserved so many movies on an movie theatre app that my account
                            got flagged! Recently, I’ve started learning{" "}
                            <strong>electric guitar and German</strong> so let’s see how those two go :)
                        </p>
                        <p className="mt-4 text-left text-lg w-full font-semibold text-text_secondary lg:max-w-[80%]">
                            I’d love to collaborate, share ideas, or just chat about tech and
                            hobbies feel free to reach out!
                        </p>
                    </div>
                    <div
                        className={`flex py-10 gap-1 flex-col py-1transition-opacity ease-in duration-300 ${isBottomVisible ? "opacity-100" : "opacity-0"
                            }`}
                        ref={bottomRef}
                    >
                        <h2 className="h-fit text-4xl font-bold text-center">
                            What's My Education?
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-start align-middle py-6 text-xl">
                            <a
                                className={`sm:w-[30%] hover:bg-primary ${theme === 'dark' ? 'bg-white' : 'bg-black'} ${theme === 'dark' ? '' : 'hover:text-white'}  rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-5 flex flex-col gap-4 justify-center align-middle`}
                                href="https://nikolatesla.edu.rs/"
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-10 mx-auto mb-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                                    />
                                </svg>
                                <div className="flex flex-col justify-between gap-3">
                                    <h3 className="h-fit text-center text-lg font-bold">
                                        Elementary School "Nikola Tesla Dublje"
                                    </h3>
                                    <p className="h-fit font-normal text-base text-center">
                                        Finished with a "Vuk Karadžić" diploma
                                    </p>
                                    <p className="h-fit text-center text-lg font-bold mt-auto">
                                        2008 - 2016
                                    </p>
                                </div>
                            </a>
                            <div className={`sm:w-[10%] w-1 sm:h-1 h-[50px] ${theme === 'dark' ? 'bg-gray-300' : 'bg-black'} sm:my-auto sm:mx-2 mx-auto my-2 bg-opacity-40`} />
                            <a
                                className={`sm:w-[30%] hover:bg-primary ${theme === 'dark' ? 'bg-white' : 'bg-black'}  ${theme === 'dark' ? '' : 'hover:text-white'} rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-5 flex flex-col gap-4 justify-center align-middle`}
                                href="https://www.tehskolasabac.edu.rs/index.php/obrazovniprofilimain/86-obrazovniprofili/elektrotehnika/elprocesngupr/77-elekprocupr"
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-10 mx-auto mb-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                                    />
                                </svg>
                                <div className="flex flex-col justify-between gap-3">
                                    <h3 className="h-fit text-center text-lg font-bold">
                                        "Tehnička Škola K. Abrašević Šabac" High School
                                    </h3>
                                    <p className="h-fit font-normal text-base text-center">
                                        Studied to be Electrical Technician for Process Control
                                    </p>
                                    <p className="h-fit text-center text-lg font-bold mt-auto">
                                        2016 - 2020
                                    </p>
                                </div>
                            </a>
                            <div className={`sm:w-[10%] w-1 sm:h-1 h-[50px] ${theme === 'dark' ? 'bg-gray-300' : 'bg-black'} sm:my-auto sm:mx-2 mx-auto my-2 bg-opacity-40`} />
                            <a
                                className={`sm:w-[30%] hover:bg-primary ${theme === 'dark' ? 'bg-white' : 'bg-black'} ${theme === 'dark' ? '' : 'hover:text-white'} rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 p-5 flex flex-col gap-4 justify-center align-middle`}
                                href="https://ftn.uns.ac.rs/akreditacija-2020/SI0/2/1"
                                target="_blank"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-10 mx-auto mb-3"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                                    />
                                </svg>
                                <div className="flex flex-col justify-between gap-3">
                                    <h3 className="h-fit text-center text-lg font-bold">
                                        Faculty Of Technical Sciences Novi Sad
                                    </h3>
                                    <p className="h-fit font-normal text-base text-center">
                                        Got Professional Bachelor Of Software Degree with grade{" "}
                                        <strong>9.64</strong>
                                    </p>
                                    <p className="h-fit text-center text-lg font-bold mt-auto">
                                        2020 - 2023
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
