import React from "react";
// Import images
import Corunner1 from "../images/corunner-project-1.jpg";
import Corunner2 from "../images/corunner-project-2.jpg";
import Corunner3 from "../images/corunner-project-3.jpg";
import ReactNodePassport from "../images/react-node-oauth.jpg";
import MemoryGame from "../images/memory-game.jpg";
import ReactMemory from "../images/react-memory.png";
import NodeSocketIO from "../images/node-socket.io.png";
import SymfonyPHP from "../images/symfony-php.png";
import PhpProject from "../images/php-project.png";
import JavaProject from "../images/java-project.jpg";
import CProject from "../images/c-project.jpg";

export const singleProjectData = [
	{
		ProjectHeader: {
			title: 'Corunner Training Platform',
			publishDate: 'Mai 20, 2022',
			tags: 'Fullstack / React / Express / GraphQL',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Corunner React App',
				img: Corunner2,
			},
			{
				id: 2,
				title: 'Corunner React App',
				img: Corunner1,
			},
			{
				id: 3,
				title: 'Corunner React App',
				img: Corunner3,
			},

		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Corunner Fullstack App',
				},
				{
					id: 2,
					title: 'Category',
					details: 'Web Application',
				},
				{
					id: 3,
					title: 'Website',
					details: 'https://corunner.app',
				}
			],
			Technologies: [
				{
					title: 'Frontend Tools & Tech',
					techs: [
						'React',
						'Redux',
						'GraphQL',
						'Urql',
						'TailwindCSS',
						'React Leaflet',
						'TypeScript',
						'Vite.js'
					],
				},
				{
					title: 'Backend Tools & Tech',
					techs: [
						'Node.js',
						'Express',
						'Express-GraphQL',
						'Graphql-WS',
						'Prisma',
						'Passport.js',
						'Redis',
						'Cloundinary',
						'Nodemailer'
					],
				}

			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Corunner is a Workout Network Platform. A place to schedule, share and plan your physical exercises and allow people from your town to join you.',
				},
				{
					id: 2,
					details:
						'Corunner is packed with exciting features, including the ability to:',
					listItems: [
						"Create customized workout routes. Different display modes exists for the workout",
						"Allow other users to join directly your workout by choosing Public mode",
						"Allow only certain users to join your workout by choosing Protected mode that prompts users to apply first.",
						"Plan your workout route just for yourself by choosing Private mode",
						"Of course, you can apply to or join other users'workouts",
						"Chat with users via real time private messages",
						"Block users to prevent them from writing to you private messages"
					]
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 2,
					title: 'React Authentication Frontend',
					category: 'MERN Project',
					img: ReactNodePassport,
				},
				{
					id: 3,
					title: 'Node Authentication Backend',
					category: 'MERN Project',
					img: ReactNodePassport,
				},
				{
					id: 4,
					title: 'React Memory Game',
					category: 'React Project',
					img: ReactMemory,
				},
				{
					id: 5,
					title: 'Node Minichat',
					category: 'Express Project',
					img: NodeSocketIO,
				},
			],
		},
	},
	{
		ProjectHeader: {
			title: 'React Authentication Frontend',
			publishDate: 'Aug 16, 2021',
			tags: 'React / Frontend / MERN',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'React Member Space',
				img: ReactNodePassport,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'React Frontend',
				},
				{
					id: 2,
					title: 'Category',
					details: 'MERN Project',
				},
				{
					id: 3,
					title: 'Source Code',
					details: 'https://github.com/Coderunner2077/React-Node-OAuth2-frontend'
				}
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React',
						'HTML',
						'CSS'
					],
				}
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: 1,
					details:
						'React member space authentication project',
				},
				{
					id: 2,
					details:
						'This is the frontend of a MERN (MongoDB - Express - React - NodeJS) Project.'
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 3,
					title: 'Node Authentication Backend',
					category: 'MERN Project',
					img: ReactNodePassport,
				},
				{
					id: 1,
					title: 'Corunner Training Platform',
					category: 'Web Application',
					img: Corunner2,
					ProjectHeader: {
						title: 'Project Management UI - From Context',
						publishDate: 'Jul 26, 2021',
						tags: 'Fullstack / React / NodeJS',
					},
				},
				{
					id: 4,
					title: 'React Memory Game',
					category: 'React Project',
					img: ReactMemory,
				},
			],
		},
	},
	{
		ProjectHeader: {
			title: 'Node Authentication Backend',
			publishDate: 'Aug 16, 2021',
			tags: 'NodeJS / Express / Passport / MongoDB',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'React Member Space',
				img: ReactNodePassport,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Node Backend',
				},
				{
					id: 2,
					title: 'Category',
					details: 'MERN Project',
				},
				{
					id: 3,
					title: 'Source Code',
					details: 'https://github.com/Coderunner2077/React-Node-OAuth2-backend'
				}
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Node',
						'Express',
						'Passport',
						'MongoDB'
					],
				}
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: 1,
					details:
						'React/Node member space authentication project',
				},
				{
					id: 2,
					details:
						'This is the backend of a MERN (MongoDB - Express - React - NodeJS) Project.'
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 2,
					title: 'React Authentication Frontend',
					category: 'MERN Project',
					img: ReactNodePassport,
				},
				{
					id: 1,
					title: 'Corunner Training Platform',
					category: 'Web Application',
					img: Corunner2,
					ProjectHeader: {
						title: 'Project Management UI - From Context',
						publishDate: 'Jul 26, 2021',
						tags: 'Fullstack / React / NodeJS',
					},
				},
				{
					id: 5,
					title: 'Node Minichat',
					category: 'Express Project',
					img: NodeSocketIO,
				},
			],
		},
	},
	{
		ProjectHeader: {
			title: 'React Memory Game',
			publishDate: 'April, 2021',
			tags: 'React / Game',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'React Memory Game',
				img: ReactMemory,
			},
			{
				id: 2,
				title: "React Memory Game",
				img: MemoryGame
			}
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'React Memory Game',
				},
				{
					id: 2,
					title: 'Category',
					details: 'React Project',
				},
				{
					id: 3,
					title: 'Source Code',
					details: 'https://github.com/Coderunner2077/React-MemoryGame'
				}
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React',
						'HTML',
						'CSS',
						'Tests'
					],
				}
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Simple React memory game project',
				},
				{
					id: 2,
					details:
						'Player has to find the respective pairs of icons in the grid'
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 2,
					title: 'React Authentication Frontend',
					category: 'MERN Project',
					img: ReactNodePassport,
				},
				{
					id: 8,
					title: 'Java Pendu Game',
					category: 'Java Project',
					img: JavaProject,
				}
			],
		},
	},
	{
		ProjectHeader: {
			title: 'Node Minichat',
			publishDate: 'August 2020',
			tags: 'NodeJS / Express / Socket.io / Ejs',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Node Minichat',
				img: ReactNodePassport,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Node Minichat',
				},
				{
					id: 2,
					title: 'Category',
					details: 'Express Project',
				},
				{
					id: 3,
					title: 'Source Code',
					details: 'https://github.com/Coderunner2077/Node-MiniChat'
				}
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Node',
						'Express',
						'Socket.io',
						'Ejs'
					],
				}
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Node Express Minichat project',
				},
				{
					id: 2,
					details:
						'This basic minichat uses socket.io to allow instant communication between users'
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 3,
					title: 'Node Authentication Backend',
					category: 'MERN Project',
					img: ReactNodePassport,
				},
			],
		},
	},
	{
		ProjectHeader: {
			title: 'Symfony Social Network',
			publishDate: 'May 2017 - Nov 2018',
			tags: 'Symfony / PHP / Web Application',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Symfony Social Network',
				img: SymfonyPHP,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Symfony Social Network',
				},
				{
					id: 2,
					title: 'Category',
					details: 'Symfony PHP Project',
				},
				{
					id: 3,
					title: 'Source Code',
					details: 'https://github.com/Coderunner2077/Symfony-SocialNetwork'
				}
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Symfony 4',
						'PHP',
						'jQuery',
						'Twig',
						'HTML',
						'CSS',
						'JavaScript',
						'Bootstrap'
					],
				}
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Social network allowing everyone to publish articles and/or posts.',
				},
				{
					id: 2,
					details:
						'Project created using the PHP language and the Symfony framework (Symfony 3 then migrated to Symfony 4)'
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 7,
					title: 'PHP Member Space',
					category: 'PHP Project',
					img: PhpProject,
				},
				{
					id: 1,
					title: 'Corunner Training Platform',
					category: 'Web Application',
					img: Corunner2,
					ProjectHeader: {
						title: 'Project Management UI - From Context',
						publishDate: 'Jul 26, 2021',
						tags: 'Fullstack / React / NodeJS',
					},
				},
			],
		},
	},
	{
		ProjectHeader: {
			title: 'PHP Member Space',
			publishDate: 'April 2017',
			tags: 'PHP / Member Space',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'PHP Member Space',
				img: PhpProject,
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'PHP Member Space',
				},
				{
					id: 2,
					title: 'Category',
					details: 'PHP Project',
				},
				{
					id: 3,
					title: 'Source Code',
					details: "https://github.com/Coderunner2077/PHP-EspaceMembre"
				}
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'PHP',
						'HTML',
						'CSS',
						'JavaScript'
					],
				}
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Basic PHP member space for authentication',
				},
				{
					id: 2,
					details:
						'Project created as part of my PHP training'
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 6,
					title: 'Symfony Social Network',
					category: 'Symfony PHP Project',
					img: SymfonyPHP,
				},
				{
					id: 2,
					title: 'React Authentication Frontend',
					category: 'MERN Project',
					img: ReactNodePassport,
				},
			],
		},
	},
	{
		ProjectHeader: {
			title: 'Java Pendu Game',
			publishDate: 'December, 2016',
			tags: 'Java / MVC / Game',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Java Pendu Game',
				img: JavaProject,
			}
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Java Pendu Game',
				},
				{
					id: 2,
					title: 'Category',
					details: 'Java Project',
				},
				{
					id: 3,
					title: 'Source Code',
					details: 'https://github.com/Coderunner2077/Java-Pendu'
				}
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Java',
						'MVC'
					],
				}
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Java Hangman (Pendu) game. Player has to guess a word randomly chosen from a dictionnary',
				},
				{
					id: 2,
					details:
						"Project created as part of my Java training. This project uses MVC pattern."
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 9,
					title: 'Java Garage',
					category: 'Java Project',
					img: JavaProject,
				},
				{
					id: 4,
					title: 'React Memory Game',
					category: 'React Project',
					img: ReactMemory,
				},
			],
		},
	},
	{
		ProjectHeader: {
			title: 'Java Garage App',
			publishDate: 'October, 2016',
			tags: 'Java',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Java Garage App',
				img: JavaProject,
			}
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Java Garage App',
				},
				{
					id: 2,
					title: 'Category',
					details: 'Java Project',
				},
				{
					id: 3,
					title: 'Source Code',
					details: 'https://github.com/Coderunner2077/Java-TP-Garage'
				}
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Java',
						'Classes'
					],
				}
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Very basic garage management app',
				},
				{
					id: 2,
					details:
						"Project created as part of my Java training. This project had helped me to fully grasp such concepts as classes, inheritance and implementing interfaces"
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 8,
					title: 'Java Pendu Game',
					category: 'Java Project',
					img: JavaProject,
				},
			],
		},
	},
	{
		ProjectHeader: {
			title: 'Audio Player',
			publishDate: 'October, 2016',
			tags: 'C / Programming',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Audio Player',
				img: CProject,
			}
		],
		ProjectInfo: {
			ClientHeading: 'About Project',
			CompanyInfo: [
				{
					id: 1,
					title: 'Name',
					details: 'Audio Player',
				},
				{
					id: 2,
					title: 'Category',
					details: 'C Project',
				},
				{
					id: 3,
					title: 'Source Code',
					details: 'https://github.com/Coderunner2077/C-AudioPlayer'
				}
			],
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'C',
						'FMOD'
					],
				}
			],
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: 1,
					details:
						'Audio Player created with C programming language and FMOD library',
				},
				{
					id: 2,
					details:
						"Project created as part of my C training. C was the language that introduced me to coding. Even if I stopped programming in C, I think my knowledge of C was and still is a huge boost for my learning process of other languages"
				},
			],
		},
		RelatedProject: {
			title: 'Related Projects',
			Projects: [
				{
					id: 8,
					title: 'Java Pendu Game',
					category: 'Java Project',
					img: JavaProject,
				},
			],
		},
	},
]
