import React from "react"
import url from "./google.png"

const H5Img = () => {
    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>10 Imgタブ</h1>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>イメージのファイル名を指定する</h2>
            <br></br>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Alt属性※</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>イメージが表示できない場合、代わりに表示されるテキスト</h3>
            <br /><br />
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Src属性</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>イメージファイルの場所をしてする</h3>
            <br /><br />
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Width属性</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>表示幅を指定する</h3>
            <br /><br />
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Height属性</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>高さ指定</h3>
            <br /><br />
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Border属性</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>枠の指定</h3>
            <br /><br />
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Title属性</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>タイトルの指定、マウスカーソルをあてるとポップウィンドウが開く</h3>
            <div style={{border:"2px solid #139ded"}}>
                <img src={url} alt="alt 文字" title="google" width="150" height="150" border="10"></img>
            </div>
        </>
    )

}

export default H5Img;