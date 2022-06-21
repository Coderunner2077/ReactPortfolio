import React, { useState, createContext } from 'react';
import { singleProjectData as singleProjectDataJson } from '../data/singleProjectData';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ id, children }) => {
	const [singleProjectData, setSingleProjectData] = useState(
		isNaN(id) || id < 1 || id > 11 ? undefined : singleProjectDataJson[id - 1]
	);

	const selectProjectData = (id) => {
		setSingleProjectData(
			isNaN(id) || id < 1 || id > 11 ? undefined : singleProjectDataJson[id - 1]
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
