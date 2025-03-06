import React from "react";
import Input from "../../Inputbox/Input";

const LabelInput = ({ placeholder, type, label }) => {
   return (
      <div className="w-full ">
         <label> {label}</label>
         <Input placeholder={placeholder} type={type} />
      </div>
   );
};

export default LabelInput;
