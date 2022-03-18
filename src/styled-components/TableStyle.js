import styled from 'styled-components';
import border from '../assets/border.png';

const H2 = styled.h2`
  display: inline-block;
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 42px;
  padding-top: 18px;
  margin-right: 15px;

  @media(max-width: 732px) {
    margin-right: 0;
  }
`;

const Span = styled.span`
  color: #71FFA0;
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  transform: translateY(-8px);
  margin-right: 11px;
`;

const BorderNetSalary = styled.div`
  box-sizing: border-box;
  background-image: url(${ border });
  color: #71FFA0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  height: 134px;
  line-height: 56px;
  padding-top:  43px;
  text-align: center;
  width: 401px;
`;

const DivNetSalary = styled.div`
  display: flex;
  justify-content: center;
  height: 134px;
  width: 780px;
  max-width: 1254px;
  margin: 68px auto;
  width: 95%;

  @media(max-width: 800px) {
    flex-wrap: wrap;
    width: 401px;
    justify-content: center;
    height: 260px;
    margin-top: 0px;
  }
`;

const PTable = styled.p`
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 53px;
`;

const TableContainer = styled.div`
  width: 460px;
  height: 369px;
  margin: 0 auto 40px;
`;

const Tr = styled.td`
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  margin-bottom: 26px;
  width: 460px;
`;

const Hr = styled.hr`
  border: 1px solid rgba(255, 255, 255, 0.7);
  margin: 10px 0 22px 0;
`;

const ButtonClear = styled.button`
  display: block;
  background: none;
  cursor: pointer;
  border-style: none;
  color: #71FFA0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  margin: 0 auto;

  :focus {
    box-shadow: none;
    outline: 0;
  }
`;


export { 
  H2,
  BorderNetSalary,
  DivNetSalary,
  Span,
  PTable,
  TableContainer,
  Tr,
  Hr,
  ButtonClear
};