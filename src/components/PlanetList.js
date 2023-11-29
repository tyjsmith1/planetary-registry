import React from "react"
import Planet from "./Planet"

function PlanetList({filteredPlanets}) {

    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {/** Render a list of <Planet> components here. */}
                {filteredPlanets.map((planet) => (
                    <Planet key={planet.id} planet={planet}/>
                ))}
            </tbody>
        </table>
    );
}

export default PlanetList;