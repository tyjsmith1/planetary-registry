import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {
//---- START rendering planet list-----//    
    const url = "http://localhost:8085/planets"
    const [planets, setPlanets] = useState([])

    useEffect(()=>{
        //fetch for the planet list
        fetch(url)
        .then(response => response.json())
        .then(planets => setPlanets(planets))
    },[])
//END rendering planet list//  

//---- START form submission stuff----//
    //need a function to add planet. pass function down
    function addPlanet (newPlanet) {
        setPlanets([...planets,newPlanet])
    }
//END form submission stuff//


//---- START Search filter stuff----//
const [search,setSearch] = useState('')

    const filteredPlanets = planets.filter((curPlanet) => {
        //if currentPlant contains substring of search
        curPlanet.name.toLowerCase().includes(search.toLocaleLowerCase())

        // return true
    //else
        //return false
    // return planet.name.toLowerCase().includes(search.toLocaleLowerCase())

    //another way to do it
    // let curPlanetName = curPlanet.name.toLowerCase()
    // let substringSearch = search.toLocaleLowerCase()
    // if(curPlanetName.includes(substringSearch))
    //yet ANOTHER way to do it
    // (planet.name.toUpperCase().includes(searchString.toUpperCase())
    //             || planet.climate.toUpperCase().includes(searchString.toUpperCase())
    //             || planet.terrain.toUpperCase().includes(searchString.toUpperCase())
    //             || planet.population.toUpperCase().includes(searchString.toUpperCase()))
        })
//END  Search stuff//

    return(
        <div className="registry">
            <Search search={search} setSearch={setSearch}/>
            <div className="content">
                <PlanetList filteredPlanets={filteredPlanets}/>
                <NewPlanetForm addPlanet={addPlanet} url={url}/>
            </div>
        </div>
    )
}

export default Registry;

// Fill out and submit the form to add a new planet. 
// This should add the new planet to the table as well 
// as post the new planet to the backend API for persistence.