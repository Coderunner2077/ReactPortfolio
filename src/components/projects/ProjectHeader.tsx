import React, { useContext } from 'react';
import { FiClock, FiTag } from 'react-icons/fi';
import { MdOutlineUpdate } from "react-icons/md";
import SingleProjectContext from '../../context/SingleProjectContext';
import { useTranslation } from 'react-i18next';

const ProjectSingleHeader = () => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const { t } = useTranslation();

	return singleProjectData ? (
		<div className="w-full">
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
				{t(singleProjectData.ProjectHeader.title)}
			</p>
			<div className="flex items-start justify-between w-full">
				<div className="flex flex-col gap-2 mr-2 sm:mr-10 lg:flex-row justify-start">
					<div className="flex sm:items-center flex-col sm:flex-row">
						<div className="flex items-center gap-1 mb-1 sm:mb-0">
							<FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
							<span className="font-general-regular ml-1 leading-none text-primary-dark dark:text-primary-light">{t("data.created")}:</span>
						</div>
						<span className="font-general-regular ml-1 leading-none text-primary-dark dark:text-primary-light text-sm">
							{t(singleProjectData.ProjectHeader.publishDate)}
						</span>
					</div>
					{singleProjectData.ProjectHeader.updateDate && (
						<div className="flex sm:items-center flex-col sm:flex-row justify-start">
							<div className="flex items-center gap-1 mb-1 sm:mb-0 justify-start">
								<MdOutlineUpdate className="text-lg text-ternary-dark dark:text-ternary-light" size={22} />
								<span className="font-general-regular ml-1 leading-none text-primary-dark dark:text-primary-light">{t("data.updated")}:</span>
							</div>
							<span className="font-general-regular ml-1 leading-none text-primary-dark dark:text-primary-light text-sm">
								{t(singleProjectData.ProjectHeader.updateDate)}
							</span>
						</div>
					)}
				</div>

				<div className="flex items-start">
					<FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
						{t(singleProjectData.ProjectHeader.tags)}
					</span>
				</div>
			</div>
		</div >
	) : (
		<div>
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
				{t("main.project.not_found")}
			</p>

		</div>
	)
};

export default ProjectSingleHeader;
