"use client"
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const ContactHoverButton = () => {
  return (
    <div>
      {" "}
      <FloatingWhatsApp phoneNumber="+49 1523 1401084" accountName="Waa Tech" />
    </div>
  );
};

export default ContactHoverButton;
