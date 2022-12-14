import { Button } from "@mui/material";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import WhatsAppIcon from '../assets/WhatsAppIcon.png'
import React from "react";
import { auth } from "../config/firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle, _user, _loading, error] = useSignInWithGoogle(auth);

  return (
    <StyledContainer>
      <Head>
        <title>login</title>
      </Head>

      <StyledLoginContainer>
        <StyledImageWrapper>
          <Image src={WhatsAppIcon} alt="whatsapp" width={200} height={200} />
        </StyledImageWrapper>
        <Button variant="outlined" onClick={() => signInWithGoogle()}>
          sign in with google
        </Button>
      </StyledLoginContainer>
    </StyledContainer>
  );
};

export default Login;
const StyledContainer = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: whitesmoke;
`;

const StyledLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 /0.1), 0 4px 6px -4px rgb(0 0 0 /0.1);
`;

const StyledImageWrapper = styled.div`
  margin-bottom: 50px;
`;
