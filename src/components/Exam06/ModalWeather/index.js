import axios from "axios";
import { useEffect, useState } from "react";
import { Modal } from "antd";

const ModalWeather = ({ open, setOpen, name }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (open) {
      axios
        .get(
          `http://api.weatherapi.com/v1/current.json?key=c03dcddaf9ca4989b73140143232403&q=${name}&aqi=no`
        )
        .then((res) => {
          setData(res.data);
          setOpen(true);
        });
    }
  }, [open]);

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
          <div>Humidity: {data.current.humidity}</div>
          <div>Feelslike: {data.current.feelslike_c}</div>
        </div>
      )}
    </Modal>
  );
};

export default ModalWeather;
