import React from "react"

const H5Table = () => {

    const str =`
    <table border="1">
        <tr>
            <th>大阪</th>
            <th>名古屋</th>
            <th>東京</th>
        </tr>
        <tr>
            <td>100</td>
            <td>140</td>
            <td>300</td>
        </tr>
    </table>
    `
    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>21 Tableタグ</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>テーブル作成、全体をTableタグで囲む</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>&lt;table&gt;   &lt;/table&gt;</h3>

            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>行はTRタグで表す</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>&lt;tr&gt;&lt;/tr&gt;</h3>
                
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>各列はTDタグで表す</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>&lt;td&gt;&lt;/td&gt;</h3>
            
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>列のヘッダはTHタグで表す</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>&lt;th&gt;&lt;/th&gt;</h3>

            <div　style={{border:"2px solid #139ded"}}>
            <pre>{str}</pre>
            </div>
            <br/>

            <div　style={{border:"2px solid #139ded"}}>
            <table border="1">
                <tr>
                    <th>大阪</th>
                    <th>名古屋</th>
                    <th>東京</th>
                </tr>
                <tr>
                    <td>100</td>
                    <td>140</td>
                    <td>300</td>
                </tr>
            </table>
            </div>
        </>
    )

}

export default H5Table;