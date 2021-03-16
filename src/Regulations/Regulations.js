import React from 'react';
// import { Document } from 'react-pdf';
// import { NavMob } from '../Shared/NavMob';
// import { NavDsk } from '../Shared/NavDsk';
// import { Duration } from '../Shared/Duration';
// import { Footer } from '../Shared/Footer';
// import { Footer } from '../Shared/Footer';
import { Link } from 'react-router-dom';
const regulations = './regulations.pdf';

export const Regulations = () => {
  return (
    <Link to={regulations} target="_blank" download>
      Download
    </Link>
  );
};
