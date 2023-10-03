import React from "react";
import Card from "@mui/material/Card";
import Bt1 from "../components/bt1";
import Navbar from "../components/nav";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
function helppage() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-old_yellow h-screen w-screen flex justify-center">
        <Card className="bg-white flex flex-1 flex-col max-w-7xl mt-3">
          <p className="text-2xl">HELP</p>
          <div className="flex  content-center">
            <div>
              <input
                className="mr-2 	
              border-black border-2 rounded-md"
                type="text"
                value=""
                placeholder="dorm name...."
              />
              <Bt1>search</Bt1>
            </div>
          </div>
          <div>
            <FormControlLabel control={<Checkbox />} label="ALL" />
            <FormControlLabel control={<Checkbox />} label="ON HOLD" />
            <FormControlLabel control={<Checkbox />} label="INPROGRESS" />
            <FormControlLabel control={<Checkbox />} label="COMPLETED" />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default helppage;
