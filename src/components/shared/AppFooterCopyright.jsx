import React from "react";
function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/Coderunner2077/ReactPortfolio"
					target="__blank"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					React & Tailwind CSS Portfolio
				</a>
				.
				<a
					href="https://coderunner2077.com"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Coderunner
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
