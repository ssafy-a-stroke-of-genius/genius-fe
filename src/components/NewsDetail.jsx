import React from "react";
import styled from "styled-components";

// 스타일 상수 정의
const ContainerWidth = "47.125rem";
const ContainerHeight = "51.5625rem";
const IconSize = "5.5625rem";
const TitleWidth = "38.1875rem";
const ImgWidth = "30.3125rem";
const TextWidth = "43.75rem";
const FontFamily = "Pretendard Variable";

// 스타일 컴포넌트 정의
const NewsContainer = styled.div`
  display: flex;
  width: ${ContainerWidth};
  height: ${ContainerHeight};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-left: 1px solid #f0f0f0;
`;

const NewsHeader = styled.div`
  display: flex;
`;

const WriterIcon = styled.img`
  width: ${IconSize};
  height: ${IconSize};
  flex-shrink: 0;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
`;

const WriterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline; // 작성자 이름과 날짜를 기준선에 정렬
`;

const WriterName = styled.p`
  color: #000;
  font-family: ${FontFamily};
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const NewsTitle = styled.div`
  display: flex;
  width: ${TitleWidth};
  height: 2.8125rem;
  flex-direction: column;
  justify-content: flex-end;
  flex-shrink: 0;
  color: #000;
  font-family: ${FontFamily};
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.8125rem;
`;

const NewsDate = styled.p`
  color: #9f9f9f;
  font-family: ${FontFamily};
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const NewsContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NewsImg = styled.img`
  width: ${ImgWidth};
  height: 13.6875rem;
  flex-shrink: 0;
  padding: 3.125rem 0;
`;

const NewsText = styled.p`
  width: ${TextWidth};
  color: #000;
  font-family: ${FontFamily};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 300;
  line-height: 2.1875rem;
`;

const NewsDetail = ({ iconSrc, date, newsTitle, imgSrc, text, writerName }) => {
  return (
    <NewsContainer>
      <NewsHeader>
        <WriterIcon src={iconSrc} alt="writer icon" />
        <TitleContainer>
          <WriterInfo>
            <WriterName>{writerName}</WriterName>
            <NewsDate>{date}</NewsDate>
          </WriterInfo>
          <NewsTitle>{newsTitle}</NewsTitle>
        </TitleContainer>
      </NewsHeader>
      <NewsContents>
        <NewsImg src={imgSrc} alt="news image" />
        <NewsText>{text}</NewsText>
      </NewsContents>
    </NewsContainer>
  );
};

export default NewsDetail;
