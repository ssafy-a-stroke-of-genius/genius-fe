import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 11.625rem;
  height: 11.875rem;
  border-radius: 1.25rem;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NewsTitle = styled.p`
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 10px;
  width: 80%;
  height: 50%;

  overflow-wrap: break-word; /* 단어가 너무 길면 줄바꿈 */
  word-wrap: break-word; /* 이전 브라우저 호환성을 위해 */
  overflow: hidden; /* 넘치는 텍스트 숨기기 */
`;

const NewsDate = styled.p`
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-top: 30px;
  padding-bottom: 20px;
`;

const NewIcon = styled.p`
  color: #ffc727;
  text-align: center;
  font-family: Pretendard Variable;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 10px;
  margin-top: 30px;
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
