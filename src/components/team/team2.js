import { ally, anitha, finacial, leticia, peter, stephe } from "../assest/assest";
 import { LocationOn } from "@mui/icons-material";
 import { Person } from "@mui/icons-material";
import OurNews from "../Latest/latest";
// import Ourproject from "../Ourproject/ourproject";
function Team2(){
    const teamData= [
        {
            picture:  stephe,
            title:'Founder and Executive officer(CEO) ',
            name: "Stephen Isaka",
            location:'Tanzania',
        },
        {
            picture: peter,
            title:'Electrical engineer ',
            name: "Petet Serikali", 
            location:'Tanzania',
        },
        {
            picture: ally,
            title:'Designer ',
            name: "Ally Juma",
            location:'Tanzania',

        },
        {
            picture: anitha,
            title:'Network officer',
            name: "Anitha Alex Rugehubinza",
            location:'Tanzania',
        },
        {
            picture: leticia,
            title:'Public relation officer and Marketing manager ',
            name: "Leticia Mashini Sahani",
            location:'Tanzania',
        },
        {
            picture: finacial,
            title:'System developer',
            name: "Ecast",
            location:'Malawi',
        },
    ];
    return(
        <div className="flex flex-col items-center">

            <div className=' grid grid-cols-2 md:grid-cols-2 sm:grid-2 lg:grid-cols-5  place-content-center lg:w-screen'>
                {teamData.map((team) => (
                    <div id="" className=" m-4 shadow-lg shadow-slate-800 border rounded-xl max-w-80 max-h-72 items-center overflow-hidden">
                        <img src={team.picture} alt='team'
                        className=' w-96 h-32 rounded-4xl'
                        />
                        <p className="text-sm md:text-xl lg:text-xl text-slate-200 text-center underline-offset-2 "> <Person color="secondary"/> {team.name}</p>
                        <p className="text-sm md:text-xl lg:text-xl text-slate-200 text-center ">{team.title}</p>
                        <p className="text-sm md:text-xl lg:text-xl text-slate-200 text-center "> <LocationOn color="secondary"/> {team.location}</p>
                    </div>
                ))}
            </div> 
            
                    <OurNews/>
                    {/* <Ourproject/> */}
                  

          
           
        </div>
    );
}

export default Team2;