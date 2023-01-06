import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import 'firebase/auth';

// import { auth, createUserWithEmailAndPassword } from "firebase/firebase-auth";
import firebaseConfig from './firebase.config';
import TopNav from '../Shared/TopNav/TopNav';
import { UserContext } from '../../App';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "../misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "../../images/Forgot password-rafiki.svg";
import logo from "../../images/logo-tp.png";
import googleIconImageSrc from "../../images/google-icon.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";

const Container = tw(ContainerBase)`min-h-screen bg-primary-800 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;
const SocialButtonsContainer = tw.div`flex flex-col items-center cursor-pointer`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-16`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div` my-12 border-b text-center relative mb-24`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-2 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-10 h-auto -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default ({

  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Sign In",
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign In With Google",
      url: ""
    },
    // {
    //   iconImageSrc: twitterIconImageSrc,
    //   text: "Sign In With Twitter",
    //   url: "https://twitter.com"
    // }
  ],
  submitButtonText = "Sign In",
  SubmitButtonIcon = LoginIcon,
  forgotPasswordUrl = "#",
  signupUrl = "#",

}) => {


  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [newUser, setNewUser] = useState(false);
  const [loginData, setLoginData] = useState({
    userName: '',
    email: '',
    password: ''
  });


  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;

        fetch('https://yacht-voyage-server.onrender.com/admins')
          .then(res => res.json())
          .then(data => {
            //console.log(data);
            let admin = false;
            // console.log(data.some( signedInUser.email));
            data.map(singleData => {

              if (singleData.email === result.user.email) {
                admin = true;
              }
            })
            if (admin === true) {
              const signedInUser = { name: displayName, email, admin: true }
              setLoggedInUser(signedInUser);
              storeAuthToken(admin);
              setUserToSession(signedInUser);
            }
            else {
              const signedInUser = { name: displayName, email, admin: false }
              setLoggedInUser(signedInUser);
              storeAuthToken(admin);
              setUserToSession(signedInUser);
            }
            //console.log(admin);
          })
          .catch(err => {

          });

        //console.log(loggedInUser);

      }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  const storeAuthToken = (admin) => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken, 'admin', admin);
        sessionStorage.setItem('admin', admin);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  const handleChange = (e) => {
    const newLoginData = { ...loginData };
    newLoginData[e.target.name] = e.target.value;
    setLoginData(newLoginData);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const name = loginData.userName;
    const email = loginData.email;
    const password = loginData.password;

    // firebase.auth.createUserWithEmailAndPassword(email, password)
    // .then((userCredential) => {
    //   // Signed in 
    //   const user = userCredential.user;
    //   // ...
    //   console.log(user);
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // ..
    // });

    if (newUser) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // console.log(user);
          const loginName = loginData.userName;
          updateUserName(loginName);

          const { displayName, email } = user;

          fetch('https://yacht-voyage-server.onrender.com/admins')
            .then(res => res.json())
            .then(data => {
              // console.log(data);
              let admin = false;
              // console.log(data.some( signedInUser.email));
              data.map(singleData => {

                if (singleData.email === user.email) {
                  admin = true;
                }
              })
              if (admin === true) {
                const signedInUser = { name: loginName, email, admin: true }

                setLoggedInUser(signedInUser);
                storeAuthToken(admin);
                setUserToSession(signedInUser);
              }
              else {
                const signedInUser = { name: loginName, email, admin: false }

                setLoggedInUser(signedInUser);
                storeAuthToken(admin);
                setUserToSession(signedInUser);
              }
              //console.log(admin);
            })
            .catch(err => {

            });

          // console.log(loggedInUser);

          alert(`Welcome ${loginName}`);
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage, 'Error Code ', errorCode);
          // console.log(error);
          // ..
        });
    }

    if (!newUser) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
          const user = res.user;
          // console.log(user);

          const { displayName, email } = user;

          // console.log(user);

          fetch('https://yacht-voyage-server.onrender.com/admins')
            .then(res => res.json())
            .then(data => {
              //console.log(data);
              let admin = false;
              // console.log(data.some( signedInUser.email));
              data.map(singleData => {

                if (singleData.email === user.email) {
                  admin = true;
                }
              })
              if (admin === true) {
                const signedInUser = { name: displayName, email, admin: true }
                setLoggedInUser(signedInUser);
                updateUserName(name);
                storeAuthToken(admin);
                setUserToSession(signedInUser);
              }
              else {
                const signedInUser = { name: displayName, email, admin: false }
                setLoggedInUser(signedInUser);
                updateUserName(name);
                storeAuthToken(admin);
                setUserToSession(signedInUser);
              }
              //console.log(admin);
            })
            .catch(err => {

            });

          // console.log(loggedInUser);

          alert('Logged In ', loggedInUser.email);
        })
        .catch((error) => {
          const newUserInfo = {};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setLoggedInUser(newUserInfo);
          alert(error.message);
        });
    }
  }

  // const signInWithEmailAndPassword = (email, password) => {
  //   return firebase.auth().signInWithEmailAndPassword(email, password)
  //          .then(res => {
  //            const newUserInfo = res.user;
  //            newUserInfo.error = '';
  //            newUserInfo.success = true;
  //            return newUserInfo;
  //          })
  //          .catch((error) => {
  //            const newUserInfo = {};
  //            newUserInfo.error = error.message;
  //            newUserInfo.success = false;
  //            return newUserInfo;
  //          });
  // }

  const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
    }).then(function () {
      // console.log(user,name);
    }).catch(function (error) {
      console.log(error);
    });
  }

  const setUserToSession = user => {
    sessionStorage.setItem('user', JSON.stringify(user));
  }


  return (
    <AnimationRevealPage>
      <Container>
        <Content>
          <MainContainer>
            <LogoLink href={logoLinkUrl}>
              <LogoImage src={logo} />
            </LogoLink>
            <MainContent>
              <Heading>{headingText}</Heading>
              <FormContainer>
                <SocialButtonsContainer>
                  {socialButtons.map((socialButton, index) => (
                    <SocialButton
                      onClick={handleGoogleSignIn}
                      key={index}>
                      <span className="iconContainer">
                        <img src={socialButton.iconImageSrc} className="icon" alt="" />
                      </span>
                      <span className="text">{socialButton.text}</span>
                    </SocialButton>
                  ))}
                </SocialButtonsContainer>
                <DividerTextContainer>
                  <DividerText>Or Sign in with your e-mail</DividerText>
                </DividerTextContainer>
                <Form onSubmit={handleFormSubmit}>
                  {
                    newUser &&
                    <Input
                      onChange={handleChange} type="text" name='userName' placeholder="User Name" required />
                  }
                  <Input
                    onChange={handleChange}
                    type="email" placeholder="Email" name='email' required />
                  <Input
                    onChange={handleChange}
                    type="password" placeholder="Password" name='password' required />
                  {
                    newUser ?
                      <SubmitButton type="submit">
                        <SubmitButtonIcon className="icon" />
                        <span className="text"> Sign Up </span>
                      </SubmitButton>
                      :

                      <SubmitButton
                        type="submit">
                        <SubmitButtonIcon className="icon" />
                        <span className="text">Sign In </span>
                      </SubmitButton>

                  }

                </Form>
                {/* <p tw="mt-6 text-xs text-gray-600 text-center">
                <a tw="border-b border-gray-500">
                  Forgot Password ?
                </a>
              </p> */}
                <p tw="mt-8 text-sm text-gray-600 text-center">
                  {
                    newUser ? 'Go back to ' :
                      'Dont have an account? '
                  }
                  <p tw="border-b text-primary-600 border-gray-500 cursor-pointer"
                    onClick={() => setNewUser(!newUser)}
                  >
                    {
                      newUser ? 'Sign In' : 'Sign Up'
                    }
                  </p>
                </p>
              </FormContainer>
            </MainContent>
          </MainContainer>
          <IllustrationContainer>
            <IllustrationImage imageSrc={illustrationImageSrc} />
          </IllustrationContainer>
        </Content>
      </Container>
    </AnimationRevealPage>
  );
}
