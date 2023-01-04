import axios from 'axios'
import cheerio from 'cheerio'
import {useEffect, useState} from "react";
import {Link} from 'react-router-dom'
import '../style/LoginPage.css'
require('cors')
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export default function LoginPage(){
    //Variables to hold Login Info
    //Username, password, and login method

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [logedIn, setStatus] = useState(false)
    const [loginMethod, setMethod] = useState('normalLogin')

    //UseState functions
    //Functions that update our useState variables
    const changeEmail = (event) => {
        setEmail(event.target.value)
    }
    const changePassword = (event) =>{
        setPassword(event.target.value)
    }

    const changeLoginMethod = (event, method) => {
        console.log(method)
        setMethod(method)
    }



    //API Functions
    //The Functions that talk to the api and log our users in

    //React Functions and etc
    
    //This is rendered if the user isn't logged in
    console.log(loginMethod)
    if(!logedIn){
        if(loginMethod == 'normalLogin'){
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
                                        <Form.Control class = "innerFormText" type="email" placeholder="Enter password" onChange = {changePassword}></Form.Control>
                                </Form.Group>
                                <div>
                                    <Button id = "buttonText" variant="primary" type="submit">Login</Button>
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
                                        <Form.Label class = "innerSquareText">Username: </Form.Label>
                                        <Form.Control class = "innerFormText" type="email" placeholder = "Enter email"></Form.Control>
                                    </Form.Group>

                                    
                                <Form.Group class = "mainGroup">
                                        <Form.Label class = "innerSquareText">Password: </Form.Label>
                                        <Form.Control class = "innerFormText" type="email" placeholder="Enter password"></Form.Control>
                                </Form.Group>
                                <div class = "btn-group" role="group" aria-label="Basic Checkbox toggle button group">
                                    <input type ="checkbox" class="btn-check" id="btncheck1" autocomplete="off"></input>
                                    <label class = "btn btn-outline-primary" for="btncheck1">Normal Login</label>

                                    <input type ="checkbox" class="btn-check" id="btncheck2" autocomplete="off"></input>
                                    <label class = "btn btn-outline-primary" for="btncheck2">DuoAuth</label>
                                </div>
                                <div>
                                    <Button id = "buttonText" variant="primary" type="submit">Login</Button>
                                </div>
                                </Form>
                            </div>
                        </div> 
                    </div>
                </body>
            )
        }
    }else{
    }
}