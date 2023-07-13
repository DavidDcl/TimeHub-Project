import FriendsList from "../components/FriendList";
import SideBar from "../components/SideBar";
import cece from "/cece.png";
import killian from "/killian.png";
import nawak from "/nawak.png";
import persona from "/persona.png";
const About = () => {
  return (
    <div className="lg:flex lg:justify-between lg:gap-3 mr-2  ">
      <div id="1/3" className="lg:w-1/6  lg:flex">
        <SideBar />
      </div>
      <div className="mt-5 flex flex-col mx-2 gap-3 md:w-5/6 lg:h-[85vh] lg:overflow-y-auto ">
        <h1 className="text-center text-3xl ">Bienvenue sur Time hub</h1>
        <p className="text-center">
          TimeHub est un réseau social intemporel qui a vu le jour grâce à cinq
          insomniaques chevronnés.
        </p>
        <div className="flex flex-col items-center ">
          <div className="flex flex-col items-center">
            <h1>NAWAK</h1>

            <img src={nawak} alt="" />
            <p>BOUMMMM BEBE !</p>
          </div>
          <div className="flex flex-col items-center">
            <h1>DEGLINGO</h1>
            <img src={killian} alt="" />
            <p>DONNEZ MOI UN LIT</p>
          </div>
          <div className="flex flex-col items-center">
            <h1>THIBAULT</h1>
            <img src={persona} alt="" />
          </div>
          <div className="flex flex-col items-center">
            <h1>DAVID</h1>
            <img src={persona} alt="" />
          </div>
          <div className="flex flex-col items-center">
            <h1>CECE</h1>
            <img src={cece} alt="" />
            <p>CSS DE MERDE </p>
          </div>
          <div className="flex-col flex items-center">
            <p className="text-center">
              On aurait aimé vous faire un tour rapide des fonctionnalités du
              site, mais il est soit trop tard, soit trop tôt.
            </p>
            <iframe
              width="w-11/12 "
              height="200"
              src="https://www.youtube.com/embed/hPr-Yc92qaY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              src="https://giphy.com/embed/3o7aD2d7hy9ktXNDP2"
              width="100%"
              height="100%"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div
        id="3/3"
        className="h-full hidden md:flex md:w-1/6 md:justify-end lg:h-[85vh] lg:overflow-y-auto lg:mt-4 lg:mb-4 "
      >
        <FriendsList />
      </div>
    </div>
  );
};

export default About;
