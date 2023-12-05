import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import * as React from "react";
import {observer} from "mobx-react";
import {alpha} from "@mui/material";
import {ShipmentModel} from "../../Models/Shipment";
import { SelectedRow } from "../../Models/types";
import {IoCopy} from "react-icons/io5";
import { Fragment } from "react";

interface EnhancedTableToolbarProps {
    selected: SelectedRow[];
    openCopyModal: () => void;
}

export const ShipmentTableToolbar = observer(({selected, openCopyModal}: EnhancedTableToolbarProps) => {
    return (
        <Fragment>
        <Toolbar
            sx={{
                pl: {sm: 2},
                pr: {xs: 1, sm: 1},
                ...(selected.length > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >

            <Typography
                color="inherit"
                variant="subtitle1"
                component="div"
            >
                {selected.length} selected
            </Typography>
            {
                selected.length > 0 && <IconButton color={"primary"} size={"medium"} sx={{ ml: 5 }} onClick={() => openCopyModal()}>
                    Copy <IoCopy/>
                </IconButton>
            }
        </Toolbar>
        <Toolbar
            sx={{
                pl: {sm: 2},
                pr: {xs: 1, sm: 1},
            }}
        >


        </Toolbar>
        </Fragment>
    );
});