import React, { useState, useRef, useEffect } from "react";
import http from "../../utils/http";
import { useTranslation } from "react-i18next";
import { addAlert } from "../../store/actions";
import { useDispatch } from "react-redux";
import { formatError } from "../../utils";
import { LoadingButton } from "../UI";

const selectOptions = [
    'form.project.app',
    'form.project.static',
    'form.project.e_commerce',
    'form.project.frontend',
    'form.project.backend',
    'form.project.ui',
    'form.project.graphql',
    'form.project.rest'

];

const HireForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const timerRef = useRef<number>(null);

    const resetButton = () => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setLoading(false);
        }, 2000);
    }

    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    });

    const handleReset = () => {
        setName(""); setEmail(""); setSubject(""); setMessage(""); setLoading(false);
    }

    const handleSubmit = e => {
        setLoading(true);
        e.preventDefault();
        http.post("/hire", { name, email, subject, message })
            .then((res) => { dispatch(addAlert([{ type: "success", message: t(res.data.message) }])); handleReset() })
            .catch(err => { dispatch(addAlert([{ type: "error", message: t(formatError(err)) }])); resetButton(); });
    }
    return (
        <div className="w-full h-full">
            <div className="">
                <form
                    onSubmit={handleSubmit}
                    className="max-w-xl m-4 p-2 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
                >
                    <h5 className=" text-primary-dark dark:text-primary-light text-2xl mb-2">
                        {t("form.title.hire")}
                    </h5>
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
                    <div className="mt-2">
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
                    <div className="mt-2">
                        <select
                            className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                            id="subject"
                            name="subject"
                            required={true}
                            aria-label="Project Category"
                            onChange={e => setSubject(e.target.value)}
                        >
                            {selectOptions.map((option) => (
                                <option
                                    className="text-normal sm:text-md"
                                    key={option}
                                    value={option}
                                >
                                    {t(option)}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-2">
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
                            rows={5}
                            aria-label="Message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <div className="mt-2 pb-2 sm:pb-1">
                        <LoadingButton width={160} loading={loading} top="15px">
                            {t("form.send.request")}
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HireForm;
