import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { FaBox } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

interface DrawerProps {
    open: boolean;
}

export default function Menu({ open }: DrawerProps) {
    const [invoicesOpen, setInvoicesOpen] = useState(false);
    const [accountStatementsOpen, setAccountStatementsOpen] = useState(false);

    const handleInvoicesClick = () => {
        setInvoicesOpen(!invoicesOpen);
    };

    const handleAccountStatementsClick = () => {
        setAccountStatementsOpen(!accountStatementsOpen);
    };

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

            {/* Invoices Section */}
            <ListItemButton
                sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.8,
                }}
                onClick={handleInvoicesClick}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                >
                    {invoicesOpen ? <IoMdSettings /> : <IoMdSettings style={{ opacity: 0.5 }} />}
                </ListItemIcon>
                <ListItemText primary={'Invoices'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            <Collapse in={invoicesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {Ivoices.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                component={NavLink}
                                to={item.route}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 4,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <IoMdSettings />
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Collapse>

            {/* Account Statements Section */}
            <ListItemButton
                sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.8,
                }}
                onClick={handleAccountStatementsClick}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                >
                    {accountStatementsOpen ? <IoMdSettings /> : <IoMdSettings style={{ opacity: 0.5 }} />}
                </ListItemIcon>
                <ListItemText primary={'Account statements'} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
            <Collapse in={accountStatementsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {AccountStatements.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                component={NavLink}
                                to={item.route}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 4,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <IoMdSettings />
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Collapse>
        </List>
    );
}