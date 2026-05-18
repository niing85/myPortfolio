import React from 'react';
import { CircleUserRound } from 'lucide-react';

const About = () => {
    return (
                <div className="bg-[#baae82]/70 flex flex-col md:flex-row items-center p-6 my-[150px] md:p-10 m-5 shadow-xl gap-8">
                    <div className="flex flex-col items-center gap-4 md:w-[40%]">
                        <p className="text-xl md:text-2xl lg:text-3xl font-bold px-5">ABOUT ME</p>
                        <CircleUserRound size={100} className="text-yellow-600/90"/>
                    </div>
                    <div className="text-white text-center md:text-left">
                        <p className="text-xl font-semibold text-gray-900 mb-4">My name is Nuttawipha Tangroe. <br />I graduated from Kasetsart University Bangken Campus.</p>
                        <br />
                        <p className="text-gray-800">I'm looking for an entry-level Frontend Developer position to expand my knowledge of HTML, JavaScript, and CSS.</p>
                        <br />
                        <p className="text-gray-700 italic text-sm md:text-base">I am interested in programming ... because I love the feeling of writing code and seeing it displayed on the screen. If I have a problem, I will try to fix it. I believe it's not that I can't do it, it's just that I don't know how.</p>
                    </div>
                </div>
    );
};

export default About;

//คำโปรย
//experience
//