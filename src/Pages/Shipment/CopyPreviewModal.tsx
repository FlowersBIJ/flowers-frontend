// @flow 
import * as React from 'react';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Dialog,
    IconButton,
    Modal,
    TextareaAutosize,
    TextField,
    Typography
} from "@mui/material";
import {SelectedRow} from "../../Models/types";
import {IoCopy} from "react-icons/io5";
import {useEffect, useState} from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '0px',
    boxShadow: 24 ,
    p: 2,
    borderRadius: "20px",
};

type Props = {
    open: boolean;
    close: () => void;
    selectedValues: SelectedRow[];
    textCopy:string;
};
export function CopyPreviewModal({open, close, selectedValues,textCopy}: Props) {
    const [toCopy, setToCopy] = React.useState<string>("");
    const [copied, setCopied] = useState<boolean>(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(toCopy).then(() => setCopied(true));
    }
   

    return (
        <Modal open={open} onClose={close} sx={{ outline: 0 }}>
            <Card variant={"outlined"} sx={style}>
                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="h6" component="h2" style={{ paddingBottom: '10px', fontWeight: '700', fontFamily: "initial" }}>
                        Required text
                    </Typography>

                    
                    <TextareaAutosize style={{ borderRadius: '10px', padding: '10px', fontFamily: "initial", fontSize: "19px" }} minRows={5} cols={30} value={textCopy} onChange={(e) => setToCopy(e.target.value)} />

                    <IconButton onClick={() => copyToClipboard()}>
                        <Typography variant="h6" component="h2" style={{ paddingBottom: '10px', fontWeight: '700', fontFamily: "initial" }}>
                            Required text
                        </Typography>
                        <IoCopy />
                    </IconButton>
                </CardContent>
            </Card>
        </Modal>
    );
};