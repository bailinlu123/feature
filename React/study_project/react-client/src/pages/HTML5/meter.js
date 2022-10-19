import React from "react"

const H5Meter = () => {

    const str=`
    <meter value="30" max="100" min="0">進捗</meter>
    <br/>
    <progress></progress>
    <br/>
    <keygen></keygen>
    <br/>
    <output></output>
    `

   return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>40 meterタグ</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>ブラウザによってサポートに差がある</h2>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Meterタグ(Googleしかサポートされていない？)</h2>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Progressタグ(Googleしかサポートされていない？)</h2>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Keygenタグ</h2>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Outputタグ</h2>

            <div　style={{border:"2px solid #139ded"}}>
                <pre>{str}</pre>
                <br />
                <meter value="30" max="100" min="0">進捗</meter>
                <br/>
                <progress></progress>
                <br/>
              </div>
            <br/>

        </>
    )

}

export default H5Meter;