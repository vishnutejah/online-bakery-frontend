import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const Dashboard = () => {
  const [orderData, setOrderData] = useState([]);
  const [orderDataByType, setOrderDataByType] = useState([]);
  const [orderDataByState, setOrderDataByState] = useState([]);
  const itemTypes = ["Cake", "Cookies", "Muffins"];
  const orderState = ["Created", "Shipped", "Delivered", "Cancelled"];
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    axios.get("http://localhost:8092/api/orders").then((resp) => {
      setOrderData(resp.data);
    });
  }, []);

  useEffect(() => {
    const updatedOrderDataByType = [];
    const updatedOrderDataByState = [];
    itemTypes.forEach((type) => {
      const filteredDataCount = orderData.filter(
        (order) => order.itemType === type
      ).length;
      updatedOrderDataByType.push({ name: type, count: filteredDataCount });
    });
    setOrderDataByType(updatedOrderDataByType);

    orderState.forEach((state) => {
      const filteredDataCount = orderData.filter(
        (order) => order.orderState === state
      ).length;
      updatedOrderDataByState.push({ name: state, count: filteredDataCount });
    });
    setOrderDataByState(updatedOrderDataByState);
  }, [orderData]);

  const handleDateChange = (selectedDate) => {
    setStartDate(selectedDate);
    // Calculate the end date as the last day of the month
    const calculatedEndDate = moment(selectedDate)
      .endOf("month")
      .format("YYYY-MM-DD");
    setEndDate(calculatedEndDate);
  };

  return (
    <div className="bg-black pt-4 h-screen">
      <div className="bg-green-400 p-2 mb-3">
        <DatePicker
          className="bg-blue-400"
          selected={startDate}
          onChange={handleDateChange}
          dateFormat="MMM yyyy"
          showMonthYearPicker
        />
      </div>
      <div>
        <ResponsiveContainer width="40%" height={300}>
          <BarChart
            data={orderDataByState}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
