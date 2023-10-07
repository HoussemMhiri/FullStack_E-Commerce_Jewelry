import React, { useEffect } from "react";
import "./widgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/action";
import { Link } from "react-router-dom";
const WidgetSm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const { users } = useSelector((state) => state.userReducer);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="WidgetSmList">
        {users?.slice(0, 5).map((el) => (
          <li className="widgetSmListItem" key={el._id}>
            <img
              src={
                el.img ||
                "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{el.username}</span>
              <span className="widgetSmUserTitle">{el.email}</span>
            </div>
            <Link to={`/user/${el._id}`} className="linkStyle">
              <button className="widgetSmButton">
                <VisibilityIcon className="widgetSmIcon" />
                Display
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
