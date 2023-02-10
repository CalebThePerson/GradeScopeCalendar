import Form from 'react-bootstrap/Form';
import axios from 'axios'
import cheerio from 'cheerio'
import {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import '../style/LoginPage.css'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Home from './Home.js'
require('cors')


export default function LoginPage(){
    //Variables to hold Login Info
    //Username, password, and login method

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [logedIn, setStatus] = useState(false)
    const [loginMethod, setMethod] = useState('1')

    const methods= [
        {name: "normalLogin", value:"1"},
        {name: "duoAuth", value:'2'}
    ]
    

    //UseState functions
    //Functions that update our useState variables
    const changeEmail = (event) => {
        setEmail(event.target.value)
    }
    const changePassword = (event) =>{
        setPassword(event.target.value)
    }
    const changeLoginMethod = (event, method) => {
        console.log(event.target.value)
        setMethod(event.target.value)
    }
    //API Functions
    //The Functions that talk to the api and log our users in
    async function login(event){
        console.log('Logging in')
        event.preventDefault()
        const message = await axios(`http://localhost:3001/login?email=${email}&pass=${password}`)
        console.log(message)
        setStatus(true)
    }

    //React Functions and etc
    //This is rendered if the user isn't logged in
    if(!logedIn){
        if(loginMethod == '1'){
            return(
                <body id = "bodyBackground">
                    <header>
                        <h1 id = 'headerText'>GradeScope Calendar</h1>
                    </header>
    
                    <div id = "mainContent">
                        <div id = "contentWrapper">
                            <h1 class = "text">Welcome!</h1>
                            <h2>Login below:</h2>
                            <div id = "formSquare">
                                <Form>
                                    <Form.Group class = "mainGroup">
                                        <Form.Label class = "innerSquareText">Username: </Form.Label>
                                        <Form.Control class = "innerFormText" type="email" placeholder = "Enter email"  onChange = {changeEmail}></Form.Control>
                                    </Form.Group>

                                    
                                <Form.Group class = "mainGroup">
                                        <Form.Label class = "innerSquareText">Password: </Form.Label>
                                        <Form.Control class = "innerFormText" type="password" placeholder="Enter password" onChange = {changePassword}></Form.Control>
                                </Form.Group>
                                <ButtonGroup className="mb-2">
                                    {methods.map((method,idx) => (
                                        <ToggleButton key = {idx} id={`radio-${idx}`} type ='radio'variant={idx % 2 ? 'outline-success' : 'outline-danger'} name="radio" value={method.value} checked={loginMethod === method.value} onChange = {changeLoginMethod}>{method.name}</ToggleButton>
                                    ))}
                                </ButtonGroup>

                                <div>
                                    <Button id = "buttonText" variant="primary" type="submit" onClick={login}>Login</Button>
                                </div>
                                </Form>
                            </div>
                        </div> 
                    </div>
                </body>
            )
        } else{ 
            return(
                <body id = "bodyBackground">
                    <header>
                        <h1 id = 'headerText'>GradeScope Calendar</h1>
                    </header>
        
                    <div id = "mainContent">
                        <div id = "contentWrapper">
                            <h1 class = "text">Welcome!</h1>
                            <h2>Login below:</h2>
                            <div id = "formSquare">
                                <Form>
                                    <Form.Group class = "mainGroup">
                                        <Form.Label class = "innerSquareText">Email Adress: </Form.Label>
                                        <Form.Control class = "innerFormText" type="email" placeholder = "Enter email"  onChange = {changeEmail}></Form.Control>
                                        <Form.Text className = 'text-muted'>This is your HMC credentials</Form.Text>
                                    </Form.Group>
        
                                    
                                <Form.Group class = "mainGroup">
                                        <Form.Label class = "innerSquareText">Password: </Form.Label>
                                        <Form.Control class = "innerFormText" type="password" placeholder="Enter password" onChange = {changePassword}></Form.Control>
                                </Form.Group>
                                <ButtonGroup className="mb-2">
                                    {methods.map((method,idx) => (
                                        <ToggleButton key = {idx} id={`radio-${idx}`} type ='radio'variant={idx % 2 ? 'outline-success' : 'outline-danger'} name="radio" value={method.value} checked={loginMethod === method.value} onChange = {changeLoginMethod}>{method.name}</ToggleButton>
                                    ))}
                                </ButtonGroup>
                                <div>
                                    <Button id = "buttonText" variant="primary" type="submit" onClick={login}>Login</Button>
                                </div>
                                </Form>
                            </div>
                        </div> 
                    </div>
                </body>
                )
        }
    }else{
        return(
        <Home></Home>
        )
    }
}