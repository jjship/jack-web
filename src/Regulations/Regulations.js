import React from 'react';
import { Document } from 'react-pdf';
import { NavMob } from '../Shared/NavMob';
import { NavDsk } from '../Shared/NavDsk';
import { Duration } from '../Shared/Duration';
import { Footer } from '../Shared/Footer';
// import { Footer } from '../Shared/Footer';
const regulations = './regulations.pdf';

export const Regulations = () => {
  return (
    <div>
      <NavDsk />
      <NavMob />
      <Document file="./regulations.pdf" />
      <Duration />
    </div>
  );
};
