import React from "react";
import styled from "styled-components";
import NewsListItem from "./item/NewsListItem";

const NewsListContainer = styled.div`
  display: flex;
  width: 25.75rem;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`;

const writerIconImg = "/images/writerIcon.svg";
const newsItemImg = "/images/newsItemImg.svg";

// 뉴스 아이템 데이터 배열
const newsItems = [
  {
    title: "수재우",
    date: "10/26",
    iconSrc: writerIconImg,
    newsImageSrc: newsItemImg,
    newsTitle: "1984년, 대회 조공 별똥별 내렸...",
    newsSummary:
      "1984년, 대한민국 조공 보았는 아니 먹다가 더 알림이 뿐만 요소이다. 이 고체는 도덕'더...",
  },
  {
    title: "수재우",
    date: "10/26",
    iconSrc: writerIconImg,
    newsImageSrc: newsItemImg,
    newsTitle: "1984년, 대회 조공 별똥별 내렸...",
    newsSummary:
      "1984년, 대한민국 조공 보았는 아니 먹다가 더 알림이 뿐만 요소이다. 이 고체는 도덕'더...",
  },
  // 다른 뉴스 아이템 데이터 추가
];

const NewsList = () => {
  return (
    <NewsListContainer>
      {newsItems.map((item, index) => (
        <NewsListItem
          key={index}
          title={item.title}
          date={item.date}
          iconSrc={item.iconSrc}
          newsImageSrc={item.newsImageSrc}
          newsTitle={item.newsTitle}
          newsSummary={item.newsSummary}
        />
      ))}
    </NewsListContainer>
  );
};

export default NewsList;
