import React from "react"

const H5Fieldset = () => {

    const str =`
    <form action="mail.php" method="post">
        <p>
        <fieldset>
            <legend>支持政党は何ですか</legend>
            <input type="checkbox" name="partyA"> A政党</ input>
            <input type="checkbox" name="partyB"> B政党</ input>
            <input type="checkbox" name="partyC"> C政党</ input>
        </fieldset>
        </p>
        <p>
            <input type="radio" name="gender"> 男</ input>
            <input type="radio" name="gender"> 女</ input>
        </p>
    </ form>
    `

   return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>35 Fieldsetタグ</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>&lt;Fieldset&gt;&lt;/Fieldset&gt;</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>この中にグループしたい部品を入れる</h3>

            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>&lt;legend&gt;&lt;/legend&gt;</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>グループにキャプションをつける</h3>

            <div　style={{border:"2px solid #139ded"}}>
                <pre>{str}</pre>
                <br />
                <form action="mail.php" method="post">

                    <fieldset>
                        <legend>支持政党は何ですか</legend>
                        <label>A政党</label>
                        <input type="checkbox" name="partyA"　defaultChecked={true}/>
                        <label>B政党</label>
                        <input type="checkbox" name="partyA" checked/>
                        <label>C政党</label>
                        <input type="checkbox" name="partyA"/>
                    </fieldset>

                    <p>
                        <label>男</label>
                        <input type="radio" name="gender"/>
                        <label>女</label>
                        <input type="radio" name="gender"/>
                    </p>
                </ form>
            </div>
            <br/>

        </>
    )

}

export default H5Fieldset;