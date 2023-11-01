import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  /* border-radius: 1.25rem; */
  /* 기본 크기 설정 */
  width: 140px;
  /* height: 140px; */

  /* 미디어 쿼리를 사용하여 화면 크기에 따라 크기 조절 */
  /* @media (max-width: 1500px) { */
  /* 브라우저 창 너비가 768px 이하인 경우 */
  /* width: 140px;
    height: 140px;
  } */
  background-color: #fff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  margin-right: 15px;
`;

const NewsTitle = styled.p`
  font-size: 17px;
  color: #000;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
`;

const NewsDate = styled.p`
  font-size: 12px;
  color: #000;
  font-family: "Montserrat", sans-serif;
`;

const NewIcon = styled.p`
  font-size: 10px;
  color: #ffc727;
  font-family: Pretendard Variable;
  font-weight: 500;
`;

const NewsCard = ({ title, date }) => {
  return (
    <CardContainer>
      <NewIcon>NEW</NewIcon>
      <NewsTitle>{title}</NewsTitle>
      <NewsDate>{date}</NewsDate>
    </CardContainer>
  );
};

export default NewsCard;
