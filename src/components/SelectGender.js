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
                checked={selectGender === "m"}
                onChange={(e) => setSelectGender(e.target.value)}
                />
            </div>
            <div className="female">
                <input
                type="radio"
                value="f"
                name="gender"
                checked={selectGender === "f"}
                onChange={(e) => setSelectGender(e.target.value)}
                />
            </div>
            
        </div>
    )
}
