import React from "react"

const H5I = () => {
    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>7 Iタグ</h1>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>文字をイタリック（斜体）にする</h2>
            <h3 style={{background: "#8b9099",display: "block", borderBottom:"1px solid #8b9099"}}> &lt;i&gt;文字列&lt;/i&gt;</h3>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>文字に下線を引く</h2>
            <h3 style={{background: "#8b9099",display: "block", borderBottom:"1px solid #8b9099"}}>&lt;u&gt;文字列&lt;/u&gt;</h3>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>打消し線を引く</h2>
            <h3 style={{background: "#8b9099",display: "block", borderBottom:"1px solid #8b9099"}}>&lt;s&gt;文字列&lt;/s&gt;</h3>
            <h3 style={{background: "#8b9099",display: "block", borderBottom:"1px solid #8b9099"}}>&lt;strike&gt;文字列&lt;/strike&gt;</h3>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>削除された部分であることを示す</h2>
            <h3 style={{background: "#8b9099",display: "block", borderBottom:"1px solid #8b9099"}}>&lt;del&gt;文字列&lt;/del&gt;</h3>

            <div style={{border:"2px solid #139ded"}}>
                <i>iタブ 斜体</i>
                <br /><br />
                <u>uタブ　下線</u>
                <br /><br />
                <s>sタブ 打消し線</s>
                <br /><br />
                <strike>strikeタブ 打消し線</strike>
                <br /><br />
                <del>delタグ　削除</del>
            </div>
        </>
    )

}

export default H5I;