import React from "react"

const H5Textarea = () => {

    const str=`
    <textarea cols="40" rows="5" required autofocus placeholder="感想を入力してください。。。">
    
    </ textarea>
    `

   return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>39 Textareaタグ</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>複数行入力できるテキストボックス</h2>
            <h3 style={{background: "#dbc1d3",display: "block", borderBottom:"1px solid #8b9099"}}>&lt;textarea&gt;   &lt;/textarea&gt;</h3>

            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Autofocus属性</h2>

            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Cols属性、初期値は20</h2>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Disable属性</h2>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Form属性、どのFormと関連付けるか</h2>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Maxlength属性、入力可能な最大文字数</h2>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>name属性</h2>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Placeholder属性</h2>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>readonly属性</h2>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>required属性</h2>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>rows属性、初期値は2</h2>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>Wrap属性</h2>

            <div　style={{border:"2px solid #139ded"}}>
                <pre>{str}</pre>
                <br />
                <textarea cols="40" rows="5" required autofocus placeholder="感想を入力してください。。。">
    
                </ textarea>
            </div>
            <br/>

        </>
    )

}

export default H5Textarea;