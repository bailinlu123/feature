import React,{Component} from 'react'

// const HelloPrpos = prpos => {
//     // console.log(prpos)

//     // 1
//     // prpos can not be changed
//     // prpos.name = "haku" 
//     return <h1>Hello {prpos.name} , age {prpos.age}</h1>

//     // // 2
//     // const {name, age} = prpos
//     // return (
//     // <>
//     //     <h1>Hello {name} , age {age}</h1>
//     //     {prpos.children}
//     // </>)
// }

// class HelloPrpos extends Component {

//     // 3
//     render(){
//         return (
//         <>
//             <h1>Hello {this.props.name} , age {this.props.age}</h1>
//             {this.prpos.children}
//         </>
//         )
//     }
// }

// 4
const HelloPrpos = ({name,age, children}) => {
    console.log(`name:${name}, age:${age}, children:${children}`)
    return (
        <>
         <h1>Hello {name} , age {age}</h1>
         {children}
        </>
    )
}

export default HelloPrpos