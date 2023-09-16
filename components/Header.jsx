"use client";

import React, { useState } from "react";
import AddToDoModal from "./AddToDoModal";
import Button from "./Button";

function Header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="ml-2">
      {openModal && (
        <AddToDoModal open={openModal} onClose={() => setOpenModal(false)} />
      )}
      <Button
        title={"ToDo"}
        icon={"+"}
        onClick={e => {
          e.stopPropagation();
          setOpenModal(true);
        }}
      />
    </div>
  );
}

export default Header;
