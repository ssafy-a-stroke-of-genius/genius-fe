import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import NewsItem from "../components/NewsItem";
import NewsCard from "../components/NewsCard"

const PaddingContainer = styled.div`
  padding: 10px; // 원하는 패딩 값 설정
  display: flex;
  flex-direction: column;
`;



const Router = () => {
  const categories = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999];
  const seriesName = "등락률"; // name 값
  const seriesData = [30, 40, 35, 50, 49, 60, 70, 42, 23]; // data 값

  const writerIconImg = "/images/writerIcon.svg";
  const newsItemImg = "/images/newsItemImg.svg";
  return (
    <BrowserRouter>
      <PaddingContainer>
      {/* <NewsItem 
  title="수재우" 
  date="10/26"
  iconSrc={writerIconImg}
  newsImageSrc={newsItemImg}
  newsTitle="1984년, 대회 조공 별똥별 내렸..."
  newsSummary="1984년, 대한민국 조공 보았는 아니 먹다가 더 알림이 뿐만 요소이다. 이 고체는 도덕'더..."
/> */}
      </PaddingContainer>
      <PaddingContainer>
        {/* <NewsCard title={"제목입니다"} date={"2023-08-23"}/> */}

      </PaddingContainer> 
        {/* <Button/> */}
        {/* <Graph categories={categories} seriesName={seriesName} seriesData={seriesData} /> */}
      
     
      <Routes>
        <Route path="/"  />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
