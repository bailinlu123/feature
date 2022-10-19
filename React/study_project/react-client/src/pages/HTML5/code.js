import React from "react"

const H5Code = () => {

    const kokkaku = `
    <pre>
    <code>
        const i = 5;
        if(i === 5){
            document.write("hello");
        }
    </code>
    </pre>
`

    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>18 Codeタグ</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>プログラムのコードであることを示す際に使用</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>&lt;code&gt;   &lt;/code&gt;</h3>

            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>通常は&lt;pre&gt;タグと併用される</h2>

            <div style={{border:"2px solid #139ded"}}>
                <pre>{kokkaku}</pre>
            </div>

            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>&lt; や　&gt;　を使う場合　& lt; & gt;を使用する</h2>
            
            <div>
            {/* <pre>
                <code>
                    const i = 5;
                    if(i === 5){
                        document.write("hello")
                    }
                </code>
            </pre> */}
            </div>
        </>
    )

}

export default H5Code;