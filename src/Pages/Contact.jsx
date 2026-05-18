import React, { useState } from 'react';
import { Copy, Check, SquareArrowOutUpRight } from 'lucide-react';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("nuttawipha.t@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    return (
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center gap-4 py-10 w-screen h-[30vh] bg-[#baae82]/70 m-0">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold px-5 md:w-[40%]">CONTACT ME</p>
            <div className="text-gray-800 text-sm md:text-base lg:text-lg md:w-[60%]">
                <p className="px-5">If you have any suggestions or further questions, <br class="hidden md:block" />Please feel free to contact me through the channels below.</p>
                <br />
                <div 
                    onClick={handleCopyEmail}
                    className="flex items-center justify-center md:justify-start gap-2 cursor-pointer hover:text-yellow-900 transition-colors mb-2"
                    title="Click to copy email"
                >
                    {copied ? <Check size={20} className="text-green-700" /> : <Copy size={20} />}
                    <p>Email: nuttawipha.t@gmail.com</p>
                    {copied && <span className="text-sm text-green-700 font-bold ml-2">Copied!</span>}
                </div>
                <a 
                    href="https://www.linkedin.com/in/nuttawipha" 
                    target="_blank" 
                    className="flex items-center justify-center md:justify-start gap-2 hover:text-yellow-900 transition-colors w-fit mx-auto md:mx-0 mb-2"
                >
                    <SquareArrowOutUpRight size={20} />  LinkedIn: Nuttawipha Tangroe
                </a>
                <a 
                    href="https://github.com/niing85" 
                    target="_blank" 
                    className="flex items-center justify-center md:justify-start gap-2 hover:text-yellow-900 transition-colors w-fit mx-auto md:mx-0"
                >
                    <SquareArrowOutUpRight size={20} />  GitHub: Nuttawipha
                </a>
            </div>
        </div>
    );
};

export default Contact;