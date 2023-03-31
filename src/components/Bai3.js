import { directive } from "@babel/types";
import { useState, useEffect } from "react";
import TableUserList from "./TableUserList";
import FormUser from "./FormUser";

const DEFAULT_USER = { name: "", email: "" };

const Bai3 = () => {
  const [formData, setFormData] = useState({ DEFAULT_USER });
  const [userList, setUserList] = useState([]);
  const [searchUserList, setSearchUserList] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect (() => {
      if (keyword !== '') {
          const newUserList = userList.filter((item) => {
              return item.name.includes(keyword) || item.name.includes(keyword)
          })

          setSearchUserList(newUserList)
      }
      else {
          setSearchUserList(userList)
      }
  }, [keyword, userList])

  const onClick = () => {
    if (formData.id) {
      const newUserList = userList.map((item) => {
        if (item.id === formData.id) {
          return formData;
        }

        return item;
      });

      setUserList(newUserList);
    } else {
      setUserList([
        ...userList,
        {
          id: Math.random(),
          ...formData,
        },
      ]);
    }

    setFormData(DEFAULT_USER);
  };

  const onEdit = (item) => {
    setFormData(item);
  };

  const onDelete = (item) => {
    const newUserList = userList.filter((user) => {
      return user.id !== item.id;
    });

    setUserList(newUserList);
  };

  const onSearch = (e) => {
    setKeyword(e.target.value)
  };

  return (
    <div>
      <FormUser formData={formData} setFormData={setFormData} onClick={onClick}/>

      <input value={keyword} onChange={onSearch} />

      <TableUserList dataSource={userList} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
};

export default Bai3;
