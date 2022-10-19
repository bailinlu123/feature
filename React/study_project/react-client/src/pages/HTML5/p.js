import React from "react"

const H5P = () => {
    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>4 Pタグ</h1>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Paragraphに略、一つの段落を表す。前後に１行分の改行が入る</h2>
            <h3 style={{background: "#8b9099",display: "block", borderBottom:"1px solid #8b9099"}}> &lt;br&gt;との違い</h3>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>属性</h2>
            <h3 style={{background: "#8b9099",display: "block", borderBottom:"1px solid #8b9099"}}>align</h3>
            <div style={{border:"2px solid #139ded"}}>
                <p align="left">align="left"</p>
                <p align="right">align="right"</p>
                <p align="center">align="center"</p>
                <p align="justy">align="justy"</p>
            </div>
        </>
    )

}

export default H5P;