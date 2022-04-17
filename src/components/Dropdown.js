import React, { useState } from "react";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
function Dropdown() {
  const [isShow, setIsShow] = useState(false);

  const dropdownShow = (e) => {
    setIsShow(!isShow);
  };
  return (
    <Container>
      <SelectWrapper onClick={dropdownShow}>
        <SelectBox>
          <p>최병언 설레린</p>
        </SelectBox>
        <ArrowIcon />
      </SelectWrapper>
      {isShow && (
        <DropdownWrapper>
          <SearchBar placeholder="Search Symbol" />
          <SearchIcon />
          <DropdownList></DropdownList>
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
  height: 50px;
  padding-left: 10px;
  border: lightgray solid 1px;
  border-radius: 8px;
  vertical-align: middle;
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
  border: lightgray solid 1px;
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
  width: 270px;
  height: 50px;
  padding-left: 40px;
  margin: 0;
  border: lightgray solid 1px;
  border-top: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export default Dropdown;
