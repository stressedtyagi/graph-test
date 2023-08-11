import React, { useState } from "react";
import { Menu, Select } from "antd";

const items = [
  {
    label: "Model Performance",
    key: "performance",
  },
  {
    label: "Data Drift",
    key: "drift",
  },
  {
    label: "Prediction Metrics",
    key: "metrics",
  },
];

const Home = () => {
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <h2 style={{ marginLeft: "1rem" }}>(111236) Drona </h2>
        <Select
          defaultValue="Model_1"
          style={{
            width: 120,
          }}
          size="large"
          onChange={handleChange}
          options={[
            {
              value: "Model_1",
              label: "Model_1",
            },
            {
              value: "Model_2",
              label: "Model_2",
            },
          ]}
        />
      </div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{ fontSize: "1rem" }}
      />
    </div>
  );
};

export default Home;
