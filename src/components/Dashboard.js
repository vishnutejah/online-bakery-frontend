import axios from "axios";
import React, { useEffect, useState } from "react";
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

  return (
    <div className="bg-black pt-4">
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
  );
};
