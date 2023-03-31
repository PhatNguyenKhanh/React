import { useEffect, useMemo, useState } from "react";
import TableBooks from "./TableBooks";
import ModalFormBook from "./ModalFormBook";
import { SearchContainer, ButtonCreate, SearchBox } from "./styles";
import axios from "axios";
import { Modal } from "antd";

const DEFAULT_BOOK = {
  title: "",
  author: "",
  description: "",
  type: "",
  page: 0,
};

const Exam05 = () => {
  const [formData, setFormData] = useState({ DEFAULT_BOOK });
  const [dataSource, setDataSource] = useState([]);
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [tableLoading, setTableLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [itemLoading, setItemLoading] = useState(false);

  // useEffect(async () => {
  //   const res = await axios.get(
  //     "https://6401ddd70a2a1afebef3de24.mockapi.io/api/v1/books"
  //   );
  //   setDataSource(res.data);
  // }, []);

  useEffect(() => {
    fetchData()
  }, []);

  const searchDataSource = useMemo(() => {
    if (keyword) {
      return dataSource.filter((item) => {
        return item.title.includes(keyword) || item.title.includes(keyword);
      });
    }

    return dataSource;
  }, [keyword, dataSource]);

  const fetchData = () => {
    setTableLoading(true);

    axios
      .get(`https://6401ddd70a2a1afebef3de24.mockapi.io/api/v1/books`)
      .then((res) => {
        setDataSource(res.data);
        setTableLoading(false);
      });
  }

  const onCreate = () => {
    setFormData(DEFAULT_BOOK);
    setOpen(true);
  };

  const onEdit = (id) => {
    setItemLoading(true);

    axios.get(`https://6401ddd70a2a1afebef3de24.mockapi.io/api/v1/books/${id}`)
      .then((res) => {
        setFormData(res.data);
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
        axios.delete(`https://6401ddd70a2a1afebef3de24.mockapi.io/api/v1/books/${id}`)
          .then((res) => {
            setItemLoading(false);
            fetchData();
          });
      }
    })
  };

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (id, data) => {
    setSubmitLoading(true);

    if (id) {
      axios.put(`https://6401ddd70a2a1afebef3de24.mockapi.io/api/v1/books/${id}`, data).then((res) => {
        setSubmitLoading(false);
        setFormData(DEFAULT_BOOK);
        setOpen(false);
        fetchData();
      })
    } else {
      axios.post(`https://6401ddd70a2a1afebef3de24.mockapi.io/api/v1/books`, data).then((res) => {
        setSubmitLoading(false);
        setFormData(DEFAULT_BOOK);
        setOpen(false);
        fetchData();
      })
    }
  };

  const onSearch = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div>
      <ModalFormBook
        loading={submitLoading}
        open={open}
        setOpen={setOpen}
        onSubmit={onSubmit}
        formData={formData}
        onChange={onChange}
      />

      <SearchContainer>
        <SearchBox value={keyword} onChange={onSearch} />
        <ButtonCreate onClick={onCreate}>New Book</ButtonCreate>
      </SearchContainer>

      <TableBooks
        loading={tableLoading}
        itemLoading={itemLoading}
        dataSource={searchDataSource}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
};

export default Exam05;
