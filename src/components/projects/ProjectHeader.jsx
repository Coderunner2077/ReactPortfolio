import React, { useContext } from 'react';
import { FiClock, FiTag } from 'react-icons/fi';
import SingleProjectContext from '../../context/SingleProjectContext';
import { useTranslation } from 'react-i18next';

const ProjectSingleHeader = () => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const { t } = useTranslation();

	return singleProjectData ? (
		<div>
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
				{t(singleProjectData.ProjectHeader.title)}
			</p>
			<div className="flex">
				<div className="flex items-center mr-10">
					<FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{t(singleProjectData.ProjectHeader.publishDate)}
					</span>
				</div>
				<div className="flex items-center">
					<FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{t(singleProjectData.ProjectHeader.tags)}
					</span>
				</div>
			</div>
		</div>
	) : (
		<div>
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
				{t("main.project.not_found")}
			</p>

		</div>
	)
};

export default ProjectSingleHeader;
