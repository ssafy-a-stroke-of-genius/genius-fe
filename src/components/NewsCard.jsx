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
`;

const NewsTitle = styled.p`
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const NewsDate = styled.p`
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const NewIcon = styled.p`
  color: #ffc727;
  text-align: center;
  font-family: Pretendard Variable;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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
