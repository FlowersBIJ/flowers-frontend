import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface ButtonAction {
    label: string;
    action: () => void;
};

type Props = {
    buttons: ButtonAction[];
};

export const AddCellButton = (props: Props) => {
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
                {
                    props.buttons.map(
                        (action, index) => <MenuItem key={index} onClick={() => {
                            action.action();
                            handleClose();
                        }}>{action.label}</MenuItem>
                    )
                }
            </Menu>
        </div>
    );
};
