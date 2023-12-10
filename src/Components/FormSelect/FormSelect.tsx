// @flow
import * as React from 'react';
import Select, {SelectChangeEvent} from "@mui/material/Select";
import {Control, Controller} from "react-hook-form";
import {OptionType} from "@silevis/reactgrid";
import MenuItem from "@mui/material/MenuItem";

interface Props {
    control: Control<any>,
    name: string,
    defaultValue: string,
    values: OptionType[],
    onChange?: (value: string) => void;
};
export function FormSelect(props: Props){
    return (
        <Controller render={({ field: {value, onChange}})=> (
            <Select value={value} onChange={(e: SelectChangeEvent) => props.onChange !== undefined ? props.onChange(e.target.value) : onChange(e)}>
                {
                    props.values.map(
                        (option, index) => (
                            <MenuItem key={`${props.name}${option.value}${index}`} value={option.value}>{option.label}</MenuItem>
                        )
                    )
                }
            </Select>
        )} name={props.name} control={props.control} defaultValue={props.defaultValue}/>

    );
};