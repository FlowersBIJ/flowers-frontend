import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Typography from "@mui/material/Typography";
import { AiFillDashboard } from "react-icons/ai";
import { FaBox } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './Drawer.css'

interface DrawerProps {
    open: boolean;
    handleDrawerClose: () => void;
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
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const DrawerWrapper = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
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

export default function Drawer({ open, handleDrawerClose }: DrawerProps) {
    const theme = useTheme();

    const menuItems = [
        { text: 'Shipment', route: '/shipment' },
        { text: 'Invoices', route: '/invoices' },
        { text: 'Account statement', route: '/account-statement' },
        { text: 'Parameterization', route: '/parameterization' },
    ];

    return (
        <DrawerWrapper variant="permanent" open={open}>
            <DrawerHeader>
                <img className='logo-img' src={require("../../Assets/logo_awarmatu.png")} alt="logo" />
                <Typography>AWARMATU <br /> SYSTEM 23</Typography>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <Menu open={open} />
            <Divider />
            <Divider />
        </DrawerWrapper>
    )
}
