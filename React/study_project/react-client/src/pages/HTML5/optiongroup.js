import React from "react"

const H5Optiongroup = () => {

    const str=`
    <label>勉強したい言語
    <select>
        <optgroup label="web">
            <option>HTML</option>
            <option>CSS</option>
            <option>JavaScript</option>
        </optgroup>
        <optgroup label="Script">
            <option>PHP</option>
            <option>Python</option>
            <option>Ruby</option>
        </optgroup>
        <optgroup label="DB">
            <option>Mysql</option>
            <option>Oracle</option>
            <option>SQLite</option>
        </optgroup>
    </select>
    </ label>
    `

   return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>38 OptionGroupタグ</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>オプションリストをグループ化する</h2>
            <div　style={{border:"2px solid #139ded"}}>
                <pre>{str}</pre>
                <br />
                <label>勉強したい言語
                <select>
                    <optgroup label="web">
                        <option>HTML</option>
                        <option>CSS</option>
                        <option>JavaScript</option>
                    </optgroup>
                    <optgroup label="Script">
                        <option>PHP</option>
                        <option>Python</option>
                        <option>Ruby</option>
                    </optgroup>
                    <optgroup label="DB">
                        <option>Mysql</option>
                        <option>Oracle</option>
                        <option>SQLite</option>
                    </optgroup>
                    
                </select>
                </label>
            </div>
            <br/>

        </>
    )

}

export default H5Optiongroup;