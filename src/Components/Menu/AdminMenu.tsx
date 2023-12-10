import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FaBox } from 'react-icons/fa';
import { FaUsers } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { IoDesktop } from "react-icons/io5";

interface DrawerProps {
    open: boolean;
}

export default function AdminMenu({ open }: DrawerProps) {
    const [invoicesOpen, setInvoicesOpen] = useState(false);
    const [accountStatementsOpen, setAccountStatementsOpen] = useState(false);

    useEffect(() => {
        setInvoicesOpen(false);
        setAccountStatementsOpen(false);
    }, [open]);

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
            {['Shipment'].map((text) => (
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
                            <FaBox />
                        </ListItemIcon>
                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
            ))}
            <ListItem key={"Admin Panel"} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                    component={NavLink}
                    to={'/admin'}
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
                        <IoDesktop />
                    </ListItemIcon>
                    <ListItemText primary={"Admin Panel"} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
            </ListItem>
            <ListItem key={"Managers"} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                    component={NavLink}
                    to={'/managers'}
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
                        <FaUsers />
                    </ListItemIcon>
                    <ListItemText primary={"Managers"} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
            </ListItem>
        </List>
    );
}