import React from "react";
import Chatlayout from "./Chatlayout";
import Chatpage from "./Chatpage";
import Doctorlist from "./Doctorlist";
import style from "./Chat.module.css";

function Chatmain() {
  return (
    <>
      <div className="bg-white px-6 md:px-20 md:h-screen">
        <div>
          <h3 className="text-4xl md:text-5xl text-center pt-16">
            CHAT WITH OUR EXPERTS
          </h3>
          <p className="text-xl md:text-2xl text-center pt-5 font-sans">
            Connect with our experts to get professional advice on health,
            nutrition, and fitness.
            <br />
            Ask questions, share your concerns, and receive personalized
            guidance to achieve your wellness goals.
          </p>
          <br />
        </div>
        <div className="grid grid-cols gap-6 md:grid-cols-3 md:gap-8">
          <div
            className="flex flex-col justify-center p-6 md:p-8 border-4 border-black bg-cover bg-center opacity-75 hover:scale-105 transition-transform duration-500"
            style={{
              backgroundImage:
                "url('assets/istockphoto-1396653978-612x612.jpg')",
              height: "300px",
              width: "100%",
            }}
          >
            <h4 className="text-3xl md:text-4xl text-center text-blue-700 md:py-7 py-4">
              NUTRITIONIST
            </h4>
            <p className="text-lg md:text-xl text-center font-serif font-medium text-black md:px-4 px-8">
              Receive personalized dietary recommendations from expert
              nutritionists.
            </p>
          </div>

          <div
            className="flex flex-col justify-center p-8 md:p-6 border-4 border-black bg-cover bg-center opacity-75 hover:scale-105 transition-transform duration-500"
            style={{
              backgroundImage:
                "url('assets/abdominal-male-blue-hoodie-holds-burning-barbell-with-smoke-grey-background_613910-15332.avif')",
              height: "300px",
              width: "100%",
            }}
          >
            <h4 className="text-3xl md:text-4xl text-center font-bebas text-blue-700 md:py-4 py-7">
              GYM EXPERT
            </h4>
            <p className="text-lg md:text-xl text-center font-serif font-medium text-black md:px-4 px-8">
              Get fitness tips and workout guidance from certified gym experts.
            </p>
          </div>

          <div
            className="flex flex-col justify-center p-6 md:p-8 border-4 border-black bg-cover bg-center opacity-75 hover:scale-105 transition-transform duration-500"
            style={{
              backgroundImage:
                "url('assets/portrait-hansome-young-male-doctor-man_171337-5068.avif')",
              height: "300px",
              width: "100%",
            }}
          >
            <h4 className="text-3xl md:text-4xl text-center font-bebas text-blue-700 md:py-4 py-7">
              DOCTOR
            </h4>
            <p className="text-lg md:text-xl text-center font-serif font-medium text-black md:px-4 px-8">
              Get reliable medical advice from qualified doctors.
            </p>
          </div>
        </div>
      </div>

      {/* <Chatlayout />
      <Chatpage />
      <Doctorlist /> */}
    </>
  );
}

export default Chatmain;
