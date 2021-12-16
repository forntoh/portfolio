import React, { useState } from "react";
import Input from "@/components/input";
import { Button } from "../button";

const Contact = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  if (data) {
    var contactName = data.name;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var contactEmail = data.email;
    var contactMessage = data.contactmessage;
  }

  const submitForm = () => {
    window.open(
      `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );
  };

  return (
    <section className="section container z-10">
      <div className="space-y-8">
        <div className="flex flex-wrap md:grid grid-cols-2 gap-6">
          <aside className="space-y-6">
            <h1>Get In Touch.</h1>
            <p>{contactMessage}</p>
            <div className="space-y-2">
              <h4>Address and Phone</h4>
              <div>
                <p>{contactName}</p>
                <p>{street}</p>
                <p>
                  {city} {state}, {zip}
                </p>
                <p>{phone}</p>
                <p>{contactEmail}</p>
              </div>
            </div>
          </aside>
          <form onSubmit={submitForm} className="w-full">
            <fieldset className="space-y-8">
              <Input
                id="name"
                label="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                id="email"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                id="subject"
                label="Subject"
                onChange={(e) => setSubject(e.target.value)}
              />
              <Input
                id="message"
                label="Message"
                type="textarea"
                rows={8}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button label="Submit" onClick={submitForm} />
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
