import React from "react"

const H5Input4 = () => {

    const str =`
    <form action="mail.php" method="post">
        <input type="text" name="area" autocomplete="on" list="area" />
        <datalist id="area">
            <option value="tokyo" />
            <option value="osaka" />
            <option value="nagoya" />
        </datalist>
    </ form>
    `

    const str2 =`
    <form action="mail.php" method="post">
        <input type="text" name="area" placeholder="Input here..."/>
        <input type="text" name="area" value="Input here..." readonly/>
        <input type="text" name="area" size="40" maxlength="4"/>
        <input type="number" name="number" min="4" max="10"/>

    </ form>
    `
    

   return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>34 Inputタグ</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Autocomplete属性</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>自動補間を指定 On</h3>
            <div　style={{border:"2px solid #139ded"}}>
                <pre>{str}</pre>
                <br />
                <form action="mail.php" method="post">
                    <input type="text" name="area" autocomplete="on" list="area" />
                    <datalist id="area">
                        <option value="tokyo" />
                        <option value="osaka" />
                        <option value="nagoya" />
                    </datalist>
                </ form>
            </div>
            <br/>

            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Checkd属性,Pattern属性,Placeholder属性,ReadOnly属性,size,maxlength,min,max</h2>
            <div　style={{border:"2px solid #139ded"}}>
                <pre>{str2}</pre>
                <br />
                <form action="mail.php" method="post">
                    <input type="text" name="area" placeholder="Input here..."/>
                    <input type="text" name="area" value="Input here..." readonly/>
                    <input type="text" name="area" size="40" maxlength="4"/>
                    <input type="number" name="number" min="4" max="10"/>
                </ form>
            </div>
            <br/>
        </>
    )

}

export default H5Input4;