import React, { useEffect, useState } from "react";
import Box from "./Box";

const Hero = () => {
  const [text, setText] = useState([]);
  const boxs = [
    {
      id: 1,
      title: "Hydrogen VS Electric Cars",
      description: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      id: 2,
      title: "The Downsides of AI Artistry",
      description:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      id: 3,
      title: "Is VC Funding Drying Up?",
      description:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  useEffect(() => {
    setText(boxs);
  }, []);
  return (
    <>
      <section>
        <div className="container">
          <div className="flex lg:flex-row flex-col gap-[30px] py-5">
            <div>
              <img src="./images/image-web-3-desktop.jpg" alt="image" />
              <div className="flex lg:flex-row flex-col w-full mt-5 gap-[50px]">
                <h1 className="lg:w-[50%] w-[60%] font-bold leading-[55px] text-bg-mean text-[50px]">
                  The Bright Future of Web 3.0?
                </h1>
                <div className="lg:w-[50%] w-full">
                  <p className=" text-text-nav">
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                  </p>
                  <button className="mt-8 uppercase bg-bg-mean text-white text-[15px] border-none outline-none py-3 px-5 tracking-[6px] font-medium hover:bg-text-hover transition-colors duration-500">
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className=" w-full bg-bg-mean text-white p-5">
              <h1 className="text-[35px] text-text-orange font-bold">New</h1>
              <div className="mt-5">
                {text.map((box) => (
                  <Box key={box.id} box={box} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
