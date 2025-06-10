import { Paper } from "@mui/material";
import React from "react";

const ProcessItem = ({ style, id, label }) => (
  <Paper elevation={2} sx={style}>
    <b>{id}</b>
    <br />
    {label}
  </Paper>
);

export default ProcessItem;
