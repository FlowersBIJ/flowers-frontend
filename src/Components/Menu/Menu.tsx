import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AiFillDashboard } from "react-icons/ai";
import { FaBox } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from 'react-router-dom';

interface DrawerProps {
    open: boolean;
}

export default function Menu({ open }: DrawerProps) {
    const theme = useTheme();

    const Ivoices = [
        { text: 'Clients', route: '/invoices-clients' },
        { text: 'Farms', route: '/invoices-farms' },
    ];

    const AccountStatements = [
        { text: 'Clients', route: '/account-statement-clients' },
        { text: 'Farms', route: '/account-statement-farms' },
    ];

    return (
        <List>
            {["Dashboard",].map((text) => (
                <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        component={NavLink}
                        to={'/'}
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.8,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <AiFillDashboard />
                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            ))}
            <ListItemText primary={"Menu"} sx={{
                opacity: open ? 1 : 0,
                px: 2.5,
            }} />
            {["Shipment",].map((text) => (
                <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        component={NavLink}
                        to={'/shipment'}
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.8,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <FaBox />
                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            ))}
            <ListItemText primary={"Invoices"} sx={{
                opacity: open ? 1 : 0,
                px: 2.5,
            }} />
            {Ivoices.map((item, index) => (
                <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        component={NavLink}
                        to={item.route}
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.8,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            {index % 2 === 0 ? <IoMdSettings /> : <IoMdSettings />}
                        </ListItemIcon>
                        <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            ))}
            <ListItemText primary={"Account statements"} sx={{
                opacity: open ? 1 : 0,
                px: 2.8,
            }} />
            {AccountStatements.map((item, index) => (
                <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        component={NavLink}
                        to={item.route}
                        sx={{
                            minHeight: 48,
                            justifyContent: open ? 'initial' : 'center',
                            px: 2.6,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            {index % 2 === 0 ? <IoMdSettings /> : <IoMdSettings />}
                        </ListItemIcon>
                        <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>

    )
}
