import { Table, Button } from "antd";

const TableStudents = (props) => {
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
            <Button
              onClick={() => {
                props.onEdit(item);
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                props.onDelete(item);
              }}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return <Table dataSource={props.dataSource} columns={columns} />;
};

export default TableStudents;
