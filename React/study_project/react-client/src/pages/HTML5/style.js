import React from "react"

const H5Style = () => {
    const str=`
    <style>
        thead{
            background-color:red;
        }
    </style>
    `
    
    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>26 Styleタグ</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>styleを記載する</h2>

            <br />
            <div style={{border:"2px solid #139ded"}}>
                <pre>{str}</pre>
            </div>
        </>
    )

}

export default H5Style;