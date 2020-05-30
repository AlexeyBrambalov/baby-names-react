import React from 'react'

export default function FavoriteNames({favoriteNames, setFavoriteNames}) {
    return (
        <div className="favoritenames"> Favourite names:
            {favoriteNames.map(baby => (
                <p className={baby.sex}
                key={baby.id}
                onClick={()=>{
                    setFavoriteNames(favoriteNames.filter(name => name.name !== baby.name))
                }}
                
                >{baby.name}</p>
            ))}
        </div>
    )
}
