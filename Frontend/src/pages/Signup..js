import React from "react";
import {useEffect} from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import UserServices from "../Services/UserServices";
// import { FaLock } from 'react-icons/fa';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import Google from "./Google";


const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 40px;
//   border-radius: 20px;
//   border: 8px solid #223432;
  box-shadow: -5px -5px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.35),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    inset 5px 5px 15px rgba(0, 0, 0, 0.35);
  background-color: rgba(255, 255, 255, 0.192);
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
  right: 40px;
  bottom: 40px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 40px; / / Remove the padding property */
 // background-color: rgba(0, 0, 0, 0.3); /* Set the background color to transparent */
`;


const Form = styled.form`
background-color: rgba(255, 255, 255, 0.2); 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  height: 60%;
  width: 30%;
`;

const InputBox = styled.div`
  position: relative;
  width: 400px;
  
`;

const Input = styled.input`
  padding: 15px;
  border: 1px solid #00dfc4;
  width: 100%;
  background: #223243;
  color: #fff;
  font-weight: 300;
  border-radius: 25px;
  font-size: 1em;
  box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.35);

  &:valid ~ span,
  &:focus ~ span {
    color: #00dfc4;
    font-size: 0.8em;
    top: 5px;
    left: 10px;
  }

  &:valid,
  &:focus {
    border-color: #00dfc4;
    background-color: #223243;
  }
  
`;

const Span = styled.span`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 1em;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.738);
  transition: all 0.3s ease;
  background-color: #223243;
  padding: 2px 2px;
  border-radius: 10px;
  border-color: solid 1px #f9fcfb;
`;

const SubmitButton = styled.input`
  background: #00dfc4;
  color: #223243;
  padding: 15px 0;
  font-weight: 500;
  cursor: pointer;
  border: none;
  border-radius: 25px;
  width: 100%;
`;

const P = styled.p`
  color: #223243;
  font-weight: 500;
  letter-spacing: 0.1em;
  font-size: 0.8em;
`;

const InputIcon = styled.i`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: #00dfc4;
  border-right: 1px solid #00dfc4;
`;

const StyledLink = styled(Link)`
  color: #223243;
  font-weight: 700;
  letter-spacing: 0.1em;
  font-size: 1.2em;
`;

// const LockIcon = styled(FaLock)`
//   font-size: 3em;
//   color: #fff;
// `;

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      id: "",
      email: "",
      password: "",
      confirmPassword: "",
      userData: null,
      redirectToLogin: false
    };
  }

  

  componentDidMount() {
    console.log("mounting is done");
    this.fetchItems();
  }

  fetchItems() {
    UserServices.getItems().then((response) => {
      this.setState({ user: response.data });
    });
  }




  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };


  handleSubmit = (event) => {
    event.preventDefault();
    const { id, user } = this.state;
    const userData = user.find((user) => user.id === parseInt(id));
    this.setState({ userData });
  };

  handleAddItem = () => {
    const { email, password, confirmPassword } = this.state;
    const { isAdmin } = this.props;

    if (password !== confirmPassword) {
      window.alert("Password and Confirm Password do not match.");
      return;
    }

    const emailExists = this.state.user.some((user) => user.email === email);
    if (emailExists) {
      window.alert("Email already exists. Please use a different email.");
      return;
    }
  
    const newUser = {
      email: email,
    password: password,
    role: isAdmin ? "admin" : "user", // Set the role as "user"
    };

    UserServices.addItem(newUser).then((response) => {
      console.log(response.data);
      this.fetchItems();
      this.setState({ email: "", password: "",  redirectToLogin: true });
      if (isAdmin) {
        window.alert('Admin added successfully!');
      } else {
        window.alert('Signup is done!');
      }
    });
  };


  render() {
    const { email, password, confirmPassword } = this.state;

    return (
      <Container>
        <Video autoPlay loop muted>
          <source src="/media/v1.mp4" type="video/mp4" />
        </Video>
        <Content>
          <Form>
            <h2>Sign Up</h2>
            <InputBox>
              <Input
                type="text"
                name="email"
                value={email}
                onChange={this.handleInputChange}
                required
              />
              <InputIcon className="fa-regular fa-envelope" />
              <Span>Email address</Span>
            </InputBox>
            <InputBox>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={this.handleInputChange}
                required
              />
              <InputIcon className="fa-solid fa-lock" />
              <Span>Create password</Span>
            </InputBox>
            <InputBox>
              <Input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.handleInputChange}
                required
              />
              <InputIcon className="fa-solid fa-lock" />
              <Span>Confirm password</Span>
            </InputBox>
            <InputBox>
              <StyledLink
                to="/login"
                type="submit"
                value="Sign Up"
                onClick={this.handleAddItem}>Sign up</StyledLink>
              
            </InputBox>
            <P>
              Already a member? <StyledLink to="/login" className="login">Log in</StyledLink>
            </P>
            
            

          </Form>
          <Google></Google>
        </Content>
      </Container>
    );
  }
}

export default Signup;