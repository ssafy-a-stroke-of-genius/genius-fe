import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Graph from "../components/Graph.jsx";
import styled from "styled-components";
import NewsItem from "../components/item/NewsListItem";
import NewsCard from "../components/NewsCard"
import NewsDetail from "../components/NewsDetail";
import NewsList from "../components/NewsList";
import NavigationBar from "../components/layout/NavigationBar";

const PaddingContainer = styled.div`
  /* padding: 10px; // 원하는 패딩 값 설정 */
  display: flex;
  /* flex-direction: column; */
`;


const Router = () => {
  const categories = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999];
  const seriesName = "등락률"; // name 값
  const seriesData = [30, 40, 35, 50, 49, 60, 70, 42, 23]; // data 값

  const writerIconImg = "/images/writerIcon.svg";
  const newsItemImg = "/images/newsItemImg.svg";
  const newsTitle = "1984년, C회사 중공업 부문이 한국 경제에 빛나다!"
  const newsText = "1984년, 대한민국의 중공업 분야는 여느 때보다 더욱 활기를 띤 모습이었다. 이 중에서도 특히 'C회사'는 그 성장세를 앞장서며 국민들의 주목을 받았다. C회사는 이 해에 다양한 기계와 장비를 생산하며 국내 경제에 큰 기여를 했다. 당시 한국은 세계 각국과의 무역에서 중공업 분야의 제품 수요가 증가하는 시기였다. 이러한 바탕 위에서 C회사는 기술력 향상과 생산 능력을 꾸준히 강화해왔다. 사실, C회사는 이전부터 중공업 분야에서의 경쟁력을 갖추고 있었지만, 1984년에는 특히 그 능력이 돋보였다. 국민들 사이에서도 C회사에 대한 신뢰와 기대감이 커졌다. 많은 사람들이 C회사 제품을 사용하며 그 품질과 기술력에 만족을 표현했다. 또한, C회사는 이러한 성과를 바탕으로 새로운 일자리를 창출하며 한국 경제에 더 큰 효과를 가져다주었다.";
  return (
    <BrowserRouter>

  


      <PaddingContainer>
      <Graph/>
      <NavigationBar/>
      {/* <NewsList/> */}
      {/* <NewsDetail iconSrc={writerIconImg} date="10/26" newsTitle={newsTitle} imgSrc={newsItemImg} text={newsText} writerName="수재우 기자"/> */}
      </PaddingContainer>
      {/* <PaddingContainer> */}
        {/* <NewsCard title={"제목입니다"} date={"2023-08-23"}/> */}

      {/* </PaddingContainer>  */}
        {/* <Button/> */}
        {/* <Graph categories={categories} seriesName={seriesName} seriesData={seriesData} /> */}
      
     
      <Routes>
        <Route path="/"  />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
