import React from 'react'

export default function SearchInput({search, setSearch}) {
    return (
        <div className="input-container">
            <input className="searchinput"
            placeholder="Search by name"
            onChange={(e) => setSearch(e.target.value)}
           value= {search}
            />
        </div>
    )
}
