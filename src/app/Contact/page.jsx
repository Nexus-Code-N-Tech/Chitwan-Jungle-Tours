"use client";

import { useState } from "react";
import { MuseoModerno } from "next/font/google";
import { Poppins } from "next/font/google";

const museoModerno = MuseoModerno({
    weight: "600",
    subsets: ["latin"]
});

const poppins = Poppins({
    weight: "400",
    subsets: ["latin"]
});

export default function page() {
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [agree, setAgree] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        if (!agree) {
            setError("Please agree to send your information for contact purposes");
            return;
        }
        setError("");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "21b3f499-e542-4103-8662-18c80f642fd6",
                fname: e.target.fname.value,
                lname: e.target.lname.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                country: e.target.country.value,
                city: e.target.city.value,
                zip: e.target.zip.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            setSubmitted(true);
            setAgree(false);
            e.target.reset();
        }
    }

    return (
        <>
            <link rel="icon" href="contact-favicon.svg" />

            <div className="main-contact-image relative w-full h-64 md:h-96 lg:h-128">
                <img src="nepal-mountain-shrine 1.svg" alt="Mountain Shrine" className="w-full h-full object-cover" />
                <div className="contact-division inset-0 absolute flex items-end justify-center p-6 text-white">
                    <h1 className={`${museoModerno.className} font-bold text-5xl`}>CONTACT US</h1>
                </div>
            </div>

            <div className="main-container w-full h-full flex flex-col md:flex-row justify-between p-2">
                <div className="form-container w-full md:w-1/2 p-6 bg-gray-100 rounded-lg">
                    <h1 className="font-extrabold text-4xl pt-4">Get in <span className="text-[#6de1c2]">Touch</span></h1>
                    <p className={`${poppins.className} mt-2 mb-6`}>If you have any queries or would like to know more about our services, please feel free to send us a message. We look forward to hearing from you!</p>

                    <form onSubmit={handleSubmit}>
                        First Name: <input type="text" placeholder="First Name" className="border-2 rounded-md pl-6" name="fname" required /><sup className="text-red-500 text-xl"> *</sup><br /><br />
                        Last Name: <input type="text" placeholder="Last Name" className="border-2 rounded-md pl-6" name="lname" required /><sup className="text-red-500 text-xl"> *</sup><br /><br />
                        E-mail: <input type="email" placeholder="example@gmail.com" className="border-2 rounded-md pl-16" name="email" required /><sup className="text-red-500 text-xl"> *</sup><br /><br />
                        Phone: <input type="number" placeholder="Contact Number" className="border-2 rounded-md pl-16" name="phone" /><br /><br />
                        Country: <input type="text" placeholder="eg: Nepal" className="border-2 rounded-md pl-12" required name="country" /><sup className="text-red-500 text-xl"> *</sup><br /><br />
                        City: <input type="text" placeholder="eg: Kathmandu" className="border-2 rounded-md pl-20" required name="city" /><sup className="text-red-500 text-xl"> *</sup><br /><br />
                        ZipCode: <input type="number" placeholder="eg: 44006" className="border-2 rounded-md pl-11" name="zip" /><br /><br />
                        Message:<span className="text-red-500 text-xl">*</span><br />
                        <textarea
                            name='message'
                            placeholder='Send Message'
                            required
                            className="w-full p-2 rounded-md resize-none mb-4"
                            style={{ resize: 'none' }}
                        /><br />

                        <input type="checkbox" className="mb-4" checked={agree} onChange={() => setAgree(!agree)} /> I agree to send my Information for contact purposes.

                        <div className="mb-4">
                            <button type='submit' className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md mr-2">Submit</button>
                            <button type='reset' className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded-md text-white">Reset</button>
                        </div>
                    </form>

                    {submitted && (
                        <div className="bg-green-300 text-green-800 mt-2 p-4 mb-4 rounded-md">Your Message Has Been Submitted !!</div>
                    )}
                    {error && (
                        <div className="bg-red-300 text-red-800 mt-2 p-4 mb-4 rounded-md">{error}</div>
                    )}
                </div>

                <div className="image-container w-full md:w-1/2 relative overflow-hidden hidden md:block">
                    <img src="contact-scenery.jpg" className="w-full h-full object-cover rounded-lg" alt="Contact Scenery" />
                </div>
            </div>
        </>
    );
}
