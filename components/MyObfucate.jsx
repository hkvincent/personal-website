'use client'
import React from 'react';
import Obfuscate from "react-obfuscate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const MyObfucate = ({ email }) => {
    return (
        <div>
            <Obfuscate email={email}>
                <FontAwesomeIcon icon={faEnvelope} className="w-6 mr-3 text-2xl" />
            </Obfuscate>
        </div>
    );
};

export default MyObfucate;