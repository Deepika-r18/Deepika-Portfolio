// front end images
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/js.png";
import bootstrap from "../assets/bootstrap.png";
import react from "../assets/react.png";
import jquery from "../assets/jquery.png";

// others images
import git from "../assets/git.png";
import github from "../assets/github.png";
import vscode from "../assets/vscode.png";
import vite from "../assets/vite.png";
import Figma from "../assets/figma.png";

export default function Skills(){
    return <section className="flex flex-col px-20 py-5 justify-center bg-secondary text-white font-hero-font" id="skills">
            <div className="text-center">
                <h1 className="text-5xl py-5 sky-blue linear-wipe ">Skills</h1>
                <p className='py-7 text-3xl text-gray-400'>Here are some of my skills on which i have learnt</p>
            </div>
            <div className="flex justify-evenly py-5 flex-col md:flex-row gap-8">
                <div className="w-1/3 text-center  card px-3">
                    <h1 className="text-3xl py-5">Frontend</h1>
                    <div className="flex flex-col md:flex-row justify-center gap-10">
                        <div className=" flex skills">
                            <img className="w-[30px] p-1" src={html}/><span className=" px-2 py-2 hover:text-gray-400 ">Html5</span>
                        </div>
                        <div className=" flex skills">
                            <img className="w-[30px] p-1" src={css}/><span className=" px-2 py-2  hover:text-gray-400 ">Css3</span>
                        </div>
                        <div className=" flex skills">
                            <img className="w-[30px] p-1" src={javascript}/><span className=" px-2 py-2 hover:text-gray-400 ">Javascript</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row  justify-center gap-10 py-3">
                        <div className=" flex skills">
                            <img className="w-[30px] p-1" src={bootstrap}/><span className=" px-2 py-2 hover:text-gray-400 ">BootStrap</span>
                        </div>
                        <div className=" flex skills">
                            <img className="w-[30px] p-1" src={react}/><span className=" px-2 py-2 hover:text-gray-400 ">ReactJS</span>
                        </div>
                        {/* <div className=" flex skills">
                            <img className="w-[30px] p-1" src={jquery}/><span className=" px-2 py-2 ">jQuery</span>
                        </div> */}
                    </div>
                    <div className="flex flex-col md:flex-row  justify-center gap-10 py-3">
                        <div className=" flex skills">
                            <img className="w-[30px] p-1" src={jquery}/><span className=" px-2 py-2 hover:text-gray-400 ">jQuery</span>
                        </div>
                        

                    </div>
                </div>
                <div className="w-1/3 text-center card px-5">
                    <h1 className="text-3xl py-5 text-white ">Others</h1>
                    <div className="flex flex-col md:flex-row  justify-center gap-10">
                        <div className=" flex skills">
                            <img className="w-[30px] p-1" src={git}/><span className=" px-2 py-2 hover:text-gray-400 ">Git</span>
                        </div>
                        <div className=" flex skills">
                            <img className="w-[30px] p-1" src={github}/><span className=" px-2 py-2 hover:text-gray-400 ">GitHub</span>
                        </div>
                        <div className=" flex skills">
                            <img className="w-[30px] p-1" src={vscode}/><span className=" px-2 py-2 hover:text-gray-400 ">VScode</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row  justify-center gap-10 py-3">
                        <div className=" flex skills">
                            <img className="w-[30px] p-1" src={vite}/><span className=" px-2 py-2 hover:text-gray-400 ">Vite</span>
                        </div>
                        <div className=" flex skills">
                            <img className="w-[30px] p-1" src={Figma}/><span className=" px-2 py-2 ">Figma</span>
                        </div>
                        {/* <div className=" flex skills">
                            <img className="w-[30px] p-1" src={html}/><span className=" px-2 py-2 ">Html5</span>
                        </div> */}
                    </div>
                    {/* <div className="flex flex-col md:flex-row  justify-center gap-10 py-3">
                        <div className=" flex skills">
                            <img className="w-[30px] p-1" src={jquery}/><span className=" px-2 py-2 ">jQuery</span>
                        </div>

                    </div> */}
                    
                    
                </div>
            </div>
    </section>




}    