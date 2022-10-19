import React from "react"

const H5Pre = () => {

    const kokkaku = `
    <!DOCUTYPE html>
    <html lang="ja">
        <head>
        
        </head>
        <body>

        </body>
    </html>
`

    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>17 Preタグ</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Preformatted Text</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>&lt;pre&gt;   &lt;/pre&gt;</h3>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>スペースや改行をそのまま表示する</h3>

            <div style={{border:"2px solid #139ded"}}>
                <pre>{kokkaku}</pre>
            </div>
        </>
    )

}

export default H5Pre;