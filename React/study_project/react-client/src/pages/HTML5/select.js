import React from "react"

const H5Select = () => {

    const str=`
    <label>勉強したい言語
    <select>
        <option>HTML</option>
        <option>CSS</option>
        <option>JavaScript</option>
    </select>
    </ label>
    `

   return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>37 Selectタグ</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>ドロップダウンリストの作成</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>&lt;select&gt;&lt;/select&gt;</h3>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>要素は&lt;option&gt;&lt;タグで規定</h3>

            <div　style={{border:"2px solid #139ded"}}>
                <pre>{str}</pre>
                <br />
                <label>勉強したい言語
                <select>
                    <option>HTML</option>
                    <option>CSS</option>
                    <option>JavaScript</option>
                </select>
                </label>
            </div>
            <br/>

        </>
    )

}

export default H5Select;