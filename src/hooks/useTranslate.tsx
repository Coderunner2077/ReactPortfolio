// NOTE: This scroll to top is the actual working scroll to to when user clicks on the circle arrow that appears when use scrolls down.
// The other `onScroll` component in components folder is for the default react scroll to top behavior on route visit.

import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import EN from "../images/en.png";
import FR from "../images/fr.png";

const useTranslate = () => {
    const [showTranslate, setShowTranslate] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const [isFrench, setIsFrench] = useState(true);
    const { i18n } = useTranslation();

    useEffect(() => {
        setIsFrench(i18n.languages[0] === "fr");
        window.addEventListener('scroll', onScroll);
        return function cleanup() {
            window.removeEventListener('scroll', onScroll);
        };
    });

    const onScroll = () => {
        if (window.pageYOffset > 80) setScrolled(true);
        else setScrolled(false);
        if (!showTranslate && window.pageYOffset <= 400) {
            setShowTranslate(true);
        } else if (showTranslate && window.pageYOffset > 400) {
            setShowTranslate(false);
        }
    };

    const switchLanguage = () => {
        i18n.changeLanguage(isFrench ? "en" : "fr");
    };

    return (
        <>
            <img
                src={isFrench ? FR : EN}
                className={`translate-switcher mt-2 transition-all duration-300 ${scrolled ? "opacity-20" : "opacity-90"} hover:opacity-100 rounded-full border-2 border-gray-600 shadow-md`}
                onClick={switchLanguage}
                style={{
                    height: 45,
                    width: 45,
                    borderRadius: 50,
                    right: 40,
                    top: 70,
                    display: showTranslate ? 'flex' : 'none'
                }}
            />
        </>
    );
};

export default useTranslate;