

export default function Hero(){
    // dynamic content
    // const config = {
    //     subtitle: "Frontend Developer | ReactJs Developer"
    //     herodash : "|"
    //     subtitle2 :

    // }




    return <section className="text-center px-5 py-32 bg-secondary" id="about">
        <div>
        <h1 className="text-white text-1xl font-hero-font py-2" >Hi there,  
            <p className=" sky-blue text-7xl"><span className="text-white">I'm</span> Deepika</p>
        {/* using dynamic content in h2 */}
         <h2 className="py-5  text-4xl linear-wipe md:text-3xl">Frontend Developer <span className="sky-blue">|</span> ReactJs Developer</h2>
         <p className="text-2xl text-gray-300 ">As I am a fresher with Skilled Frontend developer with a strong
          Portfolio, passionate about staying updated on frontend tech.
          Collaborative and committed to quality, you thrive in dynamic teams.
          Eager to contribute creativity and bring innovative ideas to life</p>
          </h1>

        </div>
        <div className="py-7">
            <p className="text-2xl font-hero-font text-gray-400">Check My Resume <a className="btn sky-blue hover:text-white" target="_blank" href="https://indigo-dion-65.tiiny.site/"><button className="text-black bg-button hover:text-blue-800 text text-3xl">View</button></a></p>
        </div>
        
    </section>
}