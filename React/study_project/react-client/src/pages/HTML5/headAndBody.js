import React from "react"

const H5HeadBody = () => {

    const kokkaku = `
        <!DOCUTYPE html>
        <html lang="ja">
            <head>
            
            </head>
            <body>

            </body>
        </html>
    `
    console.log(kokkaku.split("\n"))

    // debugger

    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>2 Head and Body</h1>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}> HTML5 骨格</h2>
            <div style={{border:"2px solid #139ded"}}>
                <h5> &lt;!DOCUTYPE html&gt; </h5>
                <h5></h5>
                <h5>&lt;html lang="ja"&gt;</h5>
                <h5>&nbsp;&nbsp;&nbsp;&nbsp;&lt;head&gt;</h5>
                <h5><br/></h5>
                <h5>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/head&gt;</h5>
                <h5><br/></h5>
                <h5>&nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;</h5>
                <h5><br/></h5>
                <h5>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt;</h5>
                <h5> &lt;/html&gt; </h5>
            </div>
        </>
    )

}

export default H5HeadBody;