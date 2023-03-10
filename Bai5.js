import { useState } from "react";
import { Table, Input, Button, Modal } from "antd";

const DEFAULT_STUDENT = { name: "", studentID: "", score: "", className: "" };

const Bai5 = () => {
  const [formData, setFormData] = useState({ DEFAULT_STUDENT });
  const [dataSource, setDataSource] = useState([]);
  const [open, setOpen] = useState(false);

  const onCreate = () => {
    setOpen(true);
  };

  const onEdit = (student) => {
    setFormData(student);
    setOpen(true);
  };

  const onDelete = () => {};

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = () => {
    if (formData.id) {
      const newDataSource = dataSource.map((item) => {
        if (item.id === formData.id) {
          return formData;
        } else {
          return item;
        }
      });

      setDataSource(newDataSource);
    } else {
      setDataSource([
        ...dataSource,
        {
          id: Math.random(),
          ...formData,
        },
      ]);
    }

    setFormData(DEFAULT_STUDENT);
    setOpen(false);
  };

  const onCancel = () => {
    setOpen(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Student ID",
      dataIndex: "studentID",
      key: "studentID",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
    },
    {
      title: "Class Name",
      dataIndex: "className",
      key: "className",
    },
    {
      title: "",
      dataIndex: "actions",
      render: (text, item) => {
        return (
          <div>
            <button
              onClick={() => {
                onEdit(item);
              }}
            >
              Edit
            </button>
            <button>Delete</button>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <Modal open={open} onOk={onSubmit} onCancel={onCancel}>
        <Input name="name" value={formData.name} onChange={onChange} />
        <Input
          name="studentID"
          value={formData.studentID}
          onChange={onChange}
        />
        <Input name="score" value={formData.score} onChange={onChange} />
        <Input
          name="className"
          value={formData.className}
          onChange={onChange}
        />
      </Modal>

      <Button onClick={onCreate}>New Student</Button>

      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Bai5;
