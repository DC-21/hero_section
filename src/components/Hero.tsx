import React from "react";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex bg-slate-900 py-4 px-4">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-center text-[30px] md:text-[55px] text-gray-100 font-bold">
          Hello, lets build this project together
        </p>
        <p className="text-gray-300 w-full md:max-w-lg max-w-sm text-center text-lg p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          sapiente temporibus ab vitae modi error praesentium dicta nobis
          dolorem dignissimos. Modi non ea deserunt ducimus labore neque qui
          ratione expedita.
        </p>
        <div className="w-full justify-center items-center gap-6 flex mt-4">
          <button className="p-3 bg-slate-100 rounded hover:bg-slate-300 text-xl">
            Donate
          </button>
          <button className="p-3 bg-orange-400 rounded text-white hover:bg-orange-500 text-xl">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
