import styled from 'styled-components';


const Img = styled.img`
  display: block;
  height: 60px;
  width: 57.47px;
  margin: 45.59px auto 58.41px;
`;

const H1 = styled.h1`
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
`;

const MainContainerCalculator = styled.div`
  display: flex;
  
  justify-content: space-between;
  height: 144px;
  margin: 61px auto;
  max-width: 1254px;
  width: 100%;

  @media(max-width: 1096px) {
    flex-wrap: wrap;
    height: 750px;
    width: 395px;
    justify-content: center;
  }
`;

const ButtonCalculate = styled.button`
  align-self: center;
  background: #71FFA0;
  border-radius: 50px;
  border-style: none;
  color: #35255F;
  cursor: pointer;
  height: 67px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  width: 173px;

  :focus {
    box-shadow: none;
    outline: 0;
  }
`;

export { 
  MainContainerCalculator,
  ButtonCalculate,
  Img,
  H1,
}