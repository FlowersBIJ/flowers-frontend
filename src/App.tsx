import * as React from "react";
import Box from "@mui/material/Box";
import "./App.css";
import {Drawer} from "./Components/Drawer/Drawer";
import AppBar from "./Components/AppBar/AppBar";
import {Outlet} from "react-router-dom";
import {observer} from "mobx-react";
import {UserRole} from "./Infra/Models/UserRole";
import "@silevis/reactgrid/styles.css";

const App = observer(() => {
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
         <Drawer open={open} handleDrawerClose={handleDrawerClose} userRole={UserRole.ADMIN}/>
         <Outlet />
      </Box>
   );
})

export default App;
