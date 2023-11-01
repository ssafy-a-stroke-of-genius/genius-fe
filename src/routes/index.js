import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import styled from "styled-components";

import Button from "../components/Button"
import Graph from "../components/Graph";
import NewsCard from "../components/NewsCard";

const PaddingContainer = styled.div`
  padding: 10px; // 원하는 패딩 값 설정
  display: flex;
`;



const Router = () => {
  const categories = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999];
  const seriesName = "등락률"; // name 값
  const seriesData = [30, 40, 35, 50, 49, 60, 70, 42, 23]; // data 값


  return (
    <BrowserRouter>
      <PaddingContainer>
        <NewsCard title={"제목입니다"} date={"2023-08-23"}/>
        <NewsCard title={"제목입니다"} date={"2023-08-23"}/>
      </PaddingContainer>
      <PaddingContainer>
        <NewsCard title={"제목입니다"} date={"2023-08-23"}/>
        <NewsCard title={"제목입니다"} date={"2023-08-23"}/>
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
