import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props)

         this.state={
           userInfo:{
            name:"xyz",
           }
          }
    }
     // it is called after constructor->render->then comopnentDidMount
     //it is used to make api call
    async componentDidMount(){
      const data=await fetch("https://api.github.com/users/Mohit-pxl");
      const json=await data.json();

      this.setState({
        userInfo:json
      })
      console.log(json);
      
    }
   
  render() {
    const {name}=this.state.userInfo
    return (
      <div className="user-card">
        <h1>Name: {name}</h1>
        <h2>Location: MP</h2>
        <h3>Contact: @mohit21</h3>
      </div>
    );
  }
}

export default UserClass