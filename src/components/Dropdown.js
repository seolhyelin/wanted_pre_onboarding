import React, { useState } from "react";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

const fruitsList = [
  "All Fruits",
  "orange",
  "grape",
  "tomato",
  "apple",
  "banana",
  "peach",
  "pineapple",
  "strawberry",
  "olive",
  "pear",
];

function Dropdown() {
  const [isShow, setIsShow] = useState(false);
  const [currentKeyword, setCurrentKeyword] = useState("All Fruits");
  const [currentList, setCurrentList] = useState(fruitsList.slice());

  const changeEvent = (e) => {
    const searchWord = e.target.value;
    const searchStage = fruitsList.slice(1).map((item) => ({
      item: item,
      string: item.slice(0, searchWord.length),
    }));

    const result = ["All Fruits"];
    for (let x of searchStage) {
      if (x.string === searchWord) result.push(x.item);
    }

    setCurrentList(result);
  };

  const dropdownShow = (e) => {
    setIsShow(!isShow);
  };

  const selectKeyword = (e) => {
    setCurrentKeyword(e.target.id);
    setIsShow(false);
  };

  return (
    <Container>
      <SelectWrapper onClick={dropdownShow}>
        <SelectBox>
          <SelectWord>{currentKeyword}</SelectWord>
        </SelectBox>
        <ArrowIcon />
      </SelectWrapper>
      {isShow && (
        <DropdownWrapper>
          <SearchBar placeholder="Search Symbol" onChange={changeEvent} />
          <SearchIcon />
          <DropdownList onClick={selectKeyword}>
            {currentList.map((item, index) => {
              return (
                <li key={index} id={item}>
                  {item}
                </li>
              );
            })}
          </DropdownList>
        </DropdownWrapper>
      )}
    </Container>
  );
}

const Container = styled.div``;

const SelectWrapper = styled.div`
  position: relative;
  cursor: pointer;
  margin-bottom: 5px;
`;

const SelectBox = styled.div`
  width: 300px;
  height: 55px;
  padding-left: 10px;
  border: lightgray solid 1px;
  border-radius: 8px;
`;

const SelectWord = styled.p`
  color: gray;
  font-size: 18px;
`;

const ArrowIcon = styled(IoMdArrowDropdown)`
  font-size: 20px;
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 275px;
  margin-top: 16px;
`;

const DropdownWrapper = styled.div`
  position: relative;
`;

const SearchBar = styled.input`
  width: 269px;
  height: 50px;
  padding-left: 40px;
  border: #d3d3d3 solid 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  &::placeholder {
    color: #ababab;
    font-size: 17px;
  }

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(BiSearch)`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 10px;
  margin-top: 16px;
  color: #ababab;
  font-size: 20px;
`;

const DropdownList = styled.ul`
  width: 310px;
  height: 100%;
  margin: 0;
  padding-inline-start: 0;
  border: #d3d3d3 solid 1px;
  border-top: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  list-style: none;
  color: #808080;
  font-size: 20px;
  line-height: 35px;
  cursor: pointer;

  li {
    padding-left: 35px;
    :hover {
      background-color: #ededed;
    }
  }
`;

export default Dropdown;
