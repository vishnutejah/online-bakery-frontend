import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
} from "recharts";

export const Dashboard = () => {
  const currentDate = new Date();
  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const [orderData, setOrderData] = useState([]);
  const [orderDataByType, setOrderDataByType] = useState([]);
  const [orderDataByState, setOrderDataByState] = useState([]);
  const [orderDataByMonth, setOrderDataByMonth] = useState([]);
  const [orderDataByWeek, setOrderDataByWeek] = useState([]);
  const itemTypes = ["Cake", "Cookies", "Muffins"];
  const orderState = ["Created", "Shipped", "Delivered", "Cancelled"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [startDate, setStartDate] = useState(startOfMonth);
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    axios.get("http://localhost:8092/api/orders").then((resp) => {
      setOrderData(resp.data);
    });
  }, []);

  useEffect(() => {
    const updatedOrderDataByType = [];
    const updatedOrderDataByState = [];
    const updatedOrderDataByMonth = [];

    itemTypes.forEach((type) => {
      const filteredDataCount = orderData.filter(
        (order) => order.itemType === type
      ).length;
      updatedOrderDataByType.push({ name: type, Orders: filteredDataCount });
    });
    setOrderDataByType(updatedOrderDataByType);

    orderState.forEach((state) => {
      const filteredDataCount = orderData.filter(
        (order) => order.orderState === state
      ).length;
      updatedOrderDataByState.push({ name: state, Orders: filteredDataCount });
    });
    setOrderDataByState(updatedOrderDataByState);

    months.forEach((month) => {
      let monthOrders = orderData.filter(
        (order) => moment(order.createdTime).format("MMMM") == month
      ).length;
      updatedOrderDataByMonth.push({ month: month, orders: monthOrders });
    });
    setOrderDataByMonth(updatedOrderDataByMonth);
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
    <div className="">
      <div className="mb-4">
        <DatePicker
          className="border-2 border-gray-300 font-mono tracking-wider p-2 rounded-lg"
          selected={startDate}
          onChange={handleDateChange}
          dateFormat="MMMM yyyy"
          showMonthYearPicker
        />
      </div>
      <div className="h-screen">
        <ResponsiveContainer width="100%" height="50%">
          <LineChart
            width={500}
            height={300}
            data={orderDataByMonth}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="orders" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex bt-4">
          <ResponsiveContainer width="50%" height={300}>
            <BarChart
              data={orderDataByState}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Orders" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="50%" height={300}>
            <BarChart
              data={orderDataByType}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Orders" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
