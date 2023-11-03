import React from "react";
import UserService from "../Services/UserServices";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaLock } from 'react-icons/fa';
import { setToLocalStorage } from "../Services/localStorageUtil";
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import Google from "./Google";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  height: 100%;
  width: 100%;
`;
const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40px;
  //background-color: rgba(0, 0, 0, 0.3); /* Set the background color to transparent */

  .lock-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    width: 100%;
  }
  .form-container {
    background-color: rgba(255, 255, 255, 0.2); /* Set the background color to transparent */
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const InputBox = styled.div`
  position: relative;
  width: 400px; /* Increase width for bigger input boxes */
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
  left: 15px; /* Adjust left padding */
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

const StyledLink = styled(Link)`
  color: white;
  font-weight: 700;
  letter-spacing: 0.1em;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
`;

// const VideoContainer = styled.div`
//   position: relative;
//   height: 100%;
// `;

// const Video = styled.video`
//   position: absolute;
//   height: 100%;
// `;
const LockIcon = styled(FaLock)`
  font-size: 3em;
  color: #fff;
`;

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      email: "",
      password: "",
      userData: null,
      errorMessages: {
        name: "",
        message: "",
      },
    };
  }

  componentDidMount() {
    console.log("mounting is done");
    this.fetchItems();
  }



  fetchItems() {
    UserService.getItems().then((response) => {
      this.setState({ user: response.data });
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const userData = this.state.user.find((user) => user.email === email);
  
    if (userData) {
      if (userData.password !== password) {
        // Invalid password
        this.setState({
          errorMessages: {
            name: "password",
            message: "Invalid password",
          },
        });
      } else {
        setToLocalStorage("userEmail", this.state.email);
        this.setState({ userData, isSubmitted: true });
  
        // Check the user role and set flags accordingly
        if (userData.role === "user") {
          //this.props.setIsUser(true);
          setToLocalStorage("isUser", true);
        } else if (userData.role === "admin") {
         // this.props.setIsAdmin(true);
         setToLocalStorage("isAdmin", true);
        }
  
        // Set isAuthenticated to true
       // this.props.setIsAuthenticated(true);
       setToLocalStorage("isAuthenticated", true);
        window.alert('Successfully logged in...!!!');
      }
    } else {
      // Username not found
      this.setState({
        errorMessages: {
          name: "email",
          message: "Username not found",
        },
      });
    }
  };
  // Generate JSX code for error message
  renderErrorMessage = (name) =>
    name === this.state.errorMessages.name && (
      <div className="error">{this.state.errorMessages.message}</div>
    );

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    //const { isSubmitted } = this.state;
    const { isSubmitted } = this.state;

    const renderForm = (
      <Form>
        {/* <div className="video">
          <video src={svideo} muted autoPlay loop type="video/mp4" playbackRate={0.05}></video>
        </div> */}
        <form onSubmit={this.handleSubmit}>
          <InputBox>
            <Input
              type="text"
              name="email"
              required
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <i className="fa-regular fa-envelope"></i>
            <Span>Username</Span>
            {this.renderErrorMessage("email")}
          </InputBox>
          <br></br>
          <InputBox>
            <Input
              type="password"
              name="password"
              required
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <i className="fa-solid fa-lock"></i>
            <Span>Password</Span>
            {this.renderErrorMessage("password")}
          </InputBox>
          <br></br>
          <InputBox>
            <p>
              <StyledLink to="/" type="submit" onClick={this.handleSubmit} value="Sign In">
                Sign In
              </StyledLink>
              
            </p>
          </InputBox>
        </form>
      </Form>
    );

    return (
      <Container>
        <Video autoPlay muted loop>
          <source src="/media/v1.mp4" type="video/mp4" />
        </Video>
        <Content>
          <div className="form-container">
            <div className="lock-icon">
              <LockIcon />
            </div>
            {isSubmitted ? (
              <StyledLink to="/" type="submit" value="Sign In">
                Sign In
              </StyledLink>

              
            ) : (
              renderForm
            )}
              
          </div>
          
        </Content>
       
        
      </Container>
    );
  }
}

export default Signin;