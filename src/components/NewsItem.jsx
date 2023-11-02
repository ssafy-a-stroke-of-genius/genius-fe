import React from "react";
import styled from "styled-components";
import useWindowDimension from "../useWindowDimension";

const NewsItemContainer = styled.div`
  display: flex;
  width: 25.75rem;
  height: 10rem;
  padding: 0.5625rem 1.25rem 0.5625rem 1.25rem;
  /* justify-content: flex-end; */
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  /* border: 1px solid black; */
`;

const NewsItemWrapper = styled.div`
  width: 21.3125rem;
  height: 8.875rem;
`;

const NewsItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const WriterContainer = styled.div`
  display: flex;
  align-items: center;
`;

const WriterIcon = styled.img`
  width: 1.875rem;
  height: 1.875rem;
`;

const WriterName = styled.p`
  padding-left: 10px;
  color: #222;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.8125rem; /* 321.429% */
`;

const NewsDate = styled.p`
  color: #222;
  font-family: Pretendard Variable;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.8125rem; /* 375% */
`;

const NewsItemContents = styled.div`
  display: flex;
  flex-direction: row;
`;

const NewsImg = styled.img`
  width: 5.9375rem;
  height: 4.0625rem;
`;

const NewsItemSummary = styled.div`
  /* margin-top: 10px; */
  padding-left: 10px;
`;

const NewsTitle = styled.h3`
  color: #222;
  font-family: Pretendard Variable;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const NewsSummary = styled.p`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.25rem; /* 166.667% */
`;

const NewsItem = ({
  title,
  date,
  iconSrc,
  newsImageSrc,
  newsTitle,
  newsSummary,
}) => {
  const { width } = useWindowDimension();

  const adjustedStyle = {
    ...(width < 600
      ? { height: "120px", width: "300px" }
      : { height: "160px", width: "412px" }),
  };

  return (
    <NewsItemContainer style={adjustedStyle}>
      <NewsItemWrapper>
        <NewsItemHeader>
          <WriterContainer>
            <WriterIcon src={iconSrc} alt="writer icon" />
            <WriterName>{title}</WriterName>
          </WriterContainer>

          <NewsDate>{date}</NewsDate>
        </NewsItemHeader>

        <NewsItemContents>
          <NewsImg src={newsImageSrc} alt="news image" />
          <NewsItemSummary>
            <NewsTitle>{newsTitle}</NewsTitle>
            <NewsSummary>{newsSummary}</NewsSummary>
          </NewsItemSummary>
        </NewsItemContents>
      </NewsItemWrapper>
    </NewsItemContainer>
  );
};

export default NewsItem;
