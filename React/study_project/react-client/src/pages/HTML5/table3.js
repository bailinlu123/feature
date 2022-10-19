import React from "react"

const H5Table3 = () => {

    const str =`
    <table border="1">
        <caption>全支店売上一覧</caption>
        <colgroup>
            <col span="1" style="background-color:lightskyblue" />
            <col span="2" style="background-color:antiquewhite" />
        </colgroup>

        <thead align="center" >
        <tr>
            <th>大阪</th>
            <th>名古屋</th>
            <th>東京</th>
        </tr>
        </thead>

        <tbody>
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

        <tfoot>
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
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>23 Tableタグ3</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>colgroup</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>縦列（カラム）をグループ化する</h3>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>属性やスタイルをまとめて指定できる</h3>

            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Span属性;</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>グループ化する縦列の数を指定</h3>

            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Col</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>Colgroupno子要素（Span属性を持っていない場合に配置できる）</h3>
            
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
                    <th>大阪</th>
                    <th>名古屋</th>
                    <th>東京</th>
                </tr>
                </thead>

                <tbody >
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

                <tfoot>
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

export default H5Table3;