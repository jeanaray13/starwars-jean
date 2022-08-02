import React from "react"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import '../index.css'

const Person = () => {
    /*Variable que obtiene al momento de ingresar la URL*/
    const { id } = useParams();
    
    /*Variable de estado para la obtención de la categoría Personas*/
    const [people, setPeople] = useState([])

    /*Variable que obtiene el valor entero de la URL ingresada*/
    const valor = parseInt(id);

    /*useEffect es utilizado para cargar los datos previamente al momento de cargar el programa*/
    useEffect(()=>{
        /*Carga previa de Personas*/
        async function axiosPeople(){
            let res = await axios('https://swapi.dev/api/people/?format=json')
            let dat = await res.data
            setPeople(dat.results);
        }
        /*Llamada a la función luego de estar cargada de información*/
        axiosPeople();
    },[])

    /*Condicional en caso de que sea un valor diferente al ID o se ingrese un string */
    if (isNaN(id) || valor>=people.length) {
        return(
            <div className="App">
                <div className="info">
                    <h1>Estos no son los droides que está buscando</h1>
                    <img className="img_error" src="https://phantom-marca.unidadeditorial.es/a12ae8bfd4cbe2bbec80cc9c70ea6301/resize/1320/f/jpg/assets/multimedia/imagenes/2022/05/26/16535796722201.jpg" alt="Obi-Wan Kenobi"/>
                </div>
            </div>
        );
    }
    /*En caso de que sea el valor correspondiente al ID */
    else{
        return(
            <div className="App">
                <div className="info">
                    <h1>{people[valor].name}</h1>
                    <h3>Height: {people[valor].height}</h3>
                    <h3>Mass: {people[valor].mass}</h3>
                    <h3>Hair Color: {people[valor].hair_color}</h3>
                    <h3>Eye Color: {people[valor].eye_color}</h3>
                    <h3>Birth Year: {people[valor].birth_year}</h3>
                    <h3>Gender: {people[valor].gender}</h3>
                </div>
            </div>
        );
    }
}

export default Person;