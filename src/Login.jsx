import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "./firebase-config";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        setUserData({ displayName, email, photoURL });
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const facebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        setUserData({ displayName, email, photoURL });
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const githubLogin = async () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        setUserData({ displayName, email, photoURL });
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Logout = () => {
    signOut(auth)
      .then(() => {
        setUserData({});
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      if (result) {
        const { displayName, email, photoURL } = result;
        setUserData({ displayName, email, photoURL });
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {!isLoggedIn && (
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <img
            src="https://assets-global.website-files.com/6225a414ab1e86e4cd4c71d0/627a36e994c796af3b47ae2d_what-is-oauth.jpeg"
            alt=""
            height="300px"
            width="500px"
          />
          <br />
          <div className="mb-3">
            <button className="login-btn btn btn-danger" onClick={googleLogin}>
              Login with Google <FontAwesomeIcon icon={faGoogle} />
            </button>
          </div>
          <div className="mb-3">
            <button
              className="login-btn btn btn-primary"
              onClick={facebookLogin}
            >
              Login with Facebook{" "}
              <FontAwesomeIcon icon={faFacebook} style={{ color: "#74C0FC" }} />{" "}
            </button>
          </div>
          <div className="mb-3">
            <button
              className="login-btn btn btn-secondary"
              onClick={githubLogin}
            >
              Login with GitHub <FontAwesomeIcon icon={faGithub} />
            </button>
          </div>
        </div>
      )}
      {isLoggedIn && (
        <div className="">
          <img src={userData.photoURL} alt="" />
          <h1>{userData.displayName}</h1>
          <h3>{userData.email}</h3>
          <button onClick={Logout}>Logout</button>
        </div>
      )}
    </>
  );
};

export default Login;
