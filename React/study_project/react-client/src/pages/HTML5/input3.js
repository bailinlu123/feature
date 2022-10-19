import React from "react"

const H5Input3 = () => {

    const str =`
    <form action="mail.php" method="post">
        <p>
            <input type="checkbox" name="partyA"> A政党</ input>
            <input type="checkbox" name="partyB"> B政党</ input>
            <input type="checkbox" name="partyC"> C政党</ input>
        </p>
    </ form>
    `

    const str2 =`
    <form action="mail.php" method="post">
        <p>
            <input type="radio" name="gender"> 男</ input>
            <input type="radio" name="gender"> 女</ input>
        </p>
    </ form>
    `

    const str3 =`
    <form action="mail.php" method="post">
        <input type="file" name="file" />
        <input type="reset" name="reset" />
        <input type="button" name="button" value="hello" />
    </ form>
    `
   return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>33 Inputタグ</h1>
            <br></br>
            
            <div　style={{border:"2px solid #139ded"}}>
                <pre>{str}</pre>
                <br />
                <form action="mail.php" method="post">
                    <p>
                        <label>A政党</label>
                        <input type="checkbox" name="partyA"　defaultChecked={true}/>
                        <label>B政党</label>
                        <input type="checkbox" name="partyA" checked/>
                        <label>C政党</label>
                        <input type="checkbox" name="partyA"/>
                    </p>
                </ form>
            </div>
            <br/>

            <div　style={{border:"2px solid #139ded"}}>
                <pre>{str2}</pre>
                <br />
                <form action="mail.php" method="post">
                    <p>
                        <label>男</label>
                        <input type="radio" name="gender"/>
                        <label>女</label>
                        <input type="radio" name="gender"/>
                    </p>
                </ form>
            </div>
            <br/>

            <div　style={{border:"2px solid #139ded"}}>
                <pre>{str3}</pre>
                <br />
                <form action="mail.php" method="post">
                    <p>
                        <input type="file" name="file"/>
                        <input type="reset" name="resrt"/>
                        <input type="button" name="button" value="hello" />
                    </p>
                </ form>
            </div>
            <br/>
        </>
    )

}

export default H5Input3;