import { useEffect, useMemo, useState } from "react";
import TableCities from "./TableCities";
import ModalFormCities from "./ModalFormCities";
import { SearchContainer, ButtonCreate, SearchBox } from "./styles";
import axios from "axios";
import { Modal } from "antd";
import ModalWeather from "./ModalWeather";

const DEFAULT_CITIES = {
  cities: "",
  country: "",
  countryCode: "",
  countryFlag: "",
  population: "",
};

const Exam06 = () => {
  const [cities, setCities] = useState({ DEFAULT_CITIES });
  const [dataSource, setDataSource] = useState([]);
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [tableLoading, setTableLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [itemLoading, setItemLoading] = useState(false);
  const [cityName, setCityName] = useState({});

  // useEffect(async () => {
  //   const res = await axios.get(
  //     "https://6401ddd70a2a1afebef3de24.mockapi.io/api/v1/books"
  //   );
  //   setDataSource(res.data);
  // }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const searchDataSource = useMemo(() => {
    if (keyword) {
      return dataSource.filter((item) => {
        return item.name.includes(keyword) || item.name.includes(keyword);
      });
    }

    return dataSource;
  }, [keyword, dataSource]);

  const fetchData = () => {
    setTableLoading(true);

    axios
      .get(`https://6401ddd70a2a1afebef3de24.mockapi.io/api/v1/cities`)
      .then((res) => {
        setDataSource(res.data);
        setTableLoading(false);
      });
  };

  const onCreate = () => {
    setCities(DEFAULT_CITIES);
    setOpen(true);
  };

  const onEdit = (id) => {
    setItemLoading(true);

    axios
      .get(`https://6401ddd70a2a1afebef3de24.mockapi.io/api/v1/cities/${id}`)
      .then((res) => {
        setCities(res.data);
        setItemLoading(false);
        setOpen(true);
      });
  };

  const onDelete = (id) => {
    Modal.confirm({
      title: "Delete this data?",
      content: "Data will be lost forever.",
      onOk() {
        setItemLoading(true);
        axios
          .delete(
            `https://6401ddd70a2a1afebef3de24.mockapi.io/api/v1/cities/${id}`
          )
          .then((res) => {
            setItemLoading(false);
            fetchData();
          });
      },
    });
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCities({
      ...cities,
      [name]: value,
    });
  };

  const onSubmit = (id, data) => {
    setSubmitLoading(true);

    if (id) {
      axios
        .put(
          `https://6401ddd70a2a1afebef3de24.mockapi.io/api/v1/cities/${id}`,
          data
        )
        .then((res) => {
          setSubmitLoading(false);
          setCities(DEFAULT_CITIES);
          setOpen(false);
          fetchData();
        });
    } else {
      axios
        .post(`https://6401ddd70a2a1afebef3de24.mockapi.io/api/v1/cities`, data)
        .then((res) => {
          setSubmitLoading(false);
          setCities(DEFAULT_CITIES);
          setOpen(false);
          fetchData();
        });
    }
  };

  const onGetWeather = (name) => {
    setCityName(name);
  };

  const onSearch = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <ModalFormCities
        loading={submitLoading}
        open={open}
        setOpen={setOpen}
        onSubmit={onSubmit}
        cities={cities}
        onChange={onChange}
      />

      <ModalWeather name={cityName} />

      <SearchContainer>
        <SearchBox value={keyword} onChange={onSearch} />
        <ButtonCreate onClick={onCreate}>New Country</ButtonCreate>
      </SearchContainer>

      <TableCities
        loading={tableLoading}
        itemLoading={itemLoading}
        dataSource={searchDataSource}
        onEdit={onEdit}
        onDelete={onDelete}
        onGetWeather={onGetWeather}
      />
    </div>
  );
};

export default Exam06;
