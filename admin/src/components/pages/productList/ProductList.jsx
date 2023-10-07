import React, { useEffect, useState } from "react";
import "./productListStyle.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts, getProducts } from "../../../redux/action";
const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteProducts(id));
    window.location.reload();
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.imgs[0]} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },

    {
      field: "price",
      headerName: "Price ",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row._id}`}>
              <button className="productListEdit">Edit</button>
            </Link>

            <button
              style={{ border: "none", background: "none" }}
              onClick={() => handleDelete(params.row._id)}
            >
              <DeleteOutlineIcon className="productListDelete" />
            </button>
          </>
        );
      },
    },
  ];
  return (
    <div className="productList">
      <DataGrid
        rows={products}
        disableRowSelectionOnClick
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        getRowId={(row) => row._id}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
