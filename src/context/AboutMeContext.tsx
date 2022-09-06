import React, { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';

type AboutMe = {
	id: number, bio: string
}

const AboutMeContext = createContext<{ aboutMe: AboutMe[], setAboutMe: React.Dispatch<AboutMe[]> }>({
	aboutMe: [], setAboutMe: (aboutMe: AboutMe[]) => { }
});

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState(aboutMeData);

	return (
		<AboutMeContext.Provider
			value={{
				aboutMe,
				setAboutMe,
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;
