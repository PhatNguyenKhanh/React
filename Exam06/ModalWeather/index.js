import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "antd";

const ModalWeather = ({ name }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    if (name !== "") {
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=c03dcddaf9ca4989b73140143232403&q=${name}&aqi=no`
        )
        .then((res) => {
          setData(res.data);
          setOpen(true);
        });
    }
  }, [name]);

  const onCancel = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} footer={null} onCancel={onCancel}>
      {data.location && data.current && (
        <div>
          <div>Cities: {data.location.name}</div>
          <div>
            lon: {data.location.lon}, lat: {data.location.lat}
          </div>
          <div>Temperature: {data.current.temp_c}</div>
          <div>Weather: {data.current.condition.text}</div>
        </div>
      )}
    </Modal>
  );
};

export default ModalWeather;
