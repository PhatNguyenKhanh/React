import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 17.5rem 1fr;
`;

export const Sidebar = styled.div`
  background-color: #eeeeee;
  a {
    display: block;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: start;
  color: #171e2d;
  font-weight: 700;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: #1118271a;
  }

  .anticon {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  span {
    display: inline-block;
    line-height: 1.625rem;
  }
`;

export const Content = styled.div`
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-item: center;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f1f3;
  padding: 0.5rem 1rem;
`;

export const Logo = styled.a`
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 1rem;
`;

export const Main = styled.main`
  min-height: calc(100vh - 9.5rem);
  padding: 1rem;
  oveflow-y: auto;
`;

export const Footer = styled.footer`
  text-align: center;
  border-bottom: 1px solid #f0f1f3;
  padding: 1rem;
`;
