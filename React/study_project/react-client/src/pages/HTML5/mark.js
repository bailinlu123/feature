import React from "react"

const H5Mark = () => {


    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>19 Markタグ</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>マーキングして強調表示してくれる(インラインタグ)</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>&lt;mark&gt;   &lt;/mark&gt;</h3>

            <br></br>
                
            <div>
            aaaa<mark>  mark    </mark>bbbb
            </div>
        </>
    )

}

export default H5Mark;