import * as React from "react";
import Box from "@mui/material/Box";
import "./App.css";
import Drawer from "./Components/Drawer/Drawer";
import AppBar from "./Components/AppBar/AppBar";
import { Outlet } from "react-router-dom";

function App() {
   const [open, setOpen] = React.useState(false);

   const handleDrawerOpen = () => {
      setOpen(true);
   };

   const handleDrawerClose = () => {
      setOpen(false);
   };
   return (
      <Box sx={{ display: "flex" }}>
         <AppBar open={open} handleDrawerOpen={handleDrawerOpen} />
         <Drawer open={open} handleDrawerClose={handleDrawerClose} />
         <Outlet />
      </Box>
   );
}

export default App;
