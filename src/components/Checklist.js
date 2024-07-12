import Todo from "@/app/Todo/page";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const ChecklistContext = React.createContext();

export default function Checklist (props) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div>
      <ChecklistContext.Provider value={{ open, toggle }}>
        {props.children}
      </ChecklistContext.Provider>
    </div>
  );
};


function Toggle() {
  const { open, toggle } = React.useContext(ChecklistContext);

  return (
    <div onClick={() => toggle(!open)}>
      {open ? (
        <FaCheck
          color="green"
          size={18}
          className="ml-4 hover:cursor-pointer"
        />
      ) : (
        <MdClose
          color="orange"
          size={20}
          className="ml-4 hover:cursor-pointer"
        />
      )}
    </div>
  );
}

function ChangeStatus() {
  const { open } = React.useContext(ChecklistContext);

  return open && <p>Status: Done</p>;
}

Checklist.Toggle = Toggle;
Checklist.ChangeStatus = ChangeStatus;



