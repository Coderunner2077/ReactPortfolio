import React from "react";
import { useTranslation } from "react-i18next";

const selectOptions = [
	'projects.category.web',
	'projects.category.mern',
	'projects.category.react',
	'projects.category.express',
	'projects.category.symfony',
	'projects.category.php',
	'projects.category.java',
	'projects.category.c'
];

const ProjectsFilter = ({ setSelectProject }) => {
	const { t } = useTranslation();
	return (
		<select
			onChange={(e) => {
				setSelectProject(e.target.value);
			}}
			className="font-general-medium
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
		>
			<option value={""} className="text-sm sm:text-md">
				{t("projects.category.all")}
			</option>

			{selectOptions.map((option) => (
				<option className="text-normal sm:text-md" key={`option-${option}`}>
					{t(option)}
				</option>
			))}
		</select>
	);
};

export default ProjectsFilter;
