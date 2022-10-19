import React from "react"

const H5H = () => {
    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>5 Hタグ</h1>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Headingに略、見出し用タイトルに私用する</h2>
            <h3 style={{background: "#8b9099",display: "block", borderBottom:"1px solid #8b9099"}}> H1～H6まである</h3>
            <br></br>
            <h4 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}> H1が一番上位の見出し、数字が大きくなるに連れて下位の見出し</h4>
            <div style={{border:"2px solid #139ded"}}>
                <h1>H1見出し</h1>
                <h2>H2見出し</h2>
                <h3>H3見出し</h3>
                <h4>H4見出し</h4>
                <h5>H5見出し</h5>
                <h6>H6見出し</h6>
            </div>
        </>
    )

}

export default H5H;