import React from "react"

const H5Ol = () => {
    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>12 リスト</h1>
            <br></br>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>順序付きリスト（order list）</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>&lt;ol&gt;        &lt;/ol&gt;</h3>
            <h4 style={{background: "#d495db",display: "block", borderBottom:"1px solid #b070b8"}}>type属性</h4>
            <h4 style={{background: "#95b0db",display: "block", borderBottom:"1px solid #7991b8"}}>1  アラビア数字</h4>
            <h4 style={{background: "#95b0db",display: "block", borderBottom:"1px solid #7991b8"}}>A  アルファベット大文字</h4>
            <h4 style={{background: "#95b0db",display: "block", borderBottom:"1px solid #7991b8"}}>a  アルファベット小文字</h4>
            <h4 style={{background: "#95b0db",display: "block", borderBottom:"1px solid #7991b8"}}>I  ローマ字　大文字</h4>
            <h4 style={{background: "#95b0db",display: "block", borderBottom:"1px solid #7991b8"}}>i  ローマ字　小文字</h4>

            <br></br>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>順序なしリスト(unorder list)</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>&lt;ul&gt;        &lt;/ul&gt;</h3>
            <h4 style={{background: "#d495db",display: "block", borderBottom:"1px solid #b070b8"}}>type属性</h4>
            <h4 style={{background: "#95b0db",display: "block", borderBottom:"1px solid #7991b8"}}>disc</h4>
            <h4 style={{background: "#95b0db",display: "block", borderBottom:"1px solid #7991b8"}}>circle</h4>
            <h4 style={{background: "#95b0db",display: "block", borderBottom:"1px solid #7991b8"}}>square</h4>

            <br></br>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>リストの中身</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>&lt;li&gt;        &lt;/li&gt;</h3>

            <br></br>
            <br></br>

            <br /><br />
            <div style={{border:"2px solid #139ded"}}>
                <ol type="A ">
                    <li>List1</li>
                    <li>List2</li>
                    <li>List2</li>
                </ol>

                <ul type="square">
                    <li>List1</li>
                    <li>List2</li>
                    <li>List2</li>
                </ul>
            </div>
        </>
    )

}

export default H5Ol;