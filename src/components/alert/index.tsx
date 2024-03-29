import React, { useEffect, useRef, useState, useMemo } from "react";
import ReactDOM from "react-dom";
import { deleteAlerts } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers";
import { AlertMessage } from "../UI";
import { IAlertMessage } from "../../types";
import { motion } from "framer-motion";

const Alert = () => {
	const alerts = useSelector((state: RootState) => state.flash.alerts);
	const timeoutRef: { current: number | null } = useRef(null);
	const dispatch = useDispatch();
	const [activeAlerts, setActiveAlerts] = useState(alerts);
	const [animation, setAnimation] = useState("");

	useEffect(() => {
		setActiveAlerts(alerts);
		setAnimation("animate-alert-in");
		clearTimeout(timeoutRef.current as number);
		if (alerts?.length) {
			timeoutRef.current = setTimeout(() => {
				dispatch(deleteAlerts());
			}, 2900);
		}

		return () => {
			clearTimeout(timeoutRef.current as number);
		};
	}, [alerts]);

	const onCloseClick = (key) => {
		const alerts = activeAlerts?.filter((alert, index) => index !== key);
		setActiveAlerts(alerts);
	};

	const resetTimeout = (e) => {
		e.stopPropagation();
		setAnimation("animate-none");
		clearTimeout(timeoutRef.current as number);
		timeoutRef.current = setTimeout(() => {
			setAnimation("animate-alert-out");
			timeoutRef.current = setTimeout(() => {
				dispatch(deleteAlerts());
			}, 2900);
		}, 300);
	};

	function uniqByKeepLast(a: IAlertMessage[], key: (a: IAlertMessage) => string): IAlertMessage[] {
		return [
			...new Map(
				a.map((x: any) => [key(x), x])
			).values()
		]
	}

	const uniqueAlerts = useMemo(() => {
		if (!activeAlerts || activeAlerts.length < 2) return activeAlerts;
		return uniqByKeepLast(activeAlerts, a => a.message);
	}, [activeAlerts]);

	if (!alerts) return null;

	return ReactDOM.createPortal(
		<motion.ul
			variants={{
				hidden: { opacity: 0 },
				show: {
					opacity: 1,
					transition: {
						staggerChildren: 0.5
					}
				}
			}}
			initial="hidden"
			animate="show"
			className="fixed top-16 sm:top-20 left-0 w-full h-auto z-1050 bg-transparent flex-y pointer-events-none">
			{uniqueAlerts?.map((alert, index) => (
				<AlertMessage
					key={index}
					type={alert.type}
					message={alert.message}
					animation={animation}
					onMouseMove={resetTimeout}
					onCloseClick={() => onCloseClick(index)}
				/>
			))}
		</motion.ul>,
		document.getElementById("alert") || document.body
	);
};

export default Alert;
