import React from "react"

const H5Samp = () => {

    const str =`
    プログラムが以下の内容を出力しました。<br />
    <samp> Access Denied </samp><br />

    リンゴ<var>X</var>個　<br />

    <kbd>ALT</kbd> + <kbd>F4</kbd> <br />

    <dfn> Define:</dfn>11111
    `

   return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>54 smapタグ</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>プログラムによる出力結果のサンプルであることを示す</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>Varタグ、変数であることを示す</h3>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>Kbdタグ、ユーザが入力する内容であるを示す</h3>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>Dfnタグ、用語が使用されていることを示す</h3>
            
            <div　style={{border:"2px solid #139ded"}}>
                <pre>{str}</pre>
                <br />
                プログラムが以下の内容を出力しました。<br />
                <samp> Access Denied </samp><br />

                リンゴ<var>X</var>個　<br />

                <kbd>ALT</kbd> + <kbd>F4</kbd> <br />

                <dfn> Define:</dfn>11111

            </div>

             </>
    )

}

export default H5Samp;