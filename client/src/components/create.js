import React, { Component } from 'react';
import axios from 'axios';

class Create extends Component {

    constructor(props) {
		super(props)
		this.state = {
            name:'',
            salary:'',
            email:'',
            hireDate:'',
            department:''
        }
        this.submitLogin = this.submitLogin.bind(this)
        //this.Auth = new Authserver();
	}

    
    ////////////////Login ////////////////////
    onChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value })
    }

    submitLogin = (e) =>{
        e.preventDefault();
        var info = {
        name : this.state.name,
        salary : this.state.salary,
        email : this.state.email,
        hireDate : this.state.hireDate,
        department : this.state.department,
        admin:0,
        password:'password'
        }
        axios.post(`/api/create`,{info})
            .then(res=>{   
                console.log(res.data)
            })

    }

    updateForm = (newState) =>{
        this.setState({
            State:newState
        })
    }
    

render(){
    return (    
        <div className="login_container">
        <div style ={{border:"1px solid #c2c2c2",textAlign: "center"}}>
        <form onSubmit={this.submitLogin}>
            <h2>Add Employee info</h2>
            <div className="form_element">
            Name: 
                <input 
                    type="text"
                    placeholder="Enter name"
                    name='name'
                    value={this.state.name}
                    onChange={this.onChange}
                />
            </div>
            <div className="form_element">
            Salary: 
                <input 
                    type="number"
                    name='salary'
                    placeholder="Enter salary"
                    value={this.state.salary}
                    onChange={this.onChange}
                />
            </div>
            <div className="form_element">
            Email: 
            <input 
                    type="email"
                    name='email'
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.onChange}
                />
            </div>
            <div className="form_element">
            Department: 
            <input 
                    type="text"
                    name='department'
                    placeholder="Enter department"
                    value={this.state.department}
                    onChange={this.onChange}
                />
            </div>
            <div className="form_element">
            Hired Date: 
            <input 
                    type="date"
                    name='hireDate'
                    placeholder="mm/dd/yyyy"
                    value={this.state.hireDate}
                    onChange={this.onChange}
                />
            </div>
            <button type="submit" className="btn btn-info btn-sm">Add</button>
            </form>
            </div>
            </div>
    );
}   
}

export default Create;