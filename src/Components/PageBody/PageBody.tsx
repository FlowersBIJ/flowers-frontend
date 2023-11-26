import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { ReactNode } from "react";
import { useText } from "../TextContext/TextContext";

const DrawerHeader = styled("div")(({ theme }) => ({
   display: "flex",
   alignItems: "center",
   justifyContent: "flex-end",
   padding: theme.spacing(0, 1),
   ...theme.mixins.toolbar,
}));

type PageBodyProps = {
   text: string;
   children: ReactNode;
};

export const PageBody: React.FC<PageBodyProps> = ({ text, children }) => {
   const { setText } = useText();

   React.useEffect(() => {
      setText(text);
   }, [text, setText]);
   return (
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         <DrawerHeader />
         <h1>{text}</h1>
         <main>{children}</main>
      </Box>
   );
};
