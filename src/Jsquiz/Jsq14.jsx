import React from "react";
import background from "../picture/moonbg.gif";
import Jslayout from "../Jscomponent/Jslayout";
import Jstittle from "../Jscomponent/Jstittle";
import Jsbutton from "../Jscomponent/Jsbutton";
import { Link } from "react-router-dom";

const Jsq14 = () => {
  return (
    <>
      <div
        className="w-full h-screen flex flex-col items-center justify-center relative"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Jslayout>
          <div className="w-full h-full flex flex-col  items-center justify-center font-mono">
            <Jstittle title={"LEVEL 14"} />

            <div className="w-full text-center   px-10">
              <p className="text-lg text-[#414040]">
                Get your rover’s name. Fill in the blank to return it.
              </p>
              <p className="text-sm text-gray-400 mt-2">
                <strong>Hint:</strong> Remember to return the rover's name as a
                string inside the function.
              </p>
            </div>

            {/* Code Block - Now Centered */}
            <div className="w-full flex justify-center items-center mt-10">
              <div className="bg-[#222] rounded-md text-white text-sm   ">
                <pre className="whitespace-pre-wrap leading-relaxed px-9 py-5">
                  <code>
                    {"function getRoverName() {"}
                    <br />
                    {"  return "}
                    <input
                      type="text"
                      placeholder=""
                      className="rounded-sm outline-none w-[100px] text-black px-1"
                      maxLength={15}
                    />
                    {";"}
                    <br />
                    {"}"}
                    <br />
                    <br />
                    {"let roverName = getRoverName();"}
                    <br />
                    {"console.log(roverName);"}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </Jslayout>
        <Jsbutton />
      </div>
    </>
  );
};

export default Jsq14;
