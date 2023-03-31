import { directive } from "@babel/types";
import { useState } from "react";

const Bai2 = () => {
  // const [student, setStudent] = useState({ id: '123', score: 10 })
  // const [studentList, setStudentList] = useState([{ id: '123', score: 10 }, { id: '456', score: 10 }])

  const [user, setUser] = useState({
    name: "Phat",
    email: "khanhphat@gmail.com",
  });
  const [userList, setUserList] = useState([
    { name: "Phat", email: "khanhphat@gmail.com" },
    { name: "Diem", email: "kieudiem@gmail.com" },
  ]);

  //   const onClick= () => {
  //     setStudentList([
  //         ...studentList,
  //         student
  //     ]);

  //     setStudent({ id: "", score: '' })
  //   }

  const onClick = () => {
    setUserList([...userList, user]);

    setUser({ name: "", email: "" });
  };

  //   const onChange= (e) => {
  //       console.log(e.target)
  //     setStudent ({
  //         ...student,
  //         [e.target.name]: e.target.value
  //     })
  //   }
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      {/* <div>
                <input name='id' value={student.id} onChange={onChange} />
                <input name='score' value={student.score} onChange={onChange} />
                <button onClick={onClick}>Add</button>
            </div> */}

      <div>
        <input name="name" value={user.name} onChange={onChange} />
        <input name="email" value={user.email} onChange={onChange} />
        <button onClick={onClick}>Add</button>
      </div>

      {/* {studentList.map((item) => {
                return (
                    <div>
                        <div>Id Student: {item.id}</div>
                        <div>Score: {item.score}</div>
                    </div>
                )
            })} */}

      {userList.map((item) => {
        return (
          <div>
            <div>Name: {item.name}</div>
            <div>Email: {item.email}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Bai2;
