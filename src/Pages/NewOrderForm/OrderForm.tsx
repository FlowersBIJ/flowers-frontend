import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { observer } from "mobx-react";
import { useStore } from "../../Infra/Stores/Store";
import { OrderForm } from "../../Models/OrderForm";
import { Box, FormControl, FormGroup, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const NewOrderForm = observer(() => {
    const scheme = yup.object().shape({
        // автоматически под клиента
        country: yup.string().required(""),

        // автоматически под клиента
        cityOfDelivery: yup.string().required(""),

        // (чтобы было заполнено хоть у одного цветка из заказа)
        flowerType: yup.string().required("Flower type is required"),

        // (чтобы было заполнено хоть у одного цветка из заказа)
        numberOfBoxes: yup.number().required("Number of boxes required"),

        // (чтобы было заполнено хоть у одного цветка из заказа)
        boxType: yup.string().required("Type of box is required"),

        variety: yup.string().required("Variety is required"),
        length: yup.number().required("Length is required"),
        numberOfStems: yup.number().required("Number of stems required"),
        farm: yup.string().required("Farm is required"),
        releaseDate: yup.date().default(new Date()),
        purchasePrice: yup.number().required("Purchase price required"),

        // "if {
        //     ""Purchase price""*Number of stems"">0;
        //     ""Purchase price""*Number of stems"";null
        //     }
        //     + обработка ошибки"
        total: yup.number().required("Total required"),

        labeling: yup.string().required("Labeling is required"),

        // "или Cargo agencia, или TRUCK, или оба автоматом под клиента"
        cargoAgencia: yup.string().required("Cargo agencia is required"),

        // "или Cargo agencia, или TRUCK, или оба автоматом под клиента"
        truck: yup.string().required("Truck is required"),

        // "if {
        //     ""Final price in Miami""== null;null
        //     ""Total Sales""=""Total "";
        //     }
        //     + обработка ошибки"
        difference: yup.number().required(""),

        // или final prise in Miamy, или sale prise
        salePrice: yup.number().required(""),

        // "if {
        //     ""Final price in Miami""==null;
        //     ""Sale Price""*Number of stems"";
        //     ""Final price in Miam""*Number of stems""
        //     }
        //     + обработка ошибки"
        totalSales: yup.string().required(""),

        // если cargo, то нада
        awb: yup.string().required(""),

        // (чтобы было заполнено хоть у одного цветка из заказа)
        invoice: yup.string().required(""),

        // (чтобы было заполнено хоть у одного цветка из заказа)
        invoiceOur: yup.string().required(""),

        // или final price in Miami, или sale prise
        finalPriceInMiami: yup.number().required(""),

        // (чтобы было заполнено хоть у одного цветка из заказа)
        orderType: yup.string().required(""),

        // автоматически (исходя из учётки, под которой он вносит инфу
        manager: yup.string().required(""),
        done: yup.string().required(""),
    });
    const { handleSubmit, control }
        = useForm({
            resolver: yupResolver(scheme)
        });

    // const {
    //     orderFormStore
    // } = useStore();
    // const submitHandler: SubmitHandler<OrderForm> = (data: OrderForm) => {
    //     orderFormStore.setOrderForm(data);
    // };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            {/* onSubmit={handleSubmit(submitHandler)} */}
            <FormControl component="fieldset" sx={{ m: 3 }} variant="standard">
                <FormGroup>
                    <Controller
                        name={"manager"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <TextField
                                    variant="outlined"
                                    error={error !== undefined}
                                    onChange={onChange}
                                    value={value}
                                    label={error === undefined ? "Manager" : error.message}
                                />
                            )
                        }
                    />
                    <Controller
                        name={"flowerType"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Flower type</InputLabel>
                                    <Select
                                        value={value}
                                        label="Flower type"
                                        onChange={onChange}
                                    >
                                        <MenuItem value={"Type1"}>Type1</MenuItem>
                                        <MenuItem value={"Type2"}>Type2</MenuItem>
                                        <MenuItem value={"Type3"}>Type3</MenuItem>
                                    </Select>
                                </FormControl>

                            )
                        }
                    />
                    <Controller
                        name={"numberOfBoxes"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <TextField
                                    variant="outlined"
                                    error={error !== undefined}
                                    onChange={onChange}
                                    value={value}
                                    label={error === undefined ? "Number of Boxes" : error.message}
                                />
                            )
                        }
                    />
                    <Controller
                        name={"boxType"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Box type</InputLabel>
                                    <Select
                                        value={value}
                                        label="Box type"
                                        onChange={onChange}
                                    >
                                        <MenuItem value={"Type1"}>Type1</MenuItem>
                                        <MenuItem value={"Type2"}>Type2</MenuItem>
                                        <MenuItem value={"Type3"}>Type3</MenuItem>
                                    </Select>
                                </FormControl>
                            )
                        }
                    />
                    <Controller
                        name={"variety"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Variety</InputLabel>
                                    <Select
                                        value={value}
                                        label="Variety"
                                        onChange={onChange}
                                    >
                                        <MenuItem value={"Type1"}>Type1</MenuItem>
                                        <MenuItem value={"Type2"}>Type2</MenuItem>
                                        <MenuItem value={"Type3"}>Type3</MenuItem>
                                    </Select>
                                </FormControl>
                            )
                        }
                    />
                    <Controller
                        name={"length"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <TextField
                                    variant="outlined"
                                    error={error !== undefined}
                                    onChange={onChange}
                                    value={value}
                                    label={error === undefined ? "Length" : error.message}
                                />
                            )
                        }
                    />
                    <Controller
                        name={"numberOfStems"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <TextField
                                    variant="outlined"
                                    error={error !== undefined}
                                    onChange={onChange}
                                    value={value}
                                    label={error === undefined ? "Number of stems" : error.message}
                                />
                            )
                        }
                    />
                    <Controller
                        name={"farm"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Farm</InputLabel>
                                    <Select
                                        value={value}
                                        label="Farm"
                                        onChange={onChange}
                                    >
                                        <MenuItem value={"Type1"}>Type1</MenuItem>
                                        <MenuItem value={"Type2"}>Type2</MenuItem>
                                        <MenuItem value={"Type3"}>Type3</MenuItem>
                                    </Select>
                                </FormControl>
                            )
                        }
                    />
                    <Controller
                        name={"farm"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker label="Release date" />
                                    </DemoContainer>
                                </LocalizationProvider>
                            )
                        }
                    />
                    <Controller
                        name={"purchasePrice"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <TextField
                                    variant="outlined"
                                    error={error !== undefined}
                                    onChange={onChange}
                                    value={value}
                                    label={error === undefined ? "Purchase price" : error.message}
                                />
                            )
                        }
                    />
                    <Controller
                        name={"total"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <TextField
                                    variant="outlined"
                                    error={error !== undefined}
                                    onChange={onChange}
                                    value={value}
                                    label={error === undefined ? "Total" : error.message}
                                />
                            )
                        }
                    />
                    <Controller
                        name={"labeling"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Farm</InputLabel>
                                    <Select
                                        value={value}
                                        label="labeling"
                                        onChange={onChange}
                                    >
                                        <MenuItem value={"Type1"}>Type1</MenuItem>
                                        <MenuItem value={"Type2"}>Type2</MenuItem>
                                        <MenuItem value={"Type3"}>Type3</MenuItem>
                                    </Select>
                                </FormControl>
                            )
                        }
                    />
                    <Controller
                        name={"cargoAgencia"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Cargo agencia</InputLabel>
                                    <Select
                                        value={value}
                                        label="Cargo agencia"
                                        onChange={onChange}
                                    >
                                        <MenuItem value={"Type1"}>Type1</MenuItem>
                                        <MenuItem value={"Type2"}>Type2</MenuItem>
                                        <MenuItem value={"Type3"}>Type3</MenuItem>
                                    </Select>
                                </FormControl>
                            )
                        }
                    />
                    <Controller
                        name={"truck"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Truck</InputLabel>
                                    <Select
                                        value={value}
                                        label="Truck"
                                        onChange={onChange}
                                    >
                                        <MenuItem value={"Type1"}>Type1</MenuItem>
                                        <MenuItem value={"Type2"}>Type2</MenuItem>
                                        <MenuItem value={"Type3"}>Type3</MenuItem>
                                    </Select>
                                </FormControl>
                            )
                        }
                    />
                    <Controller
                        name={"difference"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <TextField
                                    variant="outlined"
                                    error={error !== undefined}
                                    onChange={onChange}
                                    value={value}
                                    label={error === undefined ? "Difference" : error.message}
                                />
                            )
                        }
                    />
                    <Controller
                        name={"salePrice"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <TextField
                                    variant="outlined"
                                    error={error !== undefined}
                                    onChange={onChange}
                                    value={value}
                                    label={error === undefined ? "Sale price" : error.message}
                                />
                            )
                        }
                    />
                    <Controller
                        name={"totalSales"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <TextField
                                    variant="outlined"
                                    error={error !== undefined}
                                    onChange={onChange}
                                    value={value}
                                    label={error === undefined ? "Total sales" : error.message}
                                />
                            )
                        }
                    />
                    <Controller
                        name={"awb"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <TextField
                                    variant="outlined"
                                    error={error !== undefined}
                                    onChange={onChange}
                                    value={value}
                                    label={error === undefined ? "AWB" : error.message}
                                />
                            )
                        }
                    />
                    <Controller
                        name={"invoice"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <TextField
                                    variant="outlined"
                                    error={error !== undefined}
                                    onChange={onChange}
                                    value={value}
                                    label={error === undefined ? "Invoice" : error.message}
                                />
                            )
                        }
                    />
                    <Controller
                        name={"invoiceOur"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <TextField
                                    variant="outlined"
                                    error={error !== undefined}
                                    onChange={onChange}
                                    value={value}
                                    label={error === undefined ? "Invoice (our)" : error.message}
                                />
                            )
                        }
                    />
                    <Controller
                        name={"finalPriceInMiami"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <TextField
                                    variant="outlined"
                                    error={error !== undefined}
                                    onChange={onChange}
                                    value={value}
                                    label={error === undefined ? "Final price in Miami" : error.message}
                                />
                            )
                        }
                    />
                    <Controller
                        name={"orderType"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Order type</InputLabel>
                                    <Select
                                        value={value}
                                        label="Order type"
                                        onChange={onChange}
                                    >
                                        <MenuItem value={"Type1"}>Regular</MenuItem>
                                        <MenuItem value={"Type2"}>One-time</MenuItem>
                                    </Select>
                                </FormControl>
                            )
                        }
                    />
                    <Controller
                        name={"country"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                    <Select
                                        value={value}
                                        label="Country"
                                        onChange={onChange}
                                    >
                                        <MenuItem value={"Type1"}>Type1</MenuItem>
                                        <MenuItem value={"Type2"}>Type2</MenuItem>
                                        <MenuItem value={"Type3"}>Type3</MenuItem>
                                    </Select>
                                </FormControl>
                            )
                        }
                    />
                    <Controller
                        name={"cityOfDelivery"}
                        control={control}
                        render={
                            ({ field: { onChange, value }, fieldState: { error }, formState, }) => (
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">City of delivery</InputLabel>
                                    <Select
                                        value={value}
                                        label="City of delivery"
                                        onChange={onChange}
                                    >
                                        <MenuItem value={"Type1"}>Type1</MenuItem>
                                        <MenuItem value={"Type2"}>Type2</MenuItem>
                                        <MenuItem value={"Type3"}>Type3</MenuItem>
                                    </Select>
                                </FormControl>
                            )
                        }
                    />
                </FormGroup>
                <Button className="btnNextStep" variant={"contained"} >Sumbit</Button>
            </FormControl>
        </Box>
    );
});
// onClick={handleSubmit(submitHandler)}