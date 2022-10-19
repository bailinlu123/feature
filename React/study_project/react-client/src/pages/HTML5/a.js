import React from "react"

const H5A = () => {
    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>9 Aタブ</h1>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>アンカーの略、リンク先を指定する</h2>
            <br></br>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Href属性※</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>href="URI"</h3>
            <br /><br />
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Name属性</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>name="名前"</h3>
            <br /><br />
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>target属性</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>target="フレーム名"</h3>
            <h4 style={{background: "#c1decf",display: "block", borderBottom:"1px solid #8b9099"}}>_blank</h4>
            <h4 style={{background: "#c1decf",display: "block", borderBottom:"1px solid #8b9099"}}>_self</h4>
            <h4 style={{background: "#c1decf",display: "block", borderBottom:"1px solid #8b9099"}}>_parent</h4>
            <h4 style={{background: "#c1decf",display: "block", borderBottom:"1px solid #8b9099"}}>_top</h4>
            <br /><br />
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>charset属性</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>リンク先の文字コードセット</h3>
            <div style={{border:"2px solid #139ded"}}>
                <a href="https://www.google.com/search?q=color+picker&oq=co&aqs=chrome.1.69i57j69i59j69i60l3j69i65l2j69i60.2932j0j7&sourceid=chrome&ie=UTF-8" target="_self"> color picker(self) </a>
                <br></br>
                <a href="https://www.google.com/search?q=color+picker&oq=co&aqs=chrome.1.69i57j69i59j69i60l3j69i65l2j69i60.2932j0j7&sourceid=chrome&ie=UTF-8" target="_blank"> color picker(blank) </a>
            </div>
        </>
    )

}

export default H5A;