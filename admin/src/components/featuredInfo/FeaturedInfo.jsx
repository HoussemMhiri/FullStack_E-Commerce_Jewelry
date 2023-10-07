import React, { useEffect } from "react";
import "./featuredInfo.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useDispatch, useSelector } from "react-redux";
import { getIncome } from "../../redux/action";
import { Spinner } from "react-bootstrap";
const FeaturedInfo = () => {
  const { income, perc, sales, loading } = useSelector(
    (state) => state.incomeReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncome());
  }, []);

  const greaterMonth =
    income.length > 0 &&
    income?.reduce((pre, curr) => {
      return pre?._id > curr?._id ? pre : curr;
    });

  return (
    <div className="featured">
      {loading ? (
        <Spinner animation="border" variant="info" />
      ) : (
        <>
          <div className="featuredItem">
            <span className="featuredTitle">Income</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">
                {income.length > 0 ? (
                  income?.length !== 0 ? (
                    greaterMonth?.total
                  ) : null
                ) : (
                  <Spinner animation="border" variant="info" />
                )}
              </span>
              <span className="featuredMoneyRate">
                %{Math.floor(perc)}
                {perc < 0 ? (
                  <ArrowDownwardIcon className="featuredIcon negative" />
                ) : (
                  <ArrowUpwardIcon className="featuredIcon" />
                )}
              </span>
            </div>
            <span className="featuredSub">Compared to last Month</span>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">{sales[0]?.salesNum}</span>
              <span className="featuredMoneyRate">
                %{Math.floor(sales[0]?.salesPerc)}
                {sales[0]?.salesPerc < 0 ? (
                  <ArrowDownwardIcon className="featuredIcon negative" />
                ) : (
                  <ArrowUpwardIcon className="featuredIcon" />
                )}
              </span>
            </div>
            <span className="featuredSub">Compared to last Month</span>
          </div>
          <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">$2.225</span>
              <span className="featuredMoneyRate">
                -2.4 <ArrowDownwardIcon className="featuredIcon negative" />
              </span>
            </div>
            <span className="featuredSub">Compared to last Month</span>
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedInfo;
