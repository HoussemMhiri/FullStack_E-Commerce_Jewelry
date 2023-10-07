import React, { useEffect, useState } from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userRows } from "../../../chartData";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrders, deleteUsers } from "../../../redux/action";
const UserList = () => {
  const { users } = useSelector((state) => state.userReducer);

  const { orders } = useSelector((state) => state.ordersReducer);

  const dispatch = useDispatch();

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={
                params.row.avatar ||
                "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
              }
              alt=""
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row._id}`}>
              <button className="userListEdit">More</button>
            </Link>

            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => {
                dispatch(deleteUsers(params.row._id));
              }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={users}
        disableRowSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
