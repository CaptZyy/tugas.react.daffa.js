import React from "react";

const TextImageSideBySide = () => {
  return (
    <>
      <div className="flex items-center min-h-screen md:px-40 bg-[url('./CarBg.gif')] bg-contain">
        <div className="flex-1 mr-5 bg-hippieBlue-100 p-20 max-w-[75%] rounded-lg">
          <h2 className="text-2xl font-bold text-aliceBlue-100 ">
            Hello! My Name is Daffa
          </h2>
          <p className="mt-2 text-aliceBlue-100">
            I'm a 16 years old. I Love design work such as Fashinon Design, Graphic Design .
            <p>Contact me to get the beautiful design for you to use!</p>
          </p>

          <div className="fixed flex mt-2 gap-4 justify-between">
             <a href="" className='hover:bg-gulfStream-100 p-1  bg-aliceBlue-100 rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover: scale-110'>Contact</a>
            <a href="" className='hover:bg-gulfStream-100 p-1 bg-aliceBlue-100 rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover: scale-110'>Social Media</a>
          </div>
        </div>
  
        <div className="flex-shrink-0 rounded-lg ">
          <img className="w-auto h-auto " src="Cat.gif" alt="Description"/>
        </div>
      </div>

      
    </>
  );
};

export default TextImageSideBySide;
