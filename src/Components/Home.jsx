import { useState, useEffect } from "react";
import axios from 'axios';
import '../index.css';

const Home = (props) => {
    /*Variable de categorías*/
    const data = ['People', 'Films', 'Starships', 'Vehicles', 'Species', 'Planets'];
    
    /*Variable de estado para el menú desplegable*/
    const [estado_visible, setVisible] = useState({estado: 'hidden'});

    /*Variable de estado para el botón Buscar*/
    const [buscar_visible, setBuscarVisible] = useState({estado: 'hidden'});

    /*Variables de estado para la obtención del ID y de la categoría*/
    const [valor, setValor] = useState()
    const [dato, setDato] = useState("People")

    /*Variables de estado para la obtención de los datos de cada caategoría*/
    const [people, setPeople] = useState([]);
    const [film, setFilm] = useState([]);
    const [starship, setStarship] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [species, setSpecies] = useState([]);
    const [planets, setPlanets] = useState([]);

    /*useEffect es utilizado para cargar los datos previamente al momento de cargar el programa*/
    useEffect(()=>{
        /*Carga previa de Personas*/
        async function axiosPeople(){
            let res = await axios('https://swapi.dev/api/people/?format=json')
            let dat = await res.data
            setPeople(dat.results);
        }
        /*Carga previa de Filmes*/
        async function axiosFilm(){
            let res = await axios('https://swapi.dev/api/films/?format=json')
            let dat = await res.data
            setFilm(dat.results);
        }
        /*Carga previa de Nave Estelar*/
        async function axiosStarships(){
            let res = await axios('https://swapi.dev/api/starships/?format=json')
            let dat = await res.data
            setStarship(dat.results);
        }
        /*Carga previa de Vehículos*/
        async function axiosVehicles(){
            let res = await axios('https://swapi.dev/api/vehicles/?format=json')
            let dat = await res.data
            setVehicles(dat.results);
        }
        /*Carga previa de Especies*/
        async function axiosSpecies(){
            let res = await axios('https://swapi.dev/api/species/?format=json')
            let dat = await res.data
            setSpecies(dat.results);
        }
        /*Carga previa de Planetas*/
        async function axiosPlanets(){
            let res = await axios('https://swapi.dev/api/planets/?format=json')
            let dat = await res.data
            setPlanets(dat.results);
        }

        /*Llamada a las funciones luego de estar cargadas de información*/
        axiosPeople();
        axiosFilm();
        axiosStarships();
        axiosVehicles();
        axiosSpecies();
        axiosPlanets();
    },[])

    /*Función donde se cambia el estado de la visibilidad del menú desplegable*/
    const Visible = () =>{
        if(estado_visible.estado === 'hidden'){
            document.getElementById("hide").style.visibility = "visible"
            setVisible({estado:"visible"});
        }
        else{
            document.getElementById("hide").style.visibility = "hidden"
            setVisible({estado:"hidden"});
        }
    }
    
    /*Función en caso de presionar el botón Buscar */
    const BuscarVisible = () => {
        if(buscar_visible.estado === 'hidden'){
            document.getElementById("hide2").style.visibility = "visible"
            setBuscarVisible({estado:"visible"});
        }
    }
    
    /*Función luego de realizar la búsqueda*/
    const OcultarInfo = () => {
        if((valor === undefined && isNaN(valor)) || buscar_visible.estado === 'visible'){
            document.getElementById("hide2").style.visibility = "hidden"
            setBuscarVisible({estado:"hidden"});
        }
    }
    
    /*Función en donde se obtiene la API de cada categoría*/
    function Busqueda(){
        return(
            <>
            {/*Categoría: Personas*/}
            {((dato === data[0]) && (valor>=0 && valor<=people.length-2)) ?
                (<div className="info">
                    <h1>{people[valor].name}</h1>
                    <h3>Homeworld: {planets[parseInt((people[valor].homeworld.substring(people[valor].homeworld.length-2,people[valor].homeworld.length-1))-1)].name}</h3>
                </div>)
                :(
                    /*Categoría: Filmes*/
                    ((dato === data[1]) && (valor>=0 && valor<=film.length-1)) ?
                            (<div className="info">
                                <h1>{film[valor].title}</h1>
                                <h3>Opening Crawl: {film[valor].opening_crawl}</h3>
                                <h3>Director: {film[valor].director}</h3>
                                <h3>Producer: {film[valor].producer}</h3>
                                <h3>Release Date: {film[valor].release_date}</h3>
                            </div>)
                            :(
                                /*Categoría: Nave Estelar*/
                                ((dato === data[2]) && (valor>=0 && valor<=starship.length-1)) ?
                                    (<div className="info">
                                        <h1>{starship[valor].name}</h1>
                                        <h3>Model: {starship[valor].model}</h3>
                                        <h3>Manufacturer: {starship[valor].manufacture}</h3>
                                        <h3>Cost in Credits: {starship[valor].cost_in_credits}</h3>
                                        <h3>Length: {starship[valor].length}</h3>
                                        <h3>Max atmosfering speed: {starship[valor].max_atmosfering_speed}</h3>
                                        <h3>Crew: {starship[valor].crew}</h3>
                                        <h3>Passengers: {starship[valor].passengers}</h3>
                                        <h3>Cargo capacity: {starship[valor].cargo_capacity}</h3>
                                        <h3>Consumables: {starship[valor].consumables}</h3>
                                        <h3>Hyperdrive rating: {starship[valor].hyperdrive_rating}</h3>
                                        <h3>MGLT: {starship.mglt}</h3>
                                        <h3>Starship Class: {starship[valor].starship_class}</h3>
                                    </div>)
                                    :(
                                        /*Categoría: Vehículos*/
                                        ((dato === data[3]) && (valor>=0 && valor<=species.length-1)) ?
                                            (<div className="info">
                                                <h1>{vehicles[valor].name}</h1>
                                                <h3>Model: {vehicles[valor].model}</h3>
                                                <h3>Manufacturer: {vehicles[valor].manufacture}</h3>
                                                <h3>Cost in Credits: {vehicles[valor].cost_in_credits}</h3>
                                                <h3>Length: {vehicles[valor].length}</h3>
                                                <h3>Max atmosfering speed: {vehicles[valor].max_atmosfering_speed}</h3>
                                                <h3>Crew: {vehicles[valor].crew}</h3>
                                                <h3>Passengers: {vehicles[valor].passengers}</h3>
                                                <h3>Cargo capacity: {vehicles[valor].cargo_capacity}</h3>
                                                <h3>Consumables: {vehicles[valor].consumables}</h3>
                                                <h3>Vehicle class: {vehicles[valor].vehicle_class}</h3>
                                            </div>)
                                            :(
                                                /*Categoría: Especies*/
                                                ((dato === data[4]) && (valor>=0 && valor<=species.length-1)) ?
                                                    (<div className="info">
                                                        <h1>{species[valor].name}</h1>
                                                        <h3>Classification: {species[valor].classification}</h3>
                                                        <h3>Designation: {species[valor].designation}</h3>
                                                        <h3>Average height: {species[valor].average_height}</h3>
                                                        <h3>Skin colors: {species[valor].skin_colors}</h3>
                                                        <h3>Hair colors: {species[valor].hair_colors}</h3>
                                                        <h3>Eye colors: {species[valor].eye_colors}</h3>
                                                        <h3>Average lifespan: {species[valor].average_lifespan}</h3>
                                                        <h3>Language: {species[valor].language}</h3>
                                                    </div>)
                                                    :(
                                                        /*Categoría: Planetas */
                                                        ((dato === data[5]) && (valor>=0 && valor<=planets.length-1)) ?
                                                            (<div className="info">
                                                                <h1>{planets[valor].name}</h1>
                                                                <h3>Rotation period: {planets[valor].rotation_period}</h3>
                                                                <h3>Orbital period: {planets[valor].orbital_period}</h3>
                                                                <h3>Diameter: {planets[valor].diameter}</h3>
                                                                <h3>Climate: {planets[valor].climate}</h3>
                                                                <h3>Gravity: {planets[valor].gravity}</h3>
                                                                <h3>Terrain: {planets[valor].terrain}</h3>
                                                                <h3>Surface water: {planets[valor].surface_water}</h3>
                                                                <h3>Population: {planets[valor].population}</h3>
                                                            </div>)
                                                            :(
                                                                <div className="info">
                                                                    <h1>Estos no son los droides que estás buscando</h1>
                                                                    <img className="img_error" src="https://phantom-marca.unidadeditorial.es/a12ae8bfd4cbe2bbec80cc9c70ea6301/resize/1320/f/jpg/assets/multimedia/imagenes/2022/05/26/16535796722201.jpg" alt="Obi-Wan Kenobi"/>
                                                                </div>
                                                            )
                                                    )
                                            )
                                    )
                            )
                )
            }
            </>
        )
    }

    return(
        <>
        {/*Sección superior*/}
        <div className="menu">
            {/*Sección del menú desplegable*/}
            <div className="menu_izq">
                <label className="search_for">Search for: </label>
                <div className="selector">
                    <div className="select_field" onClick={Visible}>
                        <img className="img_user" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="user"/>
                        <p id="txt">People</p>
                        <img className="img_arrow" src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png" alt="arrow"/>
                    </div>
                    <ul className="list" id="hide">
                        {data.map((person,index) =>(
                            <li key={index} className="opciones" onClick={()=>{document.getElementById("txt").innerHTML = person; setDato(person); Visible();}}>
                                <img className="img_user" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="user"/>
                                <p>{person}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/*Sección del ID y del botón Buscar*/}
            <div className="menu_cen">
                <label>Id:</label>
                <div className="id">
                    <input onChange={e => {setValor(parseInt(e.target.value)); OcultarInfo()}} className="txt_id" type="text" name="id"/>                    
                </div>
                <div className="btn_search">
                <button className="search" onClick={BuscarVisible}>Search</button>
                </div>
            </div>
        </div> 
        {/*Sección para la vista de la información obtenida*/}
        <div className="tbl_info" id="hide2">
            <Busqueda/>
        </div>
        </>
    );
}
export default Home;