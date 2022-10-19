import React from "react"

const H5Label = () => {

    const str=`
    <p>
        <label for="u_name">ユーザ名</label>
        <input type="text" name="username" id="u_name"></input>
        <label>ユーザ名
        <input type="text" name="username"></input>
        </label>
    </p>`

   return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>36 labelタグ</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>&lt;label&gt;&lt;/label&gt;で部品を囲む</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>部品にラベルをつける</h3>

            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>For属性</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>フォームIDを指定する</h3>

            <div　style={{border:"2px solid #139ded"}}>
                <pre>{str}</pre>
                <form action="mail.php" method="post">
                    <p>
                        <label for="u_name">ユーザ名</label>
                        <input type="text" name="username" id="u_name"></input>
                        <label>ユーザ名
                        <input type="text" name="username"></input>
                        </label>
                    </p>
                </ form>
            </div>
            <br/>

        </>
    )

}

export default H5Label;