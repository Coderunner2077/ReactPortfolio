import React from "react";
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { useTranslation } from "react-i18next";

const contacts = [
	{
		id: 1,
		name: '76, Avenue des Alliés, 06500 Menton, France',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'coderunner2077@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '+33 (0)7 60 11 71 71',
		icon: <FiPhone />,
	},
];

const ContactDetails = () => {
	const { t } = useTranslation();
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					{t("main.contact.details")}
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;
