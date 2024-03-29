import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import http from "../../utils/http";
import { formatError } from "../../utils";
import { useDispatch } from "react-redux";
import { addAlert } from "../../store/actions";
import { LoadingButton } from "../UI";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const timerRef: { current: number | null } = useRef(null);

	const resetButton = () => {
		clearTimeout(timerRef.current as number);
		timerRef.current = setTimeout(() => {
			setLoading(false);
		}, 2000);
	}

	useEffect(() => {
		return () => clearTimeout(timerRef.current as number);
	});

	const handleSubmit = e => {
		setLoading(true);
		e.preventDefault();
		http.post("/contact", { name, email, subject, message })
			.then((res) => { dispatch(addAlert([{ type: "success", message: t(res.data.message) }])); handleReset() })
			.catch(err => { dispatch(addAlert([{ type: "error", message: t(formatError(err)) }])); resetButton(); });
	}

	const handleReset = () => {
		setName(""); setEmail(""); setSubject(""); setMessage(""); setLoading(false);
	}

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={handleSubmit}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						{t("form.title.contact")}
					</p>
					<div className="font-general-regular">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="name"
						>
							{t("form.name")}
						</label>
						<input
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="name"
							name="name"
							type="text"
							required
							placeholder={t("form.placeholder.name")}
							aria-label="Name"
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="email"
						>
							{t("form.email")}
						</label>
						<input
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="email"
							name="email"
							type="text"
							required
							placeholder={t("form.placeholder.email")}
							aria-label="Email"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="subject"
						>
							{t("form.subject")}
						</label>
						<input
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="subject"
							name="subject"
							type="text"
							required
							placeholder={t("form.placeholder.subject")}
							aria-label="Subject"
							value={subject}
							onChange={e => setSubject(e.target.value)}
						/>
					</div>

					<div className="mt-6">
						<label
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
							htmlFor="message"
						>
							{t("form.message")}
						</label>
						<textarea
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							id="message"
							name="message"
							cols={14}
							rows={6}
							aria-label="Message"
							value={message}
							onChange={e => setMessage(e.target.value)}
						></textarea>
					</div>
					<div className="mt-6">
						<LoadingButton width={160} loading={loading}>
							{t("form.send.message")}
						</LoadingButton>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
