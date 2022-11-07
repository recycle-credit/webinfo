import React from 'react';
import { MdPlace } from 'react-icons/md';
import './ContactInfoItem.css'

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
}) {
  return (
    <div className='ItemStyles'>
      <div className="icon">{icon}</div>
      <div className="info">
        <p>{text}</p>
      </div>
    </div>
  );
}
