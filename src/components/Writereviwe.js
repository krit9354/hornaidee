import React from "react";
import { Typography, Rating } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TextField from "@mui/material/TextField";
function Writereview(props) {
  const { name } = props;
  return (
    <div className="bg-white mb-[10px] rounded-lg shadow-md p-0">
      <Box sx={{ flexGrow: 1, overflow: "hidden", p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <AccountCircleIcon sx={{ fontSize: 45 }} />
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{name}</Typography>
            <Rating size="large" name="simple-controlled" />
          </Grid>
        </Grid>
        <TextField
          size="small"
          fullWidth
          id="outlined-basic"
          placeholder="review..."
          variant="outlined"
          defaultValue="เยียมมากๆๆ"
        />
      </Box>
    </div>
  );
}

export default Writereview;
