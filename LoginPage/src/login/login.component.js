import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { render } from '@testing-library/react';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            login : {
                email : '',
                password : ''
            },
            errMsg : ''
        }
        let tempObj = Object.create(this.state.login);
        this.changeInp = this.changeInp.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    changeInp(e,key){
        let tempObj = Object.assign(this.state.login);
        tempObj[key] = e.target.value;
        this.setState({login : tempObj});
    }



    submitForm = (e) => {
        e.preventDefault();
        console.log(this.state.login);

        this.setState({
            login :{
                email: '',
			    password: ''
            },
            errMsg:''
		});

        let em = this.state.login.email;
        let ps = this.state.login.password;

        console.log("em : "+em);
        console.log("ps : "+ps);

        let expression = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        let regularExpression = /^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;
        
        if(expression.test(em) == false)
        {
            this.setState({errMsg : "Invalid username"});
        }
        else if(ps.length < 6){
            this.setState({errMsg : "password length must be 6"}) 
        }
        else if(regularExpression.test(ps) == false){
            this.setState({errMsg : "password must contains 1 upper case,lowercase,digit and special character"})
        }
        else{
            this.props.history.push(`/home`)
        }
       
    }

    render() {
        return (
            <form onSubmit = {this.submitForm}>
                <h1>SIGNIN</h1>
            <Grid container alignItems="center" justify="center" direction="column">
                <Grid item>
                    <input type="text" style={{height:'25px',margin:'5px'}} placeholder="eg.abc@gmail.com..." name="email" value= {this.state.login.email} onChange={(e)=>{this.changeInp(e,'email')}} required></input>
                </Grid>

                <Grid item>
                <input type="password" style={{height:'25px',margin:'5px'}} placeholder="eg.Abc@!123...." name= "password" value= {this.state.login.password} onChange={(e)=>{this.changeInp(e,'password')}} required></input>
                </Grid>

                <Grid item>
                    {this.state.login.email && this.state.login.password ? <Button type="submit" style={{margin:'5px'}} variant="contained" color="primary">
                        Submit
                    </Button> : <Button type="submit" style={{margin:'5px'}} variant="contained" color="primary" disabled>
                        Submit
                    </Button>}
                    
                </Grid>
                {this.state.errMsg}
            </Grid>
				
            </form>
        );
    }

}

export default Login;