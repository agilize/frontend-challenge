import styled from 'styled-components';

const Label = styled.label`
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 15px;
`;

const ImgVector = styled.img`
  width: 20px;
  height: 20px;
`;

const P = styled.p`
  display: inline-block;
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  margin-top: 13px;
`;

const MainContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  height: 144px;
  width: 250px;

  :nth-child(2) { 
    width: 300px;
  }

  :nth-child(3) {
    width: 360px;
  }

  @media(max-width: 1096px) {
    text-align: center;
    

    :nth-child(1) { 
    width: 100%;
    }

    :nth-child(2) { 
    width: 100%;
    }

    :nth-child(3) { 
    width: 100%;
    }
  }
`;

const Div = styled.div`
  box-sizing: border-box;
  background: #E5E2E9;
  border-radius: 50px 0px 0px 50px;
  height: 67px;
  padding-top: 20px;
  text-align: center;
  width: 72px;

  color: #595066;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
`;

const Inputs = styled.input`
  box-sizing: border-box;
  background: #FFFFFF;
  border-radius: 0px 41px 41px 0px;
  border-style: none;
  height: 67px;
  padding-left: 18px;
  width: 174px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #595066;

  :focus {
    box-shadow: none;
    outline: 0;
  }
`;

const Container = styled.div`
  display: flex;

  @media(max-width: 1096px) {
    justify-content: center;
    margin: 0 auto;
  }
`;

const InputDependents = styled(Inputs)`
  border-radius: 50px;
  padding: 0;
  text-align: center;
  width: 96px;
`;

const Button = styled.button`
  cursor: pointer;
  height: 26.67px;
  background: none;
  border-style: none;
  margin: 0;
  padding: 0;
  width: 26.67px;
  
  :focus {
    box-shadow: none;
    outline: 0;
  }
`;

const ImgButton = styled(ImgVector)`
  padding: 0;
  margin: 0;
  width: 26.67px;
  height: 26.67px;
`;

const ContainerDependents = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 185px;
`;


export { 
  Label,
  ImgVector,
  P,
  MainContainerInputs,
  Inputs,
  Div,
  Container,
  InputDependents,
  Button,
  ImgButton,
  ContainerDependents
};