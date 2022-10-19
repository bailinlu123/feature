import React from "react"

const H5Table4 = () => {

    const str =`
    <table border="1">
        <caption>全支店売上一覧</caption>
        <colgroup>
            <col span="1" style="background-color:lightskyblue" />
            <col span="2" style="background-color:antiquewhite" />
        </colgroup>

        <thead align="center" >
        <tr>
            <th colspan="4"> 全支店売上一覧 </th>
        </tr>
        <tr>
            <th>年度</th>
            <th>大阪</th>
            <th>名古屋</th>
            <th>東京</th>
        </tr>
        </thead>

        <tbody>
        <tr>
            <td rowspan="2">2016</td>
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

        <tfoot>
        <tr>
            <td>合計</td>
            <td>230</td>
            <td>470</td>
            <td>520</td>
        </tr>
        </tfoot>
    </table>
    `
    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>24 Tableタグ4</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>セルのマージ　Td</h2>

            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Colspan属性;</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>水平に結合、結合するセルの数</h3>

            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>RowSpan属性</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>縦に結合、結合するセルの数</h3>
            
            <div　style={{border:"2px solid #139ded"}}>
            <pre>{str}</pre>
            </div>
            <br/>

            <div　style={{border:"2px solid #139ded"}}>
            <table border="1">
                <caption>全支店売上一覧</caption>

                <colgroup>
                    <col span="1" style={{backgroundColor:"lightskyblue"}} />
                    <col span="2" style={{backgroundColor:"antiquewhite"}} />
                </colgroup>
                
                <thead align="center" >
                <tr>
                    <th colspan="4"> 全支店売上一覧 </th>
                </tr>
                <tr>
                    <th>年度</th>
                    <th>大阪</th>
                    <th>名古屋</th>
                    <th>東京</th>
                </tr>
                </thead>

                <tbody >
                <tr>
                    <td  rowspan="2">2016</td>
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

                <tfoot>
                <tr>
                    <td>合計</td>
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

export default H5Table4;