import React, { useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import NotFound from "../../images/not-found.jpg";

const ProjectGallery = () => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return singleProjectData ? (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{singleProjectData.ProjectImages.map((project) => {
				return (
					<div className="mb-10 sm:mb-0" key={project.id}>
						<img
							src={project.img}
							className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
							alt={project.title}
							key={`galery-project-${project.id}`}
						/>
					</div>
				);
			})}
		</div>
	) :
		<div className="grid grid-cols-1">
			<div className="mb-10 sm:mb-0">
				<img
					src={NotFound}
					className="rounded-xl cursor-pointer shadow-lg sm:shadow-none w-96 h-96"
					alt={"Not found"}
				/>
			</div>

		</div>
};

export default ProjectGallery;
