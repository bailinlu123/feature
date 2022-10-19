import React from "react"

const H5Ruby = () => {

    const str =`
    <ruby>
        漢
        <rp>(</rp>
        <rt>かん</rt>
        <rp>)</rp>
        字
        <rp>(</rp>
        <rt>じ</rt>
        <rp>)</rp>
    </ruby>
    `
    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>20 Rubyタグ</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>ルビを表す</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>&lt;ruby&gt;   &lt;/ruby&gt;</h3>

            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>&lt;rp&gt;タグRuby Parenthesesの略</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>未対応ブラウザで表示する文字を囲む</h3>
                
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>&lt;rt&gt;タグRuby Textの略</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>フリガナを記述</h3>
            
            <div　style={{border:"2px solid #139ded"}}>
            <pre>{str}</pre>
            </div>
            <br/>

            <div　style={{border:"2px solid #139ded"}}>
                <ruby>
                    漢
                    <rp>(</rp>
                    <rt>かん</rt>
                    <rp>)</rp>
                    字
                    <rp>(</rp>
                    <rt>じ</rt>
                    <rp>)</rp>
                </ruby>     
            </div>
        </>
    )

}

export default H5Ruby;