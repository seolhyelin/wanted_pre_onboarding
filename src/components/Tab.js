import React, { useState } from "react";
import styled from "styled-components";

function Tab() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabContArr = [
    {
      tabTitle: (
        <div
          className={`tab ${activeIndex === 0 ? "is-active" : ""}`}
          onClick={() => tabClickHandler(0)}
        >
          감자
        </div>
      ),
    },
    {
      tabTitle: (
        <div
          className={`tab ${activeIndex === 1 ? "is-active" : ""}`}
          onClick={() => tabClickHandler(1)}
        >
          고구마
        </div>
      ),
    },
    {
      tabTitle: (
        <div
          className={`tab ${activeIndex === 2 ? "is-active" : ""}`}
          onClick={() => tabClickHandler(2)}
        >
          카레라이스
        </div>
      ),
    },
  ];

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  return (
    <Container>
      <TabMenu>
        {tabContArr.map((section, index) => {
          return <div key={index}>{section.tabTitle}</div>;
        })}
      </TabMenu>
    </Container>
  );
}

const Container = styled.div``;

const TabMenu = styled.button`
  display: flex;
  justify-content: space-evenly;
  border: none;
  font-size: 20px;
  background-color: white;
  color: #c7c7c7;

  & .tab {
    height: 45px;
    padding-left: 50px;
    padding-right: 50px;
    white-space: nowrap;
    border-bottom: solid 3px #c7c7c7;
  }

  & .tab.is-active {
    border-bottom: solid 3px #12b8ad;
    color: black;
  }
`;

export default Tab;
