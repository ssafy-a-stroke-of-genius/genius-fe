import React from "react";
import styled from "styled-components";
import useWindowDimension from "../../useWindowDimension";

// 스타일 상수 정의
const MobileWidth = "300px";
const DesktopWidth = "412px";
const ContainerHeightMobile = "120px";
const ContainerHeightDesktop = "160px";
const IconSize = "1.875rem";

// 스타일 컴포넌트 정의
const NewsItemContainer = styled.div`
  display: flex;
  width: ${DesktopWidth};
  height: ${ContainerHeightDesktop};
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
`;

const NewsItemWrapper = styled.div`
  width: 21.3125rem;
  height: 8.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  width: ${IconSize};
  height: ${IconSize};
`;

const WriterName = styled.p`
  padding-left: 10px;
  color: #222;
  font-family: Pretendard;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.25rem;
`;

const NewsDate = styled.p`
  color: #222;
  font-family: Pretendard Variable;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.25rem;
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
  padding-left: 10px;
`;

const NewsTitle = styled.h3`
  color: #222;
  font-family: Pretendard Variable;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25rem;
`;

const NewsSummary = styled.p`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1rem;
`;

const NewsListItem = ({
  title,
  date,
  iconSrc,
  newsImageSrc,
  newsTitle,
  newsSummary,
}) => {
  const { width } = useWindowDimension();

  // 미디어 쿼리에 따른 스타일 조정
  const adjustedStyle = {
    height: width < 600 ? ContainerHeightMobile : ContainerHeightDesktop,
    width: width < 600 ? MobileWidth : DesktopWidth,
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

export default NewsListItem;
