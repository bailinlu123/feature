import React from "react"

const H5Input = () => {

    const str =`
    <form action="mail.php" method="post">
        <input type="text" name="username" />
        <input type="hidden" name="user_id" value="3333" />
        <input type="search" name="find" />
        <input type="tel" name="telno" />
        <input type="url" name="url" />
        <input type="email" name="email" />
        <input type="password" name="pass" />
        <input type="submit" value="送信" />
    </ form>
    `
    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>31 Inputタグ</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>送信フォームの部品</h2>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Type属性で種類を指定</h2>

            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>hidden</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>隠しデータ</h3>
                
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>text</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>一行テキストボックス</h3>
            
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>search</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>検索テキストの入力欄</h3>

            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>tel</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>電話番号の入力欄</h3>

            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>url</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>URLの入力欄</h3>

            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Email</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>emailの入力欄</h3>

            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>password</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>パスワードの入力欄</h3>

            <div　style={{border:"2px solid #139ded"}}>
            <pre>{str}</pre>
            </div>
            <br/>

            <div　style={{border:"2px solid #139ded"}}>
                <form action="mail.php" method="post">
                    <input type="text" name="username" />
                    <input type="hidden" name="user_id" value="3333" />
                    <input type="search" name="find" />
                    <input type="tel" name="telno" />
                    <input type="url" name="url" />
                    <input type="email" name="email" />
                    <input type="password" name="pass" />
                    <input type="submit" value="送信" />
                </ form>
            </div>
        </>
    )

}

export default H5Input;