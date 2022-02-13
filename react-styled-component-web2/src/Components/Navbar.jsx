import React from "react";
import styled from "styled-components";
const Wrapper = styled.section`
  background-color: gray;
  padding: 30px;
  position: relative;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
  position: absolute;
  left: 30px;
  top: 5px;
  bottom: 5px;

  @media all and (max-width: 500px) {
    display: none;
  }
`;

const ResourceLink = styled.div`
  color: white;
  position: absolute;
  right: 20px;
  top: 5px;
`;

const A = styled.a`
  margin: 10px;
  cursor: pointer;
  font-size: 30px;

  @media all and (max-width: 500px) {
    font-size: 15px;
  }
`;
const Navbar = () => {
  return (
    <>
      <h1>Navbar</h1>
      <Wrapper>
        <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR9tv72APr1TsBcpMDia94JLwveHQyr-qXoA&usqp=CAU"></Logo>
        <ResourceLink>
          <A>About</A>
          <A>Contact</A>
        </ResourceLink>
      </Wrapper>
    </>
  );
};
export { Navbar };
