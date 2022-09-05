import React from "react";
import { IconButton } from "./";
import { ImCross } from "react-icons/im";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { BiError } from "react-icons/bi";
import { motion } from "framer-motion";

const AlertMessage = ({ type, message, animation, onMouseMove, onCloseClick, className = "w-5/6 md:w-3/5" }) => {
    return (
        <motion.li
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
            className={`
				alert mb-3 ${className}
				${type === "error" ? "alert-danger" : "alert-success"} ${animation ?? ""}`}
            onMouseMove={onMouseMove}
        >
            <div

                className="sm:font-h3 sm:text-xl font-semibold select-none ml-2 flex">
                {type === "success" && <RiCheckboxCircleFill size={28} className="mr-2" />}
                {type === "error" && <BiError size={28} className="mr-2 w-8" />}
                {message}
            </div>
            {onCloseClick && (
                <IconButton icon={<ImCross size={13} />} onClick={onCloseClick} color="btn-close"
                    top="-top-12" left=""
                >
                    Close
                </IconButton>
            )}
        </motion.li>
    );
};

export default AlertMessage;
