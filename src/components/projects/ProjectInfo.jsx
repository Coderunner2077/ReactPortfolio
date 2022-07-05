import React, { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { useTranslation } from "react-i18next";

const ProjectInfo = () => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const { t } = useTranslation();

	if (!singleProjectData) return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14 text-xl text-white">
			{t("main.project.no_id")}
		</div>
	)

	return (
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project client details */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
						{t(singleProjectData.ProjectInfo.ClientHeading)}
					</p>
					<ul className="leading-loose">
						{singleProjectData.ProjectInfo.CompanyInfo.map(
							(info, index) => {
								return (
									<li
										className="font-general-regular text-ternary-dark dark:text-ternary-light"
										key={`aboutt-${info.id}-${index}`}
									>
										<span>{t(info.title)}: </span>
										{info.title === "data.website" || info.title === "data.source" ? (
											<a
												href={info.details}
												className={
													info.title === 'data.website' ||
														info.title === 'data.source'
														? 'hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
														: ''
												}
												aria-label="Project Website and Phone"
											>
												{info.title === "data.website" ? info.details : t("main.repo")}
											</a>
										) : <span>{t(info.details)}</span>}
									</li>
								);
							}
						)}
					</ul>
				</div>

				{/* Single project objectives */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
						{t(singleProjectData.ProjectInfo.ObjectivesHeading)}
					</p>
					<p className="font-general-regular text-primary-dark dark:text-ternary-light">
						{t(singleProjectData.ProjectInfo.ObjectivesDetails)}
					</p>
				</div>

				{/* Single project technologies */}
				{singleProjectData.ProjectInfo.Technologies.map((tech, index) => (
					<div className="mb-7" key={`tech-${index}`}>
						<p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
							{t(tech.title)}
						</p>
						<p className="font-general-regular text-primary-dark dark:text-ternary-light">
							{tech.techs.join(
								', '
							)}
						</p>
					</div>
				))}
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
					{t(singleProjectData.ProjectInfo.ProjectDetailsHeading)}
				</p>
				{singleProjectData.ProjectInfo.ProjectDetails.map((details, index) => {
					return (
						<div key={`about-section-paragraph-${details.id}-${index}`}>
							<p
								className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
							>
								{t(details.details)}
							</p>
							{details.listItems && (
								<ul className="list-disc">
									{details.listItems.map((item, index) => (
										<li className="text-white" key={`list-item-${index}`}>{t(item)}</li>
									))}
								</ul>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectInfo;
