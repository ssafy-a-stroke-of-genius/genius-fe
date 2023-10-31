import React, { useState } from "react";
import styled from "styled-components";

const options = ["전체", 1950, 1960, 1970, 1980, 1990, 2000];

// styles 적용해야함.
const DropdownContainer = styled.div`
  width: 196px;
  margin-top: 30px;
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  width: 100%;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 0.5rem;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 120%;
  width: 196px;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const DropdownItem = styled.li`
  padding: 2px 0 2px 0;
  cursor: pointer;
`;

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] =
    useState("반영할 시대를 선택해주세요.");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSelectedItem("반영할 시대를 선택해주세요.");
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const items = options.map((item, index) => (
    <DropdownItem key={index} onClick={() => handleItemClick(item)}>
      {item}
    </DropdownItem>
  ));

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>{selectedItem}</DropdownButton>
      <DropdownList isOpen={isOpen}>{items}</DropdownList>
    </DropdownContainer>
  );
}

export default Dropdown;
