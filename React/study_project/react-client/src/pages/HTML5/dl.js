import React from "react"

const H5Dl = () => {
    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>13 定義リスト</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Definition List,Definition Listの略</h2>
            
            <br></br>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>定義リスト</h3>
            <h4 style={{background: "#d495db",display: "block", borderBottom:"1px solid #b070b8"}}>&lt;dl&gt;&lt;/dl&gt;</h4>
            
            <br></br>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>&lt;dt&gt; タブ</h3>
            <h4 style={{background: "#d495db",display: "block", borderBottom:"1px solid #b070b8"}}>Definition termの略</h4>

            <br></br>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>&lt;dd&gt; タブ</h3>
            <h4 style={{background: "#d495db",display: "block", borderBottom:"1px solid #b070b8"}}>Definition descriptionの略</h4>

            <div style={{border:"2px solid #139ded"}}>
                <dl>
                    <dt>HTML</dt>
                    <dd>web用の文書構成を表す</dd>
                    <dd>複数DDできます</dd>
                    <dt>CSS</dt>
                    <dd>webのデザインを規定する言語</dd>
                </dl>

            </div>
        </>
    )

}

export default H5Dl;