import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'antd';
import { User, Image, Role, Name } from "./styles";

const AuthUser = () => {
  const navigate = useNavigate();

  const onLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Dropdown
      menu={{
        items: [
          {
            key: '0',
            label: <a onClick={onLogout}>Log out</a>,
          },
        ],
      }}
    >

      <User>
        <Image src='https://loremflickr.com/cache/resized/65535_52653627947_0c4b5854cd_c_640_480_nofilter.jpg'></Image>
        <div>
          <Role>Admin</Role>
          <Name>Nguyen Khanh Phat</Name>
        </div>
      </User>
    </Dropdown>
  );
};

export default AuthUser;
