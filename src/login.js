import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(10px);
  }
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-left: 50px;
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;

const LoginForm = styled.form`
  width: 300px;
  padding: 20px;
  background: #f0f0f0;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${(props) => (props.isFormActive ? "none" : bounce)} 2s infinite;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: ${(props) => (props.isFormActive ? "auto" : "pointer")};
`;

const InputField = styled.input`
  width: 70%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const SubmitButton = styled.button`
  width: 77%;
  padding: 14px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
`;

const SocialButton = styled.button`
  width: 77%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 14px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const FacebookIcon = styled.span`
  width: 24px;
  height: 24px;
  background: url("https://static.aresourcepool.com/uploads/2015/04/facebook-and-wikipedia-3.jpeg")
    center/cover no-repeat;
  margin-right: 10px;
`;

const TwitterIcon = styled.span`
  width: 24px;
  height: 24px;
  background: url("https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png")
    center/cover no-repeat;
  margin-right: 10px;
`;

const GoogleIcon = styled.span`
  width: 24px;
  height: 24px;
  background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png")
    center/cover no-repeat;
  margin-right: 10px;
`;

const FacebookButton = styled(SocialButton)`
  background: #2323d5;
  color: white;
  font-weight: bold;
`;

const TwitterButton = styled(SocialButton)`
  background: black;
  color: white;
  font-weight: bold;
`;

const GoogleButton = styled(SocialButton)`
  background: white;
  font-weight: bold;
`;

const RememberMeCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const RememberMeText = styled.label`
  font-size: 14px;
`;

const Login = () => {
  const [isFormActive, setIsFormActive] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleFormClick = () => {
    setIsFormActive(true);
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleOutsideClick = (e) => {
    if (isFormActive && !e.target.closest("form")) {
      setIsFormActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isFormActive]);

  return (
    <LoginContainer>
      <LoginForm isFormActive={isFormActive} onClick={handleFormClick}>
        <h1>Welcome Back!</h1>
        <InputField
          type="text"
          placeholder="Username or Email"
          onFocus={handleFormClick}
        />
        <InputField
          type="password"
          placeholder="Enter Your Password"
          onFocus={handleFormClick}
        />

        <SubmitButton type="submit">Login</SubmitButton>

        <RememberMeCheckbox onClick={toggleRememberMe}>
          <Checkbox type="checkbox" checked={rememberMe} />
          <RememberMeText>Remember Me</RememberMeText>
        </RememberMeCheckbox>

        <FacebookButton>
          <FacebookIcon />
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            Login with Facebook
          </a>
        </FacebookButton>
        <TwitterButton>
          <TwitterIcon />
          <a
            href="https://twitter.com/i/flow/login"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            Login with Twitter
          </a>
        </TwitterButton>
        <GoogleButton>
          <GoogleIcon />
          <a
            href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dgoogle%2Bsignin%26oq%3Dgoogle%2Bsignin%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDIwNTNqMGoxqAIAsAIA%26sourceid%3Dchrome%26ie%3DUTF-8&ec=GAZAAQ&hl=en&ifkv=AVQVeyxQ7m15So6WogLUy_AqzsaDzJjdTeohFWYjUJDbG1OSeO0_5VMVbwZirwK93uHdh3XjGcPZ&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-301266474%3A1698563853032610&theme=glif"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            Login with Google
          </a>
        </GoogleButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
