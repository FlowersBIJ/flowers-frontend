// @flow 
import * as React from 'react';
import {
    Card,
    CardContent,
    IconButton,
    Modal,
    TextareaAutosize,
    Typography
} from "@mui/material";
import {SelectedRow} from "../../Infra/Models/types";
import {IoCopy} from "react-icons/io5";
import {useEffect, useState} from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '0px',
    boxShadow: 24,
    p: 4,
};

type Props = {
    open: boolean;
    close: () => void;
    selectedValues: SelectedRow[];
};
export function CopyPreviewModal({open, close, selectedValues}: Props) {
    const [toCopy, setToCopy] = useState<string>("test");
    const [copied, setCopied] = useState<boolean>(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(toCopy).then(() => setCopied(true));
    }

    useEffect(() => {
        setToCopy("Test")
    }, []);

    return (
        <Modal open={open} onClose={close} sx={{outline: 0}}>
            <Card variant={"outlined"} sx={style}>
                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" component="h2">
                    Copy to buffer
                </Typography>

                <TextareaAutosize minRows={3} cols={25} value={toCopy} onChange={(e) => setToCopy(e.target.value)}/>

                <IconButton onClick={() => copyToClipboard()}><IoCopy/></IconButton>
                </CardContent>
            </Card>
        </Modal>
    );
};