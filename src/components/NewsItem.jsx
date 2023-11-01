import React from "react";
import styled from "styled-components";

const NewsItemContainer = styled.div`
  border: 1px solid #e0e0e0;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
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
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const WriterName = styled.p`
  font-size: 14px;
  margin: 0;
`;

const NewsDate = styled.p`
  color: gray;
  font-size: 12px;
  margin: 0;
`;

const NewsItemContents = styled.div`
  display: flex;
  flex-direction: row;
`;

const NewsImg = styled.img`
  width: 100%;
  margin-top: 10px;
`;

const NewsItemSummary = styled.div`
  margin-top: 10px;
`;

const NewsTitle = styled.h3`
  font-size: 16px;
`;

const NewsSummary = styled.p`
  font-size: 14px;
  color: #888;
`;

const NewsItem = ({
  title,
  date,
  iconSrc,
  newsImageSrc,
  newsTitle,
  newsSummary,
}) => {
  return (
    <NewsItemContainer>
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
    </NewsItemContainer>
  );
};

export default NewsItem;
