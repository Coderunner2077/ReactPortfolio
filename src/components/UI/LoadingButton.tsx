import React, { useLayoutEffect, useRef, useCallback } from "react";
import { AiOutlineLoading } from "react-icons/ai";

const LoadingButton: React.FC<{
    children: React.ReactNode, className?: string, size?: number, width: number,
    loading: boolean, onClick?: Function, type?: "submit" | "button" | "reset", top?: string
}>
    = ({ children, className = "btn btn-purple flex-x", size = 14, width, loading, onClick, type = "submit", top = "18px" }) => {
        const buttonRef = useRef(null);
        const spinnerDivRef = useRef(null);

        useLayoutEffect(() => {
            const button = buttonRef.current; if (!button) return;
            const spinnerDiv = spinnerDivRef.current;
            if (!children) return;
            const buttonWidth = width;

            button.style.width = `${buttonWidth}px`;
            if (!spinnerDiv) return;
            try {
                const siblingOffsetLeft = button.firstElementChild.classList.contains("absolute") ? button.firstElementChild.nextSibling.offsetLeft : button.firstElementChild.offsetLeft;
                if (!siblingOffsetLeft) throw new Error("Failed to get button's text position");
                spinnerDiv.style.left = siblingOffsetLeft - 16 + "px";
                spinnerDiv.style.top = top;
            } catch (err) { spinnerDiv.style.left = "5px"; }

        }, [loading]);

        const handleClick = () => {
            if (onClick) onClick();
        }

        return (
            <button onClick={handleClick} className={`relative ${className}${loading ? " opacity-40 cursor-not-allowed" : ""}`} disabled={loading} ref={buttonRef} type={type}>
                {loading && <div className="absolute left-0 flex justify-end w-fit" ref={spinnerDivRef}><AiOutlineLoading size={size} className={`animate-spin`} /></div>}
                {!Array.isArray(children) && <span>{children}</span>}
                {Array.isArray(children) && children.map((child, i) => <span key={`${i}:${child}`}>{child}</span>)}
            </button >
        );
    };

export default LoadingButton;
