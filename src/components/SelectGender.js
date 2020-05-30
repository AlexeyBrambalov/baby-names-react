import React from 'react'

export default function SelectGender({selectGender, setSelectGender}) {
    return (
        <div className="selectgender">
     
            <div className="all">
                <input
                type="radio"
                value="all"
                name="gender"
                checked={selectGender === "" || selectGender ==="all"}
                onChange={(e) => setSelectGender(e.target.value)}
                />
            </div>
            <div className="male">
                <input
                type="radio"
                value="m"
                name="gender"
                onChange={(e) => setSelectGender(e.target.value)}
                />
            </div>
            <div className="female">
                <input
                type="radio"
                value="f"
                name="gender"
                onChange={(e) => setSelectGender(e.target.value)}
                />
            </div>
            
        </div>
    )
}
