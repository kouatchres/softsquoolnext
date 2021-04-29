import React, { useEffect, useState } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import { Paper } from "@material-ui/core";
import allUsers from "../../region/people.json";
import tableIcons from "../icons/tableIcons";

const MaterialTableDemo = () => {
  console.dir(allUsers);
  const [state, setState] = useState({
    columns: [
      { field: "first_name", title: "First Name" },
      { field: "last_name", title: "Last Name" },
      { field: "email", title: "Email" },
      { field: "gender", title: "Gender" },
      { field: "ip_address", title: "Address", type: "numeric" },
    ],
    data: [],
  });

  useEffect(() => {
    console.dir("getting the user data");
    setState((prev) => ({ ...prev, data: allUsers }));
  }, []);
  console.dir(state.data);
  return (
    <Paper style={{ marginTop: "2rem" }}>
      <MaterialTable
        components={{
          Toolbar: (props) => (
            <div
              style={{
                backgroundColor: "#01579b",
                borderTopRightRadius: "0.5rem",
                borderTopLeftRadius: "0.5rem",
                color: "#fff",
              }}
            >
              <MTableToolbar
                style={{
                  // textColor: "#000",
                  textColor: "#fff",
                }}
                {...props}
              />
            </div>
          ),
        }}
        icons={tableIcons}
        title="Users List"
        columns={state.columns}
        data={state.data}
        options={{
          paging: true,
          pageSize: 100, // make initial page size
          emptyRowsWhenPaging: false, //to make page size fix in case of less data rows
          pageSizeOptions: [60, 120, 200, 400], // rows selection options
          headerStyle: {
            color: "#fff",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            backgroundColor: "#01579b",
            maxHeight: "0.5rem !important",
          },
          rowStyle: {
            color: "#000",
          },
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 400);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 400);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 400);
            }),
        }}
      />
    </Paper>
  );
};
export default MaterialTableDemo;
