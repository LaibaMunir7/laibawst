import React, { Component } from 'react';
class Leave extends Component{
    constructor(){
        super()
        this.state = {
            message : "Welcome visitor!"
        }
    }
    render(){
        return (
            <div>
                <h1> {this.state.message} </h1> 
                <button onClick = {() => this.setState({message: "Thanks for subscribing our channel Q K Subscribers bahut jaroori hn !"})}>Subscribe</button>
            </div>
        )
    }
}
export default Leave;
//const Hello = () => {
//    return React.createElement('div' , null, React.createElement ('h1', {id: 'app'},'Hellowww! bhai saab'))
//}
// export default Hello;

// class Welcome extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hi Sir Shahbaz! {this.props.name}</h1>
//             </div>
//         );
//     }
// }
// export default Welcome;

// const Hey =(props) => {
//     console.log(props);
//     return(
//         <div>
//             <h1>Hi {props.name}</h1>
//             {props.children}
//         </div>
//     )
// }
// export default Hey;