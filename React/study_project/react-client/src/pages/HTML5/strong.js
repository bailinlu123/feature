import React from "react"

const H5Strong = () => {
    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>6 Strongタグ</h1>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>文字を太字に強調（あまり使わない、多い場面はCSSを使っています）</h2>
            <h3 style={{background: "#8b9099",display: "block", borderBottom:"1px solid #8b9099"}}> &lt;strong&gt;文字列&lt;/strong&gt;</h3>
            <br></br>
            <h3 style={{background: "#8b9099",display: "block", borderBottom:"1px solid #8b9099"}}> EMタグ</h3>
            <h4 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}> &lt;em&gt;文字列&lt;/em&gt;</h4>
            <br></br>
            <h3 style={{background: "#8b9099",display: "block", borderBottom:"1px solid #8b9099"}}> Bタグ</h3>
            <h4 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}> &lt;b&gt;文字列&lt;/b&gt;</h4>
            <div style={{border:"2px solid #139ded"}}>
                <strong>strongタブ</strong>
                <br /><br />
                <em>emタブ &lt;- Chromeがサポートしていない </em>
                <br /><br />
                <b>bタブ</b>
            </div>
        </>
    )

}

export default H5Strong;