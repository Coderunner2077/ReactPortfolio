import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import About from './pages/AboutMe';
import Contact from './pages/Contact';
import HireMe from "./pages/HireMe";
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectSingle from './pages/ProjectSingle';
import { AnimatePresence } from 'framer-motion';
import UseScrollToTop from './hooks/useScrollToTop';
import UseTranslate from "./hooks/useTranslate";
import Modal from "./components/modal";
import Alert from "./components/alert";
import "./i18n";

function App() {
	return (//@ts-ignore
		<AnimatePresence>
			<div className="bg-secondary-light dark:bg-primary-dark transition duration-300 overflow-x-hidden">
				<Modal />
				<Alert />
				<UseTranslate />
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="projects" element={<Projects />} />
						<Route
							path="projects/single-project/:id"
							element={<ProjectSingle />}
						/>

						<Route path="about" element={<About />} />
						<Route path="contact" element={<Contact />} />
						<Route path="hire" element={<HireMe />} />
					</Routes>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
