import React from "react"
import url from "./google.png"

const H5ImgA = () => {
    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>11 イメージリンク</h1>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>イメージにリンクを張る場合</h2>
            <br></br>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Aタグの中にImgタグを入れる</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>
                &lt;a href="http://google.co.jp"&gt;&lt;img src={url} /&gt;&lt;/a&gt;</h3>
            <br /><br />
            <div style={{border:"2px solid #139ded"}}>
                <a href="http://google.co.jp" target="_blank"><img src={url} width="100" height="100" /></a>
            </div>
        </>
    )

}

export default H5ImgA;