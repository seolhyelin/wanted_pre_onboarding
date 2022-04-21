import React, { useState } from "react";
import styled from "styled-components";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

function Input() {
  const [isCheck, setIsCheck] = useState(false);
  const [exposePw, setExposePw] = useState({
    type: "password",
    visible: false,
  });

  const checkEmail = (e) => {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (regExp.test(e.target.value)) {
      setIsCheck(true);
    } else setIsCheck(false);
  };

  const convertPassword = (e) => {
    setExposePw(() => {
      if (!exposePw.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };

  return (
    <Container>
      <Subject htmlFor="email">E-mail</Subject>
      <InputWrapper>
        <StyledInput placeholder="E-mail" id="email" onChange={checkEmail} />
        <CheckIcon isCheck={isCheck} />
      </InputWrapper>
      <Subject htmlFor="password">Password</Subject>
      <InputWrapper>
        <StyledInput
          placeholder="Password"
          id="password"
          type={exposePw.type}
        />
        {exposePw.type === "password" ? (
          <InvisibleIcon onClick={convertPassword} />
        ) : (
          <VisibleIcon onClick={convertPassword} />
        )}
      </InputWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Subject = styled.label`
  color: #7d7d7d;
  margin-bottom: 7px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const CheckIcon = styled(BsFillCheckCircleFill)`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 300px;
  margin-top: 15px;
  font-size: 20px;
  color: ${({ isCheck }) => (isCheck ? "#12b8ad" : "#e0e0e0")};
`;

const InvisibleIcon = styled(AiOutlineEyeInvisible)`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 300px;
  margin-top: 15px;
  color: #474747;
  font-size: 23px;
`;

const VisibleIcon = styled(AiFillEye)`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 300px;
  margin-top: 15px;
  color: #12b8ad;
  font-size: 23px;
`;

const StyledInput = styled.input`
  width: 300px;
  padding: 15px;
  margin-bottom: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 7px;
  font-size: 17px;

  &:focus {
    outline: 1px solid #7d7d7d;
  }

  &::placeholder {
    color: #e0e0e0;
  }
`;

export default Input;
