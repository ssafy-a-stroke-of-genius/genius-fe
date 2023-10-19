import styled from "styled-components";

const Button = styled.button`
  /* default는 작은 파란 버튼 */
  border: none;
  border-radius: 15px;
  width: 180px;
  height: 60px;
  font-size: 20px;
  color: white;
  background-color: #0032b7;
  cursor: pointer;

  /* large가 넘어오면 큰 파란색 버튼 */
  ${(props) => props.large && `width: 200px; height: 50px;`}

  /* red가 넘어오면 작은 빨간 버튼 */
  ${(props) => props.red && `background-color: #FF0000;`}
`;

export default Button;
