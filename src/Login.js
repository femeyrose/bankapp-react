import React from 'react';
import axios from 'axios'

class Login extends React.Component{
    
    state={
        title:"Login Page",
        acno:"",
        password:"",
        showLogin:false
    }
  //variables are always declared in states  
  //this.state.something in state will be printed

    // usernameChange=(e)=>{
    //     this.setState({
    //         username:e.target.value

    //     })
    // }
    //     passwordChange=(e)=>{
    //         this.setState({
    //             password:e.target.value
    
    //         })

    // }

    inputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });

    }
    //changes will be reflected and re-render only when the setState is called

    //here we can use inputChange for changing the password and username instead of giving it seperatly

    handleSubmit=(e)=>{
        alert("submit clicked");
        alert(this.state.acno+this.state.password);
        e.preventDefault();
        axios.post('http://localhost:3001/login',
        {
            acno:this.state.acno,
            password:this.state.password
        },
           { 
               withCredentials:true
        })
        .then(response=>{
            alert(response.data.message)
        })
        .catch(error=>{
            alert(error.response.data.message);
        });
        }
        
    //if the credentials true, .then will work otherwise .catch will catch the error

    constructor(props){
        super(props);
    }

    static getDerivedStateFromProps(props,state){}

    render(){
        if(this.state.showLogin==false){
            return(
                <div>
                    <p>Login is disabled</p>
                    <button onClick={()=>{
                    this.setState({
                        showLogin:true
                    })
                    }}>Enable Login </button>
                    </div>);
            
        }
        //if false, (showLogin is given as false in state) login is diabled is displayed
        //enable login button is clicked, then will enable to login
        //this is like ngIf in angular


        return (
        <div>
            <h1>{this.state.title}</h1>
            {/* the title from state is displayed */}

            <h1>{this.props.title}</h1>
            {/* title from parent */}

            <form onSubmit={this.handleSubmit}>
                <div className ="form-group">
                  <label>acno</label>
                  {/* <input className="form-control" type="text" value={this.state.username} onChange={this.usernameChange} /> */}
                  <input className="form-control" type="text" value={this.state.acno} onChange={this.inputChange} name="acno"/>
                </div>
                <div className ="form-group">
                  <label>Password</label>
                  {/* <input className="form-control" type="text" value={this.state.password} onChange={this.passwordChange} /> */}
                  <input className="form-control" type="password" value={this.state.password} onChange={this.inputChange} name="password" />
                </div>
            <input className="btn btn-primary" type="submit" value="submit" />
            {/* <p>Hi from login component</p> */}
            </form>
            </div>
        );
    }
}

export default Login;


/* <h1>{this.props.title}</h1>
<p>Hi from login compoent</p>
</div>
these syntax js+html is called jsx */

//props as @input in angular
//data from parent to child
//if we use value={this.state.username} , the value will appear in browser and willnot change 
//to change the value, use 'onChange' in html tag
//if we change the value defined in the state we use 'setState' in the function eg:in the inputChange()
//all the variables should be declared inside the state
//the values inside the state are set using setState
//in angular we use onChange (like 2 way binding), here using 'setState' directly it will reflect in browser
//here 'e' ==>is for event
//in react we use className instaed of class
//on submit the page is reloaded to avoid that we use e.preventDefault();

//connect to backend
//
//npm i axios 
//import it
//now the react works in 3000 and backend in 3001 (in cors we define port as 3000, which is the connection port of react when it connect using axios)
//axios 3001 means connection port of express is 3001
//run both the npm start and nodemon index.js(backend)


//react uses libraries-like third party library -forms,etc

//conditional rendering--we use 'if'