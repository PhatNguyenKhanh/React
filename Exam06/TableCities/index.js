import { Table, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Actions, Country, Image, Population } from "./styles";

const getColor = (population) => {
  if (population < 5) {
    return "green";
  }

  if (population < 10) {
    return "gold";
  }

  return "red";
};

const TableCities = (props) => {
  const columns = [
    {
      title: "Cities",
      dataIndex: "cities",
      key: "cities",
      width: "20%",
    },
    {
      title: "Country Flag",
      dataIndex: "countryflag",
      key: "countryflag",
      width: "20%",
      render: (_, item) => {
        return (
          <Country>
            <Image src={item.countryflag} />
            <div>
              <h6>{item.country}</h6>
              <div>{item.countryCode}</div>
            </div>
          </Country>
        );
      },
    },
    {
      title: "Population",
      dataIndex: "population",
      key: "population",
      width: "10%",
      render: (_, item) => {
        const color = getColor(item.population);
        return (
          <Population color={color}>
            {item.population} <UserOutlined />
          </Population>
        );
      },
    },
    {
      title: "",
      dataIndex: "actions",
      render: (text, item) => {
        return (
          <Actions>
            <Button
              onClick={() => {
                props.onGetWeather(item.name);
              }}
            >
              Weather
            </Button>
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

  return (
    <Table
      loading={props.loading}
      dataSource={props.dataSource}
      columns={columns}
    />
  );
};

export default TableCities;
