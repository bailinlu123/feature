import React from "react"

const H5List = () => {
    return(
        <>
            <h1 style={{background: "#f2cebb",display: "block", borderBottom:"3px solid #ed986b",width:"1000px"}}>14 リストの入れ子</h1>
            <br></br>
            <h2 style={{background: "#aaed6b",display: "block", borderBottom:"2px solid #7ded13"}}>リストは入れ子にできる</h2>

            <div style={{border:"2px solid #139ded"}}>
                <h5> &lt;ol&gt; </h5>
                <h5>&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;List1&lt;/li&gt;</h5>
                <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;</h5>
                <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt; List1-2&lt;/li&gt;</h5>
                <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt; List1-3&lt;/li&gt;</h5>
                <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;</h5>
                <h5>&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;List2&lt;/li&gt;</h5>
                <h5> &lt;/ol&gt; </h5>

            </div>
            <div><br /></div>
            <div style={{border:"2px solid #139ded"}}>
                <ol>
                    <li>List1</li>
                        <ul>
                            <li> List1-2</li>
                            <li> List1-3</li>
                        </ul>
                    <li>List2</li>
                </ol>

            </div>
        </>
    )

}

export default H5List;