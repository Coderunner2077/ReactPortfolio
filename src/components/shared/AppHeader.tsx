import React, { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import logoG from "../../images/logo-g.png";
import { motion } from 'framer-motion';
import { Button } from '../UI';
import { useTranslation } from 'react-i18next';
import { showModal } from "../../store/actions";
import { useDispatch } from "react-redux";
import HireForm from "../contact/HireForm";

const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const isHired = true;

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	const showHireMeModal = e => {
		if (!isHired)
			dispatch(showModal({ body: <HireForm /> }));
	}

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		>
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					<div className="">
						<Link to="/">
							{activeTheme === 'dark' ? (
								<div className="flex gap-2 items-center">
									<img
										src={logoG}
										alt="Dark Logo G"
									/>
									<h3 className="text-sky-800 text-xl sm:text-2xl md:text-3xl font-black">Coderunner</h3>
								</div>
							) : (
								<div className="flex gap-2 items-center">
									<img
										src={logoG}
										alt="Dark Logo G"
									/>
									<h3 className="text-white text-xl sm:text-2xl md:text-3xl font-black">Coderunner</h3>
								</div>
							)}
						</Link>
					</div>

					{/* Theme switcher small screen */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
						)}
					</div>

					{/* Small screen hamburger menu */}
					<div className="sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:hidden p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<Link
						to="/projects"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						{t("navbar.projects")}
					</Link>
					<Link
						to="/about"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="About Me"
					>
						{t("navbar.about")}
					</Link>
					<Link
						to="/contact"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="Contact"
					>
						{t("navbar.contact")}
					</Link>
					<div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
						<span
							onClick={showHireMeModal}
							className="font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-2 py-2 mt-2 duration-300 w-24 cursor-not-allowed opacity-50"
							aria-label={`${t("navbar.hire")} Button`}
						>
							<Button title={t("navbar.hire")} disabled={true} />
						</span>
					</div>
				</div>

				{/* Header links large screen */}
				<div className="font-general-medium hidden m-0 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none sm:space-x-2 md:space-x-4">
					<Link
						to="/projects"
						className="block text-left md:text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light mb-2 sm:py-2"
						aria-label="Projects"
					>
						{t("navbar.projects")}
					</Link>
					<Link
						to="/about"
						className="block text-left md:text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light mb-2 sm:py-2"
						aria-label="About Me"
					>
						{t("navbar.about")}
					</Link>
					<Link
						to="/contact"
						className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light mb-2 sm:py-2"
						aria-label="Contact"
					>
						{t("navbar.contact")}
					</Link>
				</div>

				{/* Header right section buttons */}
				<div className="hidden sm:flex justify-between items-center sm:space-x-1 md:space-x-2 lg:space-x-4">
					<span
						onClick={showHireMeModal}
						className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-0.5 md:px-2 lg:px-4 py-2.5 duration-300 cursor-not-allowed opacity-50"
						aria-label="Hire Me Button"
					>
						<Button title={t("navbar.hire")} disabled={true} />
					</span>
					{/* Theme switcher large screen */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light md:text-xl" />
						) : (
							<FiSun className="text-gray-200 hover:text-gray-50 md:text-xl" />
						)}
					</div>
				</div>
			</div>
		</motion.nav>
	);
};

export default AppHeader;
