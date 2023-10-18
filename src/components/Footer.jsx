import React, { useEffect, useState } from "react";

const Footer = () => {
  const [mainBox, setMinBox] = useState([]);
  const minBoxs = [
    {
      id: 1,
      num: "01",
      img: "image-retro-pcs.jpg",
      title: "Reviving Retro PCs",
      des: "What happens when old PCs are given modern upgrades?",
    },
    {
      id: 2,
      num: "02",
      img: "image-top-laptops.jpg",
      title: "Top 10 Laptops of 2022",
      des: "Our best picks for various needs and budgets.",
    },
    {
      id: 3,
      num: "04",
      img: "image-gaming-growth.jpg",
      title: "The Growth of Gaming",
      des: "How the pandemic has sparked fresh opportunities.",
    },
  ];

  useEffect(() => {
    setMinBox(minBoxs);
  }, []);
  return (
    <div className="container">
      <div className="flex lg:flex-row flex-col lg:gap-[10px] gap-[20px] py-5">
        {mainBox.map((BoxMain) => (
          <div key={BoxMain.id} className="flex gap-[10px] items-center">
            <img src={`./images/${BoxMain.img}`} alt={BoxMain.img} className="w-[120px] h-[120px] object-contain" />
            <div>
              <span className=" text-[25px] opacity-[50%] font-bold text-text-nav">{BoxMain.num}</span>
              <h1 className="text-black text-[15px] font-bold py-2">{BoxMain.title}</h1>
              <p className="text-[13px] text-text-nav">{BoxMain.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
