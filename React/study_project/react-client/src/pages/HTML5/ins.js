import React from "react"

const H5Ins = () => {
    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>16 Insタグ</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Inserタグ</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>&lt;ins&gt;   &lt;/ins&gt;</h3>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>挿入されたテキストを表す、下線は引かれる</h3>

            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Delタグ</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>&lt;del&gt;   &lt;/del&gt;</h3>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>削除されたテキストを表す、打消し線は引かれる</h3>

            <div style={{border:"2px solid #139ded"}}>
                <ins>INSERT そうにゅう</ins>
                <br></br><br></br>
                <del>DELETE</del>
            </div>
        </>
    )

}

export default H5Ins;