import React, { useState, createContext } from 'react';
import { projectsData } from '../data/projects';
import { useTranslation } from "react-i18next";

// Create projects context
export const ProjectsContext = createContext<{
	projects: any[], setProjects: React.Dispatch<any[]>, searchProject: string, setSearchProject: React.Dispatch<string>,
	searchProjectsByTitle: any[], selectProject: string, setSelectProject: React.Dispatch<string>,
	selectProjectsByCategory: any[]
}>({
	projects: [], setProjects: (projects: any[]) => { }, searchProject: "", setSearchProject: (sP: string) => { },
	searchProjectsByTitle: [], selectProject: "", setSelectProject: (sP: string) => { },
	selectProjectsByCategory: []
});

// Create the projects context provider
export const ProjectsProvider = (props) => {
	const [projects, setProjects] = useState(projectsData);
	const [searchProject, setSearchProject] = useState('');
	const [selectProject, setSelectProject] = useState('');
	const { t } = useTranslation();

	// Search projects by project title
	const searchProjectsByTitle = projects.filter((item) => {
		const result = item.title
			.toLowerCase()
			.includes(searchProject.toLowerCase())
			? item
			: searchProject === ''
				? item
				: '';
		return result;
	});

	// Select projects by project category
	const selectProjectsByCategory = projects.filter((item) => {
		let category = t(item.category);
		return category.includes(selectProject);
	});

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				setProjects,
				searchProject,
				setSearchProject,
				searchProjectsByTitle,
				selectProject,
				setSelectProject,
				selectProjectsByCategory,
			}}
		>
			{props.children}
		</ProjectsContext.Provider>
	);
};
