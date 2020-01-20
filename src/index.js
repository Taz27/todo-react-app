import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import TravelForm from './components/TravelForm';


ReactDOM.render(<App />, document.getElementById("root"));



























//const myfirstelement = <h1>Hello React!</h1>

// class Car extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {color: "red", username: "", age: null, errMsg: "", title: null};
//         this.changeColor = this.changeColor.bind(this);
//         this.myChangeHandler = this.myChangeHandler.bind(this);
//     }

//     static getDerivedStateFromProps(props, state) {
//         return {color: props.color};
//     }

//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/todos/4')
//         .then(response => response.json())
//         .then(json => {
//             console.log(json);
//             this.setState({title: json.title});
//         });
//     }

//     changeColor(newColor, ev) {
//         //alert(ev.type);
//         this.setState({color: newColor});
//     }

//     myChangeHandler(ev) {
//         let nam = ev.target.name;
//         let val = ev.target.value;
//         let err = "";

//         if (nam === "age") {
//             if (val !=="" && !Number(val)) {
//               err = <strong>Your age must be a number</strong>;
//               ev.target.value = "";
//             } 
//         }
//         this.setState({errMsg: err});
//         this.setState({[nam]: val});
//     }

//     mySubmitHandler = (ev) => {
//         alert("You are submitting " + this.state.username + " " + this.state.age);
//         //ev.preventDefault();
//         let age = this.state.age;
//         if (!Number(age)) {
//             alert("Your age must be a number");
//             ev.preventDefault();
//         }
//     }

//     render() {
//         let header = "";
//         if (this.state.username) {
//             header = <h2>Hello {this.state.username} :)</h2>
//         }

//         return (<div>
//                     <h1>I am a <span style={{color: this.state.color}}>{this.state.color}</span> Car!, My model is {this.props.model} and year is {this.props.year} </h1>
//                     <h3>Title feteched from API: {this.state.title}</h3>
//                     <button id="btn" onClick={this.changeColor.bind(this, "yellow")}>Click me!</button>
//                     <form action="" method="GET" onSubmit={this.mySubmitHandler}>
//                         {header}
//                         <p>Enter Your Name: </p>
//                         <input type="text" name="username" onChange={this.myChangeHandler} />
//                         <p>Enter Your Age: </p>
//                         <input type="text" name="age" onChange={this.myChangeHandler} />{this.state.errMsg}<br />
//                         <input type="submit" />

//                     </form>
//                 </div>);
//     }
// }


// function Truck() {
//     var props = {type: "B-Double"};

//     return <h2>I am a {props.type} Truck!</h2>;
// }


// class Garage extends React.Component {
//     render() {
//         return ( <div className="mycar">
//                     <Car model="Chrysler" year="2014" color="red" />
//                     <Truck />
//                     <Car model="Ford" year="2018" color="pink" />
//                 </div>);
//     }
// }

// ReactDOM.render(<Garage /> , document.getElementById('root'));

