import React from "react";


const NameList = ({data, favoriteNames, setFavoriteNames}) => {
    return(
        <React.Fragment>
        {
            data.map(baby => 
                <div 
                    className={baby.sex} 
                    key = {baby.id} 
                    onClick={()=>{

                        if(!favoriteNames.some(name => name.id === baby.id)){
                        setFavoriteNames([...favoriteNames, data.find((name) => name.id === baby.id)])}

                    }}>
                        {baby.name}
                    </div>
            )
        }
        </React.Fragment>
    )
}

export default NameList;