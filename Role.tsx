import React from "react";
import LabelInput from "./EditProfile/LabelInput";
import Button from "../Button/Button";
import SaveCancel from "./SaveCancel";

const Role = () => {
   return (
      <>
         <div className="flex flex-col items-center pt-6 sm:pt-8  w-full px-4 sm:px-36 ">
            <h2 className="text-center text-xl sm:text-3xl font-serif mb-3 sm:mb-12 ">
               ROLE
            </h2>

            <div className="flex flex-col gap-2  w-full">
               <label> Role</label>
               <select className="p-1.5 sm:p-3 text-xs sm:text-base rounded-md w-full">
                  <option>Doctor</option>
                  <option>Trainer</option>
                  <option>Nutritionist</option>
               </select>
               <LabelInput
                  placeholder={"Enter your specification"}
                  type={"text"}
                  label={"Specifications"}
               />
            </div>
            <div className="flex flex-col sm:flex sm:flex-row sm:gap-2">
               <LabelInput
                  placeholder={""}
                  type={"file"}
                  label={"Add your Certificate"}
               />
               <LabelInput
                  placeholder={""}
                  type={"file"}
                  label={"Add your Experience"}
               />
            </div>

            <SaveCancel />
         </div>
      </>
   );
};

export default Role;
