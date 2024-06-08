'use client'
import React from 'react';
import Obfuscate from "react-obfuscate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyObfucate = ({ link, icon, isEmail = false }) => {
  if (!isEmail) {
    return (
      <a href={link} aria-label="GitHub">
        <FontAwesomeIcon icon={icon} className="text-2xl w-6 mr-3" />
      </a>
    );
  }
  return (
    <div>
      <Obfuscate email={link}>
        <FontAwesomeIcon icon={icon} className="w-6 mr-3 text-2xl" />
      </Obfuscate>
    </div>
  );
};

export default MyObfucate;
