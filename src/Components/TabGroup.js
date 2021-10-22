import React, { useState } from "react";
import styled from "styled-components";
import DC from "./DC";
import Marvel from "./Marvel";
import All from "./All";
import Search from "./Search";
import "../App.css";

const Tab = styled.button`
  font-family: "Teko", sans-serif;
  width: 100%;
  font-size: 30px;
  cursor: pointer;
  opacity: 0.6;
  background: #f7ebe8;
  border-radius: 0.6rem;
  border: 0;
  outline: 0;
  @media (max-width: 337px) {
    font-size: 20px;
  }
  ${({ active }) =>
    active &&
    `
    border-bottom: 5px solid #EF233C;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  padding: 15px 10px 0 10px;
  display: flex;
  gap: 4px;
`;

function TabGroup() {
  const tabs = ["All", "Marvel", "DC", "Search"];

  const CardSection = () => {
    switch (active) {
      case "All":
        return <All />;
      case "Marvel":
        return <Marvel />;
      case "DC":
        return <DC />;
      case "Search":
        return <Search />;
      default:
    }
  };

  const [active, setActive] = useState(tabs[0]);

  return (
    <>
      <ButtonGroup>
        {tabs.map((tab) => (
          <Tab key={tab} active={active === tab} onClick={() => setActive(tab)}>
            {tab}
          </Tab>
        ))}
      </ButtonGroup>
      <p />
      <CardSection />
    </>
  );
}

export default TabGroup;
