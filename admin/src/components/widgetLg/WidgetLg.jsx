import React, { useEffect } from "react";
import "./widgetLg.css";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, updateOrders } from "../../redux/action";
import { format } from "timeago.js";
import { Spinner } from "react-bootstrap";
import Approved from "./approvedBtn/Approved";
import RejectedBtn from "./rejectedBtn/RejectedBtn";
const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const { orders } = useSelector((state) => state.ordersReducer);
  const hnadleApproved = (id, status) => {
    const updOrder = {
      _id: id,
      status: status,
    };
    dispatch(updateOrders(updOrder));
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders ? (
            orders?.slice(0, 5).map((order) => (
              <tr className="widgetLgTr" key={order._id}>
                <td className="widgetLgUser">
                  <img
                    src={
                      order.img ||
                      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                    }
                    alt=""
                    className="widgetLgImg"
                  />

                  <span className="widgetLgName">{order.username}</span>
                </td>
                <td className="widgetLgDate">{format(order.createdAt)}</td>
                <td className="widgetLgAmount">£{order.amount}</td>
                <td className="widgetLgStatus">
                  <Button type={order.status} />
                  <div className="appOrRej_btns">
                    <Approved
                      hnadleApproved={() =>
                        hnadleApproved(order._id, "approved")
                      }
                    />

                    <RejectedBtn
                      hnadleApproved={() =>
                        hnadleApproved(order._id, "declined")
                      }
                    />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <Spinner animation="border" variant="info" />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
