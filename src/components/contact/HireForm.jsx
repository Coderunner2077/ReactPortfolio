import React, { useState } from "react";
import http from "../../utils/http";

const selectOptions = [
    'Web Application',
    'React Project',
    'Node.js Project',
    'UI/UX Design'
];

const HireForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleReset = () => {
        setName(""); setEmail(""); setSubject(""); setMessage(""); setLoading(false);
    }

    const handleSubmit = e => {
        setLoading(true);
        e.preventDefault();
        http.post("/hire", { name, email, subject, message })
            .then(() => handleReset())
            .catch(err => { console.log("Error", err); handleReset(); });
    }
    return (
        <div className="w-full lg:w-1/2">
            <div className="leading-loose">
                <form
                    onSubmit={handleSubmit}
                    className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
                >
                    <h5 className=" text-primary-dark dark:text-primary-light text-2xl mb-6">
                        What project are you looking for?
                    </h5>
                    <div className="font-general-regular">
                        <label
                            className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                            htmlFor="name"
                        >
                            Full Name
                        </label>
                        <input
                            className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Your Name"
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
                            Email
                        </label>
                        <input
                            className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                            id="email"
                            name="email"
                            type="text"
                            required
                            placeholder="Your Email"
                            aria-label="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mt-6">
                        <select
                            className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                            id="subject"
                            name="subject"
                            type="text"
                            required=""
                            aria-label="Project Category"
                            onChange={e => setSubject(e.target.value)}
                        >
                            {selectOptions.map((option) => (
                                <option
                                    className="text-normal sm:text-md"
                                    key={option}
                                    value={option}
                                >
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mt-6">
                        <label
                            className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                            id="message"
                            name="message"
                            cols="14"
                            rows="6"
                            aria-label="Message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="mt-6 pb-4 sm:pb-1">
                        <button
                            type="submit"
                            aria-label="Send Request"
                            className="disabled:opacity-40 relative
                                        px-4
                                        sm:px-6
                                        py-2
                                        sm:py-2.5
                                        text-white
                                        bg-indigo-500
                                        hover:bg-indigo-600
                                        rounded-md
                                        focus:ring-1 focus:ring-indigo-900 duration-500"
                            disabled={loading}
                        >Send Request</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HireForm;
