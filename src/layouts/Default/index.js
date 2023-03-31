import AuthUser from "./AuthUser";
import { BorderOuterOutlined, UserOutlined } from "@ant-design/icons";
import { Footer, Header, Main, Sidebar, Content, Layout, Logo, MenuItem } from "./styles";
import { Link } from "react-router-dom";

const DefaultLayout = ({ children }) => {

  return (
    <Layout>
      <Sidebar>
        <Logo>Green Academy</Logo>

        <MenuItem>
          <Link to='/dashboard'>
            <BorderOuterOutlined /> <span>Dashboard</span>
          </Link>
        </MenuItem>

        <MenuItem>
          <Link to='/student'>
            <UserOutlined /> <span>Student</span>
          </Link>
        </MenuItem>
      </Sidebar>

      <Content>
        <Header>
          <AuthUser />
        </Header>

        <Main>
          {children}
        </Main>

        <Footer>Powered by Phat</Footer>
      </Content>
    </Layout>
  );
};

export default DefaultLayout;
