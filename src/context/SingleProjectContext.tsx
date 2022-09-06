import React, { useState, createContext } from 'react';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';

const SingleProjectContext = createContext<{ singleProjectData: any, selectProjectData: (id: string | number) => void }>
	({ singleProjectData: undefined, selectProjectData: (id: string | number) => { } });

export const SingleProjectProvider = ({ id, children }) => {
	const [singleProjectData, setSingleProjectData] = useState(
		isNaN(id) || id < 1 || id > 12 ? undefined : singleProjectDataJson[id - 1]
	);

	const selectProjectData = (id) => {
		setSingleProjectData(
			isNaN(id) || id < 1 || id > 12 ? undefined : singleProjectDataJson[id - 1]
		);
	}

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, selectProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
