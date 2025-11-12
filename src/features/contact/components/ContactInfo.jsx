import React from "react";
import phoneImg from "../../../assets/contact-us/phone.svg"
import faxImg from "../../../assets/contact-us/phone2.svg";
import emailImg from "../../../assets/contact-us/mail.svg";
import ContactItem from "./ContactItem";

export default function ContactInfo() {
  return (
    <div className="flex flex-col sm:flex-row justify-start gap-8 mt-10 text-sm text-gray-700">
      <ContactItem
        icon={phoneImg}
        title="Phone"
        value="+44 543 9871 1234"
      />
      <ContactItem
        icon={faxImg}
        title="Fax"
        value="+44 543 8711 1234"
      />
      <ContactItem
        icon={emailImg}
        title="Email"
        value="info@termibi.com"
      />
    </div>
  );
}
