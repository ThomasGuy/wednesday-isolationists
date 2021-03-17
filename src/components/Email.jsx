import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { email } from '../utils/artists';

const Email = ({ artist, subject, title }) => {
  const aname = artist.split(' ')[0];
  return (
    <a
      href={`mailto:${email[aname]}?subject=SALE%20${subject}&body=${artist}%20quote%20for%20picture%20${subject}`}>
      {title};&nbsp;&nbsp;
      <FaEnvelope />
    </a>
  );
};

export default Email;
