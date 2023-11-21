import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

interface SignUpData {
  email: string;
  password: string;
}

const Signup = () => {
  // const [signData, setSignData] = useState<SignUpData>();
  const [email, setEmail] = useState("");

  const submitHandler = (event) => {};

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    console.log(email);
  }, [email]);

  return (
    <SignupContainer>
      <Header>
        <FontAwesomeIcon icon={faChevronLeft} size={"2x"} />
      </Header>
      <TitleContainer>
        <Title alignItems={"flex-start"}>
          <h1>대림대학교에</h1>
          <h1>
            <span>실시간 주차 확인</span>
          </h1>
        </Title>

        <Title alignItems={"flex-end"}>
          <h1>차 대</h1>
        </Title>
      </TitleContainer>

      <SubTitle>
        <p>
          대림대학교 차대 서비스는
          <br />
          <br /> 학교 포털사이트 계정으로 회원가입 할 수 있습니다. 사용 가능한
          직원, 학생 이메일로 가입해 주세요!
        </p>
      </SubTitle>

      <SignUpForm>
        <input
          type="text"
          name="email"
          value={email}
          onChange={emailChangeHandler}
        />
        <input type="password" name="password" />
        <input type="password" name="passwordConfirm" />
      </SignUpForm>
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Header = styled.div`
  margin-top: 5vh;
  width: 90%;
  height: 5vh;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  h1 {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  padding-top: 6vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props: any) => props.alignItems};

  h1 {
    text-align: left;
    color: #01a5da;
    font-size: 2.5rem;

    span {
      color: #cccccc;
    }
  }
`;

const SubTitle = styled.div`
  width: 90%;
  padding-top: 5vh;

  p {
    text-align: center;
    word-break: keep-all;
  }
`;

const SignUpForm = styled.div`
  width: 90%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  input {
    width: 75%;
    height: 25%;
  }
`;

export default Signup;
