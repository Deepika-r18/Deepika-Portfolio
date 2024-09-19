import Htmlandcss from '../assets/Html & Css.png';
import Todolists from '../assets/Todo-Lists.png';
import Notes from '../assets/notes.png';
import ChowFood from '../assets/chow-food.png';
import voice from '../assets/voice converter.png';



export default function Projects(){
// dynamic
    // const config = {
    //     projects :[
    //         {
    //             link: 'https://deepika-r18.github.io/Notes/'
    //         }
    //     ]
    // }

    return <section className="flex flex-col px-20 py-5 justify-center bg-primary text-white font-hero-font" id='projects'>
        <div>
            <div className="text-center">
                <h1 className="text-5xl py-5 sky-blue linear-wipe">Projects</h1>
                <p className='py-3 text-3xl text-gray-300'>These are some of my projects</p>
                <p className='text-3xl text-gray-300'>Check them out...</p>

            </div>
            
        </div>
        
        <div className='flex flex-col md:flex-row px-10 py-20 gap-7'>
            <div className='relative textone '>
                <img className='h-[200px]' src={ChowFood}/>
                <div className=' my-2'>
                    <p className='text-center py-1'>Chow-Food Website</p>
                    <p className='sky-blue text-center'>Using Html5, Css3 & ReactJS</p>
                    <div className='flex flex-col justify-around md:flex-row'>
                        <a target='_blank' href='https://deepika-r18.github.io/chow-food/' className='flex justify-center img-anime'><button className='bg-prjbuttonone'>View Live App</button></a>
                        <a target='_blank' href='https://github.com/Deepika-r18/chow-food' className='flex justify-center img-anime'><button className='bg-prjbutton'>View Code</button></a>
                    </div>
                </div>
            </div>
            <div className='relative textone '>
                <img className='h-[200px] ' src={Todolists}/>
                <div className=' my-2 '>
                    <p className='text-center py-1'>Chow-Food</p>
                    <p className='sky-blue text-center'>Html5 and Css3</p>
                    <div className='flex flex-col justify-around md:flex-row'>
                        <a target='_blank' href='https://deepika-r18.github.io/chow-food/' className='flex justify-center img-anime'><button className='bg-prjbuttonone'>View Live App</button></a>
                        <a target='_blank' href='https://github.com/Deepika-r18/chow-food' className='flex justify-center img-anime'><button className='bg-prjbutton'>View Code</button></a>
                    </div>
                </div>
            </div>
            <div className='relative textone '>
                <img className='h-[200px] ' src={Htmlandcss}/>
                <div className=' my-2 '>
                    <p className='text-center py-1'>An E-commerce Website</p>
                    <p className='sky-blue text-center'>Using Html5 and Css3</p>
                    <div className='flex flex-col justify-around md:flex-row'>
                        <a target='_blank' href='https://deepika-r18.github.io/chow-food/' className='flex justify-center img-anime'><button className='bg-prjbuttonone'>View Live App</button></a>
                        <a target='_blank' href='https://github.com/Deepika-r18/chow-food' className='flex justify-center img-anime'><button className='bg-prjbutton'>View Code</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row px-10 py-0 gap-7'>
            <div className='relative textone '>
                <img className='h-[200px] ' src={voice}/>
                <div className=' my-2 '>
                    <p className='text-center py-1'>A Voice-Converter</p>
                    <p className='sky-blue text-center'>Using Html5, Css3 & Javascript</p>
                    <div className='flex flex-col justify-around md:flex-row'>
                        <a target='_blank' href='https://deepika-r18.github.io/voice-converter/' className='flex justify-center img-anime'><button className='bg-prjbuttonone'>View Live App</button></a>
                        <a target='_blank' href='https://github.com/Deepika-r18/voice-converter' className='flex justify-center img-anime'><button className='bg-prjbutton'>View Code</button></a>
                    </div>
                </div>
            </div>
            <div className='relative textone '>
                <img className='h-[200px] ' src={Todolists}/>
                <div className=' my-2 '>
                    <p className='text-center py-1'>A Todo-Lists</p>
                    <p className='sky-blue text-center'>Using Html5, Css3 & Javascript </p>
                    <div className='flex flex-col justify-around md:flex-row'>
                        <a target='_blank' href='https://deepika-r18.github.io/Todo-Lists/' className='flex justify-center img-anime'><button className='bg-prjbuttonone'>View Live App</button></a>
                        <a target='_blank' href='https://github.com/Deepika-r18/Todo-Lists' className='flex justify-center img-anime'><button className='bg-prjbutton'>View Code</button></a>
                    </div>
                </div>
            </div>
            <div className='relative textone '>
                <img className='h-[200px] ' src={Notes}/>
                <div className=' my-2 '>
                    <p className='text-center py-1'>A Notes App</p>
                    <p className='sky-blue text-center'>Using Html5, Css3 & Javascript</p>
                    <div className='flex flex-col justify-around md:flex-row'>
                        <a target='_blank' href='https://deepika-r18.github.io/Notes/' className='flex justify-center img-anime'><button className='bg-prjbuttonone'>View Live App</button></a>
                        <a target='_blank' href='https://github.com/Deepika-r18/Notes' className='flex justify-center img-anime'><button className='bg-prjbutton'>View Code</button></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

}