import React, { useEffect, useMemo, useState } from "react";
import "./HomeStyle.css";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import Chart from "../../chart/Chart";

import WidgetSm from "../../widgetSm/WidgetSm";
import WidgetLg from "../../widgetLg/WidgetLg";

import axios from "axios";
const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      const token = JSON.parse(
        JSON.parse(localStorage.getItem("persist:persist-key")).adminReducer
      ).admin.token;
      const config = {
        headers: {
          Authorization: token,
        },
      };
      try {
        const { data } = await axios.get("/api/users/stats", config);

        setUserStats([]);
        data.map((el) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[el._id - 1], "Active User": el.total },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
    console.log(userStats);
  }, [MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
