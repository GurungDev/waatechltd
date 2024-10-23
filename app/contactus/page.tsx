import Contact_us from "@/components/Contact_us";
import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <Contact_us />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.7954294618667!2d-0.08999823257887588!3d51.52883749336241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca69ef72e2d%3A0x37be745b444151b0!2sInternational%20House%2C%2064%20Nile%20St%2C%20London%20N1%207SR%2C%20UK!5e0!3m2!1sen!2snp!4v1729694753706!5m2!1sen!2snp"
        width="1200"
        className="w-full"
        height="600"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactUsPage;
