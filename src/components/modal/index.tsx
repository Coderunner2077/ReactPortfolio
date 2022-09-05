import React from "react";
import ReactDOM from "react-dom";
import { IconButton } from "../UI";
import { ImCross } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "../../store/actions";
import { motion } from "framer-motion";

const Modal = () => {
    const dispatch = useDispatch();
    const { modal } = useSelector((state) => state.modal);

    if (!modal) return null;

    const onCloseClick = () => {
        dispatch(hideModal());
    };

    return ReactDOM.createPortal(
        <div
            className="modal-overlay fixed top-0 left-0 w-screen h-screen z-1040 bg-black bg-opacity-50 overflow-hidden outline-none flex items-center"
            onClick={onCloseClick}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 0.5,
                    delay: 0.1,
                }}
                className="modal"
                onClick={(e) => e.stopPropagation()}
            >
                <div className={`modal-header flex items-center justify-between ${modal.title ? "px-2 sm:px-4 py-2 sm:py-4 border-b-2 border-blue-400" : "pt-2"}`}>
                    <h4 className="font-h3 text-blue-800 text-xl font-semibold select-none ml-2">{modal.title ?? ""}</h4>
                    <IconButton icon={<ImCross size={13} />} onClick={onCloseClick} color="btn-gray-line">
                        Close
                    </IconButton>
                </div>
                <div className="modal-body p-0.5 sm:p-1">{modal.body}</div>
            </motion.div>
        </div>,
        document.getElementById("modal") || document.body
    );
};

export default Modal;
