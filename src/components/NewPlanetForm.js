import React, { useState } from "react"
import {v4 as uuid} from "uuid"

function NewPlanetForm({addPlanet, url}) {
//---- START form submission stuff----//
    //need a state for the form. set to an object(?)
    const baseForm = {
        name: '',
        climate: '',
        terrain: '',
        population: '',
    }
    const [formData, setFormData] = useState(baseForm)

    //submit event handler. need a POST
    function handleSubmit(event) {
        event.preventDefault()
        fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then((newPlanet) => {
            addPlanet(newPlanet)
            setFormData(formData) //resets form
        })
    }
    //update form state based on user input
    function handleChange(event) {
        //use destructuring to create new object for form/key value pairs
        //to prevent overwriting state variable
        //e.target.name and form's keys have to match for this to work
        setFormData({...formData, [event.target.name]: event.target.value})
    }


//END form submission stuff//
    return(
        <form onSubmit={handleSubmit}>
            {/*rachel added value={form.name} ----- THIS MAKES IT CONTROLLED!! VERY IMPORTANT*/}
            <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name}/>
            <input type="text" name="climate" placeholder="Climate" onChange={handleChange} value={formData.climate}/>
            <input type="text" name="terrain" placeholder="Terrain" onChange={handleChange} value={formData.terrain}/>
            <input type="text" name="population" placeholder="Population" onChange={handleChange} value={formData.population}/>
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;

