import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Typography from "@mui/material/Typography";
import ManagerMenu from '../Menu/ManagerMenu';
import AdminMenu from '../Menu/AdminMenu';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { IoMdAdd } from "react-icons/io";
import {Link, NavLink, useNavigate} from 'react-router-dom';
import { UserRole } from '../../Infra/Models/UserRole';
import './Drawer.css'
import {IoLogOut} from "react-icons/io5";
import {observer} from "mobx-react";

interface DrawerProps {
    open: boolean;
    handleDrawerClose: () => void;
    userRole: UserRole;
}

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const DrawerWrapper = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export const Drawer = observer(({ open, handleDrawerClose, userRole }: DrawerProps) => {
    const theme = useTheme();

    return (
        <DrawerWrapper variant="permanent" open={open}>
            <div className="upper-drawer">
                <DrawerHeader>
                    <Link to={"/"}><img  className='logo-img' src={require("../../Assets/logo_awarmatu.png")} alt="logo" /></Link>
                    <Typography >AWARMATU <br /> SYSTEM 2023</Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                {userRole === 'admin' && <AdminMenu open={open} />}
                {userRole === 'manager' && <ManagerMenu open={open} />}
                <Divider />
            </div>
            <div style={{ marginTop: 'auto', marginBottom: '30px' }} className="under-drawer">
                <Stack
                    sx={{
                        minHeight: 48,
                        alignSelf: "flex-end",
                        justifyContent: open ? 'center' : 'center',
                        px: 2.8,
                    }}
                    spacing={2} direction="row">
                    <Button
                        component={NavLink}
                        to={"/new-order"}
                        variant="contained"
                        sx={{
                            backgroundColor: "#4e73df",
                            '&:hover': {
                                backgroundColor: "#3b5cb8",
                            },
                        }}
                    >
                        {open ? "Add new order" : <IoMdAdd />}
                    </Button>
                </Stack>
            </div>
        </DrawerWrapper>
    )
});
