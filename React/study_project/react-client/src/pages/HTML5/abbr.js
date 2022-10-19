import React from "react"

const H5Abbr = () => {

    const str = `
        <abbr title="JavaScript Object Notation">JSON</abbr>
    `
   return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>52 abbrタグ</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>頭文字や省略語に使用できる</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>Abbreviation(略語)</h3>
            <br />
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>Title属性</h3>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>正式な名称など</h3>

            <div　style={{border:"2px solid #139ded"}}>
                <pre>{str}</pre>
                <br />
                <abbr title="JavaScript Object Notation">JSON</abbr>
            </div>

             </>
    )

}

export default H5Abbr;