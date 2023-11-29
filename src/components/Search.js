import React from "react"

function Search({search, setSearch}) {

    function handleSearchChange (event) {
       return setSearch(event.target.value)
    }

    return (
        <div>
            <input 
                value={search}
                type="text" 
                onChange={handleSearchChange} 
                placeholder="Search..."/>
        </div>
    );
}

export default Search;