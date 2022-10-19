import React from "react"

const H5Br = () => {
    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>3 レインブレイク</h1>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}> 改行</h2>
            <h3 style={{background: "#8b9099",display: "block", borderBottom:"1px solid #8b9099"}}> &lt;br&gt;</h3>
            <br></br>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}> 水平線</h2>
            <h3 style={{background: "#8b9099",display: "block", borderBottom:"1px solid #8b9099"}}> &lt;hr&gt;</h3>
            <br/>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}> Width属性</h3>
            <div style={{border:"2px solid #139ded"}}>
                <p>&lt;hr width="90%"&gt;</p>
                <p>&lt;hr width="300"&gt;</p>
            </div>
            <br></br>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}> Size属性</h3>
            <div style={{border:"2px solid #139ded"}}>
                <p>&lt;hr size="20"&gt;</p>
            </div>
            <br></br>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}> Color属性</h3>
            <div style={{border:"2px solid #139ded"}}>
                <p>&lt;hr size="1" color="#ff000"&gt;</p>
            </div>
            <br></br>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}> Align属性</h3>
            <div style={{border:"2px solid #139ded"}}>
                <p>&lt;hr width="300" color="#ff000" size="1" algin="right"&gt;</p>
            </div>
        </>
    )

}

export default H5Br;