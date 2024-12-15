import React from "react";

function AboutSection() {
    return (
        <section
            className="flex items-stretch gap-4 justify-start lg:px-16 px-8 py-11 max-h-full max-w-[1200px]"
            id="about"
        >
            <div className="flex-col flex items-center  w-auto gap-2">
                <div className="flex flex-col gap-5">
                    <div className="flex gap-1 flex-col py-1 bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 ">
                        <h2 className="h-fit text-left text-4xl font-bold">Who Am I?</h2>
                        <p className="mt-4 text-left text-lg w-full font-semibold text-text_secondary lg:max-w-[80%]">
                            My name is Petar, and I am a 23-year-old full-stack developer.
                            Ever since I got my first PC at the age of 5, I’ve known I wanted
                            to work in the tech world. I was always the <b>"IT guy"</b> in my
                            family and even ran an improvised PC and electronics repair shop
                            with my best friend.
                        </p>
                        <p className="mt-4 text-left text-lg w-full font-semibold text-text_secondary lg:max-w-[80%]">
                            Beyond technology, I’ve explored a variety of hobbies. I was an
                            active member of the{" "}
                            <b>"Amatersko Pozorište Janko Veselinović"</b> theatre group,
                            earning quite a few medals at amateur festivals across the
                            country. I’ve also dabbled in poetry recitation, hosting local
                            festivals, and even danced traditional Serbian folklore during
                            middle school. Oh, and I used to practice swimming too!
                        </p>
                        <p className="mt-4 text-left text-lg w-full font-semibold text-text_secondary lg:max-w-[80%]">
                            These days, I enjoy <b>traveling</b> and immersing myself in new
                            places and cultures. Sipping coffee at cozy cafes or trying out
                            new cuisines is something I’m always up for. A good movie marathon
                            is another favorite activity of mine. <b>Fun fact:</b> I once
                            reserved so many movies on an movie theatre app that my account
                            got flagged! Recently, I’ve started learning{" "}
                            <b>electric guitar and German</b>—let’s see how those two go :)
                        </p>
                        <p className="mt-4 text-left text-lg w-full font-semibold text-text_secondary lg:max-w-[80%]">
                            I’d love to collaborate, share ideas, or just chat about tech and
                            hobbies—feel free to reach out!
                        </p>
                    </div>
                    <h2 className="h-fit text-left text-4xl font-bold">
                        What's My Education?
                    </h2>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
