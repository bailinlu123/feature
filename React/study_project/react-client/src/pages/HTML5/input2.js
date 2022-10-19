import React from "react"

const H5Input2 = () => {

    const str =`
    <form action="mail.php" method="post">
        <input type="datetime" name="datetime" />
        <input type="date" name="date" />
        <input type="submit" value="送信" />
    </ form>
    `

    const str2 =`
    <form action="mail.php" method="post">
        <input type="month" name="month" />
        <input type="week" name="week" />
        <input type="submit" value="送信" />
    </ form>
    `

    const str3 =`
    <form action="mail.php" method="post">
        <input type="time" name="time" />
        <input type="datetime-local" name="datetime-local" />
        <input type="submit" value="送信" />
    </ form>
    `

    const str4 =`
    <form action="mail.php" method="post">
        <input type="number" name="number" />
        <input type="range" name="range" />
        <input type="color" name="color" />
        <input type="submit" value="送信" />
    </ form>
    `
    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>32 Inputタグ</h1>
            <br></br>
            
            <div　style={{border:"2px solid #139ded"}}>
                <pre>{str}</pre>
                <br />
                <form action="mail.php" method="post">
                    <input type="datetime" name="datetime" />
                    <input type="date" name="date" />
                    <input type="submit" value="送信" />
                </ form>
            </div>
            <br/>

            <div　style={{border:"2px solid #139ded"}}>
                <pre>{str2}</pre>
                <br />
                <form action="mail.php" method="post">
                    <input type="month" name="month" />
                    <input type="week" name="week" />
                    <input type="submit" value="送信" />
                </ form>
            </div>

            <br/>
            <div　style={{border:"2px solid #139ded"}}>
                <pre>{str3}</pre>
                <br />
                <form action="mail.php" method="post">
                    <input type="time" name="time" />
                    <input type="datetime-local" name="datetime-local" />
                    <input type="submit" value="送信" />
                </ form>
            </div>

            <br/>
            <div　style={{border:"2px solid #139ded"}}>
                <pre>{str4}</pre>
                <br />
                <form action="mail.php" method="post">
                    <input type="number" name="number" />
                    <input type="range" name="range" />
                    <input type="color" name="color" />
                    <input type="submit" value="送信" />
                </ form>
            </div>
        </>
    )

}

export default H5Input2;