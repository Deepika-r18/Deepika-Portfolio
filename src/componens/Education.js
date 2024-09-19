export default function Education(){
    return <section className="font-hero-font bg-primary " id="education">
        <div>
            <div className="text-center">
                <h1 className="text-5xl py-3 sky-blue font-bold linear-wipe ">Education</h1>
                <p className='p-2 text-2xl text-gray-400'>My education has been a journey of self-discovery and growth.</p>
                <p className=' py-3 text-2xl text-gray-400'>My educational deatils are as follows.</p>

            </div>
            <div className=" mx-24 md:mx-96">
                <div className="card-education w-[300px] md:w-[700px] my-3 px-3 text-center animation">
                    <h1 className="font-bold text-white py-2 text-2xl hover:text-gray-400">Master of Computer Applications</h1>
                    <p className="text-gray-200 ">M.A.M College Of Engineering</p>
                    <p className="text-blue-300">2022 - 2024</p>
                    <p className="text-white py-2 "><span className="text-blue-300 ">Grade:</span> 8.0 CGPA</p>
                    {/* <p>A Master of Computer Applications (MCA) is a postgraduate degree designed to provide in-depth knowledge of computer science and its practical applications. It covers advanced topics such as software development, programming, and systems management. The program equips students with skills needed for careers in IT and software engineering. Graduates are prepared for roles in technology development, analysis, and management.</p> */}
                </div>

                <div className="card-education  w-[300px] md:w-[700px] my-0 px-3 text-center">
                    <h1 className="font-bold text-blue-950 text-white py-2 text-2xl hover:text-gray-400">Bachelor of Computer Applications</h1>
                    <p className="text-gray-400 ">Srimad Andavan Arts and Science College</p>
                    <p className="text-blue-300 ">2019 - 2022</p>
                    <p className="text-white py-2"><span className="text-blue-300">Grade:</span>  8.9 CGPA</p>
                    {/* <p>A Master of Computer Applications (MCA) is a postgraduate degree designed to provide in-depth knowledge of computer science and its practical applications. It covers advanced topics such as software development, programming, and systems management. The program equips students with skills needed for careers in IT and software engineering. Graduates are prepared for roles in technology development, analysis, and management.</p> */}
                </div>
            </div>
            
        </div>
    </section>




}