import React from 'react';

import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import './ContactSection.css'


export default function ContactSection() {
  return (
    <div className="ContactSectionStyle">
      <div className="container">
       
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+8801231" />
            <ContactInfoItem icon={<MdEmail />} text="webcifar@gmail.com" />
            <ContactInfoItem text="Chittagong, Bangladesh" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
