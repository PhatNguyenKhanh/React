import { Table, Button } from "antd";
import { Actions } from "./styles";

const TableBooks = (props) => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Page",
      dataIndex: "page",
      key: "page",
    },
    {
      title: "",
      dataIndex: "actions",
      render: (text, item) => {
        return (
          <Actions>
            <Button
              disabled={props.itemLoading}
              onClick={() => {
                props.onEdit(item.id);
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                props.onDelete(item.id);
              }}
            >
              Delete
            </Button>
          </Actions>
        );
      },
    },
  ];

  return <Table loading={props.loading} dataSource={props.dataSource} columns={columns} />;
};

export default TableBooks;
