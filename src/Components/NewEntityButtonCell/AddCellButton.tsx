import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const AddCellButton = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                variant="contained"
                sx={{
                    backgroundColor: "#4e73df",
                    '&:hover': {
                        backgroundColor: "#3b5cb8",
                    },
                }}
            >
                Add New...
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Client</MenuItem>
                <MenuItem onClick={handleClose}>Order</MenuItem>
                <MenuItem onClick={handleClose}>Box</MenuItem>
                <MenuItem onClick={handleClose}>Flower</MenuItem>
            </Menu>
        </div>
    );
};
