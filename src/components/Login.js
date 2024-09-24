import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logoin from "../assets/svg-export/logoin.webp"
import Lunaimg from "../assets/svg-export/lunaimg.webp"
import Googlelogo from "../assets/svg-export/Googlelogo.svg.png"
function Login() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // You can add any sign-in logic here if needed
    navigate("/home");
  };

  return (
    <Container>
      <Nav>
        <a href="/">
          <img src={Logoin} alt="Logoin" />
        </a>

        <div>
          <Join onClick={handleSignIn}>Join now</Join>
          <SignIn onClick={handleSignIn}>Sign in</SignIn>
        </div>
      </Nav>

      <Section>
        <Hero>
          <h1>Welcome to your Professional Community</h1>
          <img src={Lunaimg} alt="lunaimg" />
        </Hero>

        <Form>
          <Google onClick={handleSignIn}>
            <img src={Googlelogo} alt="google-logo" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  padding: 0;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    img {
      width: 300px;
      height: 80px;
    }
  }
`;

const Join = styled.button`
  font-size: 16px;
  padding: 16px 12px;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`;

const SignIn = styled.button`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 16px 24px;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
  }
`;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 1128px;
  margin: auto;
  padding: 60px 0;
  min-height: 700px;
  align-items: center;
`;

const Hero = styled.div`
  width: 100%;

  h1 {
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
  }

  img {
    width: 700px;
    position: absolute;
    height: 670px;
    top: 200px;
    right: -150px;
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  border-radius: 28px;
  background-color: #fff;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  transition-duration: 167ms;

  img{
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

export default Login;

