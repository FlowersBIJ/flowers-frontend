import * as React from "react";
import Box from "@mui/material/Box";
import "./App.css";
import Drawer from "./Components/Drawer/Drawer";
import AppBar from "./Components/AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { observer } from "mobx-react";

interface AppProps {
   userRole: string;
}

const App: React.FC<AppProps> = observer(({ userRole }) => {
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
         {userRole === 'admin' && <AdminPanel />}
         {userRole === 'manager' && <ManagerPanel />}
         <Outlet />
      </Box>
   );
})

export default App;
