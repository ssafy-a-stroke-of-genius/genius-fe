import styled from "styled-components";

const Button = styled.button`
  /* default는 작은 파란 버튼 */
  border: none;
  border-radius: 20px;
  color: white;
  cursor: pointer;

  /* login이나 join이 넘어오면 로그인, 회원가입 버튼 */
  ${(props) =>
    (props.login || props.join) &&
    `width: 160px;
   height: 40px;
   background-color: #006ED3;
   font-size: 16px;
   `}

  ${(props) =>
    props.stockPageBuy &&
    `
    width: 80px;
    height: 40px;
    font-size: 18px;
    background-color: #006ED3;
  `}

${(props) =>
    props.stockPageSell &&
    `
    width: 80px;
    height: 40px;
    font-size: 18px;
    background-color: #FF7456;
  `}

${(props) =>
    props.stockModalBuy &&
    `
    width: 180px;
    height: 60px;
    font-size: 24px;
    background-color: #006ED3;
  `}

${(props) =>
    props.stockModalSell &&
    `
    width: 180px;
    height: 60px;
    font-size: 24px;
    background-color: #FF7456;
  `}

${(props) =>
    props.projectPageNew &&
    `
    width: 120px;
    height: 40px;
    font-size: 16px;
    background-color: #006ED3;
  `}

  
${(props) =>
    props.projectModalNew &&
    `
    width: 150px;
    height: 50px;
    font-size: 20px;
    background-color: #006ED3;
  `}

${(props) =>
    props.projectModalCancel &&
    `
    width: 150px;
    height: 50px;
    font-size: 20px;
    background-color: #FF7456;
  `}
`;

export default Button;
