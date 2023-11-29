import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export function NewOrderForm() {
    const [flowerType, setflowerType] = React.useState('');
    const [BoxType, setBoxType] = React.useState('');
    const [Variety, setVariety] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setflowerType(event.target.value as string);
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            {/* Автоматическое поле по авторизации, string */}
            <TextField id="outlined-basic" label="Manager" variant="outlined" />
            {/* Из бэка, string */}
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Flower type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={flowerType}
                    label="Flower type"
                    onChange={handleChange}
                >
                    <MenuItem value={"Type1"}>Type1</MenuItem>
                    <MenuItem value={"Type2"}>Type2</MenuItem>
                    <MenuItem value={"Type3"}>Type3</MenuItem>
                </Select>
            </FormControl>
            {/* Кол-во коробок, может относиться к нескольким строкам однвременно */}
            <TextField id="outlined-basic" label="Number of boxes" variant="outlined" />
            {/* Тип коробки, string */}
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Box type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={BoxType}
                    label="Box type"
                    onChange={handleChange}
                >
                    <MenuItem value={"Type1"}>Type1</MenuItem>
                    <MenuItem value={"Type2"}>Type2</MenuItem>
                    <MenuItem value={"Type3"}>Type3</MenuItem>
                </Select>
            </FormControl>
            {/* Сорт цветка, string */}
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Variety</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Variety}
                    label="Variety"
                    onChange={handleChange}
                >
                    <MenuItem value={"Type1"}>Type1</MenuItem>
                    <MenuItem value={"Type2"}>Type2</MenuItem>
                    <MenuItem value={"Type3"}>Type3</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}