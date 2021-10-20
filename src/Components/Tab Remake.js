import React, { useState } from 'react';
import styled from 'styled-components';
import DC from "./DC";
import Marvel from "./Marvel";
import All from "./All";

const Tab = styled.button`
  font-family: "Teko", sans-serif;
  width:100%;
  font-size: 30px;
  padding: 10px 40px;
  cursor: pointer;
  opacity: 0.6;
  background: #f7ebe8;
  border-radius: 0.6rem;
  margin: 10px;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 5px solid #e54b4b;
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;



function TabGroup() {   
  const tabs = ['All', 'Marvel', 'DC'];
      //   {active === "All" ?(
      //     <div><All/></div>
      // ): null}
      // {active === "Marvel" ?(
      //     <div><Marvel/></div>
      // ): null}
      // {active === "DC" ?(
      //     <div><DC/></div>
      // ): null}
  const CardSection = () => {
    switch (active) {
        case "All":   return <All/>;
        case "Marvel": return <Marvel/>;
        case "DC":  return <DC/>;
    }}


  const [active, setActive] = useState(tabs[0]);

  return (
    <>
      <ButtonGroup>
        {tabs.map(tab => (
          <Tab
            key={tab}
            active={active === tab}
            onClick={() => setActive(tab)}
          >
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