import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline , IoMailOutline, } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export default function Contact(){
    return <section className=" flex flex-col px-20 padding justify-center bg-teritory text-white font-hero-font" id="contact">
        <div>
            <h1 className="py-5 text-1xl text-center text-white font-bold ">For More Details</h1>
            <h1 className="text-4xl text-center  sky-blue font-semibold linear-wipe">Contact Me!</h1>
        </div>
        <div className="flex justify-center py-7 gap-3">
            <a target="_blank" href="https://wa.me/9944945347" className="hover:text-black"><FaWhatsapp size={35}/></a>
            <a target="_blank" href="tel: +994 494 5347" className="hover:text-black "><IoCallOutline size={35}/></a>
            <a target="_blank" href="https://www.instagram.com/deepika._ravindran/?hl=en" className="hover:text-black "><BsInstagram size={35}/></a>
            <a target="_blank" href="mailto:deepikaravindran1801@gmail.com" className="hover:text-black "><IoMailOutline size={35}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/deepika-ravindran-727798281/" className="hover:text-black "><AiOutlineLinkedin size={35}/></a>
            <a target="_blank" href="https://github.com/Deepika-r18" className="hover:text-black "><FaGithub size={35}/></a>
        </div>
        

        
        <div>
            <h4 className=" text-1xl text-center  sky-blue hover:text-black ">Email :  deepikaravindran1801@gmail.com</h4>
            <h4 className="py-5 text-1xl text-center  sky-blue hover:text-black">Phone Number :  9944945347</h4>
            <h1 className="py-5 text-1xl text-center  text-black ">Thank you for exploring my work</h1>
        </div>
    </section>



} 