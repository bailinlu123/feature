import React from "react"

const H5Table2 = () => {

    const str =`
    <table border="1">
        <caption>全支店売上一覧</caption>
        <thead align="center" style="background-color:lightskyblue">
        <tr>
            <th>大阪</th>
            <th>名古屋</th>
            <th>東京</th>
        </tr>
        </thead>

        <tbody style="background-color:antiquewhite">
        <tr>
            <td>100</td>
            <td>140</td>
            <td>300</td>
        </tr>
        <tr>
            <td>130</td>
            <td>220</td>
            <td>120</td>
        </tr>
        </tbody>

        <tfoot style="background-color:lightpink">
        <tr>
            <td>230</td>
            <td>470</td>
            <td>520</td>
        </tr>
        </tfoot>
    </table>
    `
    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>22 Tableタグ2</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>&lt;caption&gt;タグ</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>キャプションを記載する場合</h3>

            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>&lt;thead&gt;&lt;/thead&gt;</h2>
                
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>&lt;tbody&gt;&lt;/tbody&gt;</h2>
            
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>&lt;tfoot&gt;&lt;/tfoot&gt;</h2>
         
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Align属性</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>left,center,right,justify</h3>

            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Valign属性</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>top,middle,bottom,baseline</h3>

            <div　style={{border:"2px solid #139ded"}}>
            <pre>{str}</pre>
            </div>
            <br/>

            <div　style={{border:"2px solid #139ded"}}>
            <table border="1">
                <caption>全支店売上一覧</caption>
                <thead align="center" style={{backgroundColor:"lightskyblue"}}>
                <tr>
                    <th>大阪</th>
                    <th>名古屋</th>
                    <th>東京</th>
                </tr>
                </thead>

                <tbody style={{backgroundColor:"antiquewhite"}}>
                <tr>
                    <td>100</td>
                    <td>140</td>
                    <td>300</td>
                </tr>
                <tr>
                    <td>130</td>
                    <td>220</td>
                    <td>120</td>
                </tr>
                </tbody>

                <tfoot style={{backgroundColor:"lightpink"}}>
                <tr>
                    <td>230</td>
                    <td>470</td>
                    <td>520</td>
                </tr>
                </tfoot>
            </table>
            
            </div>
        </>
    )

}

export default H5Table2;