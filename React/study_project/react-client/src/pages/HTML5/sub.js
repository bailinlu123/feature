import React from "react"

const H5Sub = () => {

    const str = `
        log<sub>4</sub>X<sup>n</sup>
    `
   return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>53 Subタグ</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>下付き文字</h2>
            <br />
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>supタグ</h3>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>上付き文字</h3>

            <div　style={{border:"2px solid #139ded"}}>
                <pre>{str}</pre>
                <br />
                log<sub>4</sub>X<sup>n</sup>
            </div>

             </>
    )

}

export default H5Sub;