import Instashop1 from "../images/instashop-project-1.jpg";
import Instashop2 from "../images/instashop-project-2.jpg";
import Instashop3 from "../images/instashop-project-3.jpg";
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
import GraphQLSecure from "../images/graphqlsecure-project-1.jpg"
import GraphQLSecure2 from "../images/graphqlsecure-project-2.png"
import GraphQLSecure3 from "../images/graphqlsecure-project-3.png"



export const singleProjectData = [
	{
		ProjectHeader: {
			title: 'data.npm.title',
			publishDate: 'data.npm.date',
			tags: 'data.npm.tags',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'data.npm.title',
				img: GraphQLSecure,
			},
			{
				id: 2,
				title: 'data.npm.title',
				img: GraphQLSecure2,
			},
			{
				id: 3,
				title: 'data.npm.title',
				img: GraphQLSecure3,
			},

		],
		ProjectInfo: {
			ClientHeading: 'about.project',
			CompanyInfo: [
				{
					id: 1,
					title: 'data.name',
					details: 'data.npm.name',
				},
				{
					id: 2,
					title: 'data.category',
					details: 'projects.category.npm',
				},
				{
					id: 3,
					title: 'data.website',
					details: 'https://www.npmjs.com/package/graphql-secure-data',
				},
				{
					id: 4,
					title: 'data.source',
					details: 'https://github.com/Coderunner2077/GraphQL-Secure-Data'
				}
			],
			Technologies: [
				{
					title: 'data.tools',
					techs: [
						'TypeScript',
						'NodeJS',
						'GraphQL'
					],
				},
			],
			ProjectDetailsHeading: 'projects.heading',
			ProjectDetails: [
				{
					id: 1,
					details: 'data.npm.details_1',
				},
				{
					id: 2,
					details: 'data.npm.details_2'
				},
				{
					id: 3,
					details: 'data.npm.details_3',
					link: {
						url: "https://dev.to/coderunner2077/how-to-limit-graphql-queries-for-better-security-and-performance-5ch4",
						title: "data.npm.link_title"
					}
				},
			],
		},
		RelatedProject: {
			title: 'projects.related',
			Projects: [
				{
					id: 7,
					title: 'data.minichat.title',
					category: 'projects.category.express',
					img: NodeSocketIO,
				},
				{
					id: 5,
					title: 'data.node.title',
					category: 'projects.category.mern',
					img: ReactNodePassport,
				},
			],
		},
	},
	{
		ProjectHeader: {
			title: 'data.instashop.title',
			publishDate: 'data.instashop.date',
			tags: 'data.instashop.tags',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'data.instashop.title',
				img: Instashop1,
			},
			{
				id: 2,
				title: 'data.instashop.title',
				img: Instashop2,
			},
			{
				id: 3,
				title: 'data.instashop.title',
				img: Instashop3,
			},

		],
		ProjectInfo: {
			ClientHeading: 'about.project',
			CompanyInfo: [
				{
					id: 1,
					title: 'data.name',
					details: 'data.instashop.name',
				},
				{
					id: 2,
					title: 'data.category',
					details: 'projects.category.ecommerce',
				},
				{
					id: 3,
					title: 'data.website',
					details: 'https://instashop-seven.vercel.app',
				},
				{
					id: 4,
					title: 'data.source',
					details: 'https://github.com/Coderunner2077/Instashop'
				}
			],
			Technologies: [
				{
					title: 'data.tools',
					techs: [
						"NextJS",
						'React',
						'Redux',
						'Sanity',
						'Stripe',
						'TailwindCSS',
						'JavaScript',
					],
				},
			],
			ProjectDetailsHeading: 'projects.heading',
			ProjectDetails: [
				{
					id: 1,
					details: 'data.instashop.details_1',
				},
				{
					id: 2,
					details: 'data.instashop.details_2'
				},
			],
		},
		RelatedProject: {
			title: 'projects.related',
			Projects: [
				{
					id: 3,
					title: 'data.corunner.title',
					category: 'projects.category.web',
					img: Corunner2,
				},
				{
					id: 4,
					title: 'data.react.title',
					category: 'projects.category.mern',
					img: ReactNodePassport,
				},
				{
					id: 5,
					title: 'data.memory.title',
					category: 'projects.category.react',
					img: ReactMemory,
				},
			],
		},
	},
	{
		ProjectHeader: {
			title: 'data.corunner.title',
			publishDate: 'data.corunner.date',
			tags: 'data.corunner.tags',
		},
		ProjectImages: [
			{
				id: 2,
				title: 'data.corunner.title',
				img: Corunner2,
			},
			{
				id: 3,
				title: 'data.corunner.title',
				img: Corunner1,
			},
			{
				id: 4,
				title: 'data.corunner.title',
				img: Corunner3,
			},

		],
		ProjectInfo: {
			ClientHeading: 'about.project',
			CompanyInfo: [
				{
					id: 1,
					title: 'data.name',
					details: 'data.corunner.name',
				},
				{
					id: 2,
					title: 'data.category',
					details: 'projects.category.web',
				},
				{
					id: 3,
					title: 'data.website',
					details: 'https://corunner.app',
				}
			],
			Technologies: [
				{
					title: 'data.corunner.frontend_tools',
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
					title: 'data.corunner.frontend_tools',
					techs: [
						'NodeJS',
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
			ProjectDetailsHeading: 'projects.heading',
			ProjectDetails: [
				{
					id: 1,
					details: 'data.corunner.details_1',
				},
				{
					id: 2,
					details: 'data.corunner.details_2',
					listItems: [
						"data.corunner.list.1",
						"data.corunner.list.2",
						"data.corunner.list.3",
						"data.corunner.list.4",
						"data.corunner.list.5",
						"data.corunner.list.6",
						"data.corunner.list.7"
					]
				},
			],
		},
		RelatedProject: {
			title: 'projects.related',
			Projects: [
				{
					id: 4,
					title: 'data.react.title',
					category: 'projects.category.mern',
					img: ReactNodePassport,
				},
				{
					id: 5,
					title: 'data.node.title',
					category: 'projects.category.mern',
					img: ReactNodePassport,
				},
				{
					id: 6,
					title: 'data.memory.title',
					category: 'projects.category.react',
					img: ReactMemory,
				},
				{
					id: 7,
					title: 'data.minichat.title',
					category: 'projects.category.express',
					img: NodeSocketIO,
				},
			],
		},
	},
	{
		ProjectHeader: {
			title: 'data.react.title',
			publishDate: 'data.react.date',
			tags: 'data.react.tags',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'data.react.title',
				img: ReactNodePassport,
			},
		],
		ProjectInfo: {
			ClientHeading: 'about.project',
			CompanyInfo: [
				{
					id: 1,
					title: 'data.name',
					details: 'data.react.name',
				},
				{
					id: 2,
					title: 'data.category',
					details: 'projects.category.mern',
				},
				{
					id: 3,
					title: 'data.source',
					details: 'https://github.com/Coderunner2077/React-Node-OAuth2-frontend'
				}
			],
			Technologies: [
				{
					title: 'data.tools',
					techs: [
						'React',
						'HTML',
						'CSS'
					],
				}
			],
			ProjectDetailsHeading: 'projects.heading',
			ProjectDetails: [
				{
					id: 1,
					details: 'data.react.details_1',
				},
				{
					id: 2,
					details:
						'data.react.details_2'
				},
			],
		},
		RelatedProject: {
			title: 'projects.related',
			Projects: [
				{
					id: 5,
					title: 'data.node.title',
					category: 'projects.category.mern',
					img: ReactNodePassport,
				},
				{
					id: 3,
					title: 'data.corunner.title',
					category: 'projects.category.web',
					img: Corunner2,
				},
				{
					id: 6,
					title: 'data.memory.title',
					category: 'projects.category.react',
					img: ReactMemory,
				},
			],
		},
	},
	{
		ProjectHeader: {
			title: 'data.node.title',
			publishDate: 'data.node.date',
			tags: 'data.node.tags',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'data.node.title',
				img: ReactNodePassport,
			},
		],
		ProjectInfo: {
			ClientHeading: 'about.project',
			CompanyInfo: [
				{
					id: 1,
					title: 'data.name',
					details: 'data.node.name',
				},
				{
					id: 2,
					title: 'data.category',
					details: 'projects.category.mern',
				},
				{
					id: 3,
					title: 'data.source',
					details: 'https://github.com/Coderunner2077/React-Node-OAuth2-backend'
				}
			],
			Technologies: [
				{
					title: 'data.tools',
					techs: [
						'Node',
						'Express',
						'Passport',
						'MongoDB'
					],
				}
			],
			ProjectDetailsHeading: 'projects.heading',
			ProjectDetails: [
				{
					id: 1,
					details: 'data.node.details_1',
				},
				{
					id: 2,
					details:
						'data.node.details_2'
				},
			],
		},
		RelatedProject: {
			title: 'projects.related',
			Projects: [
				{
					id: 4,
					title: 'data.react.title',
					category: 'projects.category.mern',
					img: ReactNodePassport,
				},
				{
					id: 3,
					title: 'data.corunner.title',
					category: 'projects.category.web',
					img: Corunner2,
				},
				{
					id: 7,
					title: 'data.minichat.title',
					category: 'projects.category.express',
					img: NodeSocketIO,
				},
			],
		},
	},
	{
		ProjectHeader: {
			title: 'data.memory.title',
			publishDate: 'data.memory.date',
			tags: 'data.memory.tags',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'data.memory.title',
				img: ReactMemory,
			},
			{
				id: 2,
				title: "React Memory Game",
				img: MemoryGame
			}
		],
		ProjectInfo: {
			ClientHeading: 'about.project',
			CompanyInfo: [
				{
					id: 1,
					title: 'data.name',
					details: 'data.memory.name',
				},
				{
					id: 2,
					title: 'data.category',
					details: 'projects.category.react',
				},
				{
					id: 3,
					title: 'data.source',
					details: 'https://github.com/Coderunner2077/React-MemoryGame'
				}
			],
			Technologies: [
				{
					title: 'data.tools',
					techs: [
						'React',
						'HTML',
						'CSS',
						'Tests'
					],
				}
			],
			ProjectDetailsHeading: 'projects.heading',
			ProjectDetails: [
				{
					id: 1,
					details: 'data.memory.details_1',
				},
				{
					id: 2,
					details: 'data.memory.details_2'
				},
			],
		},
		RelatedProject: {
			title: 'projects.related',
			Projects: [
				{
					id: 4,
					title: 'data.react.title',
					category: 'projects.category.mern',
					img: ReactNodePassport,
				},
				{
					id: 10,
					title: 'data.pendu.title',
					category: 'projects.category.java',
					img: JavaProject,
				}
			],
		},
	},
	{
		ProjectHeader: {
			title: 'data.minichat.title',
			publishDate: 'data.minichat.date',
			tags: 'data.minichat.tags',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'data.minichat.title',
				img: ReactNodePassport,
			},
		],
		ProjectInfo: {
			ClientHeading: 'about.project',
			CompanyInfo: [
				{
					id: 1,
					title: 'data.name',
					details: 'data.minichat.title',
				},
				{
					id: 2,
					title: 'data.category',
					details: 'projects.category.express',
				},
				{
					id: 3,
					title: 'data.source',
					details: 'https://github.com/Coderunner2077/Node-MiniChat'
				}
			],
			Technologies: [
				{
					title: 'data.tools',
					techs: [
						'Node',
						'Express',
						'Socket.io',
						'Ejs'
					],
				}
			],
			ProjectDetailsHeading: 'projects.heading',
			ProjectDetails: [
				{
					id: 1,
					details: 'data.minichat.details_1',
				},
				{
					id: 2,
					details:
						'data.minichat.details_2'
				},
			],
		},
		RelatedProject: {
			title: 'projects.related',
			Projects: [
				{
					id: 5,
					title: 'data.node.title',
					category: 'projects.category.mern',
					img: ReactNodePassport,
				},
			],
		},
	},
	{
		ProjectHeader: {
			title: 'data.symfony.title',
			publishDate: 'data.symfony.date',
			tags: 'data.symfony.tags',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'data.symfony.title',
				img: SymfonyPHP,
			},
		],
		ProjectInfo: {
			ClientHeading: 'about.project',
			CompanyInfo: [
				{
					id: 1,
					title: 'data.name',
					details: 'data.symfony.title',
				},
				{
					id: 2,
					title: 'data.category',
					details: 'projects.category.symfony',
				},
				{
					id: 3,
					title: 'data.source',
					details: 'https://github.com/Coderunner2077/Symfony-SocialNetwork'
				}
			],
			Technologies: [
				{
					title: 'data.tools',
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
			ProjectDetailsHeading: 'projects.heading',
			ProjectDetails: [
				{
					id: 1,
					details: 'data.symfony.details_1',
				},
				{
					id: 2,
					details:
						'data.symfony.details_2'
				},
			],
		},
		RelatedProject: {
			title: 'projects.related',
			Projects: [
				{
					id: 9,
					title: 'data.php.title',
					category: 'projects.category.php',
					img: PhpProject,
				},
				{
					id: 3,
					title: 'data.corunner.title',
					category: 'projects.category.web',
					img: Corunner2,
				},
			],
		},
	},
	{
		ProjectHeader: {
			title: 'data.php.title',
			publishDate: 'data.php.date',
			tags: 'data.php.tags',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'data.php.title',
				img: PhpProject,
			},
		],
		ProjectInfo: {
			ClientHeading: 'about.project',
			CompanyInfo: [
				{
					id: 1,
					title: 'data.name',
					details: 'data.php.name',
				},
				{
					id: 2,
					title: 'data.category',
					details: 'projects.category.php',
				},
				{
					id: 3,
					title: 'data.source',
					details: "https://github.com/Coderunner2077/PHP-EspaceMembre"
				}
			],
			Technologies: [
				{
					title: 'data.tools',
					techs: [
						'PHP',
						'HTML',
						'CSS',
						'JavaScript'
					],
				}
			],
			ProjectDetailsHeading: 'projects.heading',
			ProjectDetails: [
				{
					id: 1,
					details: 'data.php.details_1',
				},
				{
					id: 2,
					details: 'data.php.details_2'
				},
			],
		},
		RelatedProject: {
			title: 'projects.related',
			Projects: [
				{
					id: 8,
					title: 'data.symfony.title',
					category: 'projects.category.symfony',
					img: SymfonyPHP,
				},
				{
					id: 4,
					title: 'data.react.title',
					category: 'projects.category.mern',
					img: ReactNodePassport,
				},
			],
		},
	},
	{
		ProjectHeader: {
			title: 'data.pendu.title',
			publishDate: 'data.pendu.date',
			tags: 'data.pendu.tags',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'data.pendu.title',
				img: JavaProject,
			}
		],
		ProjectInfo: {
			ClientHeading: 'about.project',
			CompanyInfo: [
				{
					id: 1,
					title: 'data.name',
					details: 'data.pendu.name',
				},
				{
					id: 2,
					title: 'data.category',
					details: 'projects.category.java',
				},
				{
					id: 3,
					title: 'data.source',
					details: 'https://github.com/Coderunner2077/Java-Pendu'
				}
			],
			Technologies: [
				{
					title: 'data.tools',
					techs: [
						'Java',
						'MVC'
					],
				}
			],
			ProjectDetailsHeading: 'projects.heading',
			ProjectDetails: [
				{
					id: 1,
					details: 'data.pendu.details_1',
				},
				{
					id: 2,
					details: 'data.pendu.details_2'
				},
			],
		},
		RelatedProject: {
			title: 'projects.related',
			Projects: [
				{
					id: 11,
					title: 'data.garage.title',
					category: 'projects.category.java',
					img: JavaProject,
				},
				{
					id: 6,
					title: 'data.memory.title',
					category: 'projects.category.react',
					img: ReactMemory,
				},
			],
		},
	},
	{
		ProjectHeader: {
			title: 'data.garage.title',
			publishDate: 'data.garage.date',
			tags: 'data.garage.tags',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'data.garage.title',
				img: JavaProject,
			}
		],
		ProjectInfo: {
			ClientHeading: 'about.project',
			CompanyInfo: [
				{
					id: 1,
					title: 'data.name',
					details: 'data.garage.name',
				},
				{
					id: 2,
					title: 'data.category',
					details: 'projects.category.java',
				},
				{
					id: 3,
					title: 'data.source',
					details: 'https://github.com/Coderunner2077/Java-TP-Garage'
				}
			],
			Technologies: [
				{
					title: 'data.tools',
					techs: [
						'Java',
						'Classes'
					],
				}
			],
			ProjectDetailsHeading: 'projects.heading',
			ProjectDetails: [
				{
					id: 1,
					details: 'data.garage.details_1',
				},
				{
					id: 2,
					details: "data.garage.details_2"
				},
			],
		},
		RelatedProject: {
			title: 'projects.related',
			Projects: [
				{
					id: 10,
					title: 'data.pendu.title',
					category: 'projects.category.java',
					img: JavaProject,
				},
			],
		},
	},
	{
		ProjectHeader: {
			title: 'data.player.title',
			publishDate: 'data.player.date',
			tags: 'data.player.tags',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'data.player.title',
				img: CProject,
			}
		],
		ProjectInfo: {
			ClientHeading: 'about.project',
			CompanyInfo: [
				{
					id: 1,
					title: 'data.name',
					details: 'data.player.name',
				},
				{
					id: 2,
					title: 'data.category',
					details: 'projects.category.c',
				},
				{
					id: 3,
					title: 'data.source',
					details: 'https://github.com/Coderunner2077/C-AudioPlayer'
				}
			],
			Technologies: [
				{
					title: 'data.tools',
					techs: [
						'C',
						'FMOD'
					],
				}
			],
			ProjectDetailsHeading: 'projects.heading',
			ProjectDetails: [
				{
					id: 1,
					details: 'data.player.details_1',
				},
				{
					id: 2,
					details: "data.player.details_2"
				},
			],
		},
		RelatedProject: {
			title: 'projects.related',
			Projects: [
				{
					id: 10,
					title: 'data.pendu.title',
					category: 'projects.category.java',
					img: JavaProject,
				},
			],
		},
	},
]
