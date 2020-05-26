import React from "react";


const NameList = ({data}) => {
    return(
        <React.Fragment>
        {
            data.map(baby => 
                <div className={baby.sex} key = {baby.id}>
                    {baby.name}
                </div>
            )
        }
        </React.Fragment>
    )
}

export default NameList;