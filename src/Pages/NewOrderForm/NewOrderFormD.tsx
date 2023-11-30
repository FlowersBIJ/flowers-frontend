// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { observer } from "mobx-react";

// export const NewOrderForm = observer(() => {
//     const [flowerType, setFlowerType] = React.useState('');
//     const [boxType, setBoxType] = React.useState('');
//     const [variety, setVariety] = React.useState('');
//     const [farm, setFarm] = React.useState('');
//     const [labeling, setLabeling] = React.useState('');
//     const [cargoAgencia, setCargoAgencia] = React.useState('');
//     const [truck, setTruck] = React.useState('');
//     const [orderType, setOrderType] = React.useState('');
//     const [country, setCountry] = React.useState('');
//     const [cityOfDelivery, setCityOfDelivery] = React.useState('');

//     const handleChange = (event: SelectChangeEvent) => {
//         setFlowerType(event.target.value as string);
//     };

//     return (
//         <Box
//             component="form"
//             sx={{
//                 '& > :not(style)': { m: 1, width: '25ch' },
//             }}
//             noValidate
//             autoComplete="off"
//         >
//             {/* Автоматическое поле по авторизации манагера, string */}
//             <TextField id="outlined-basic" label="Manager" variant="outlined" />
//             {/* Из бэка, string */}
//             <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">Flower type</InputLabel>
//                 <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={flowerType}
//                     label="Flower type"
//                     onChange={handleChange}
//                 >
//                     <MenuItem value={"Type1"}>Type1</MenuItem>
//                     <MenuItem value={"Type2"}>Type2</MenuItem>
//                     <MenuItem value={"Type3"}>Type3</MenuItem>
//                 </Select>
//             </FormControl>
//             {/* Кол-во коробок, может относиться к нескольким строкам однвременно */}
//             <TextField id="outlined-basic" label="Number of boxes" variant="outlined" />
//             {/* Тип коробки, string */}
//             <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">Box type</InputLabel>
//                 <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={boxType}
//                     label="Box type"
//                     onChange={handleChange}
//                 >
//                     <MenuItem value={"Type1"}>Type1</MenuItem>
//                     <MenuItem value={"Type2"}>Type2</MenuItem>
//                     <MenuItem value={"Type3"}>Type3</MenuItem>
//                 </Select>
//             </FormControl>
//             {/* Сорт цветка, string, обяз */}
//             <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">Variety</InputLabel>
//                 <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={variety}
//                     label="Variety"
//                     onChange={handleChange}
//                 >
//                     <MenuItem value={"Type1"}>Type1</MenuItem>
//                     <MenuItem value={"Type2"}>Type2</MenuItem>
//                     <MenuItem value={"Type3"}>Type3</MenuItem>
//                 </Select>
//             </FormControl>
//             {/* Длинна стеблей, int, обяз */}
//             <TextField id="outlined-basic" label="Length" variant="outlined" />
//             {/* Кол-во стеблей, int, обяз */}
//             <TextField id="outlined-basic" label="Number of stems" variant="outlined" />
//             {/* Компания поставщик, string, обяз */}
//             <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">Farm</InputLabel>
//                 <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={farm}
//                     label="Farm"
//                     onChange={handleChange}
//                 >
//                     <MenuItem value={"Type1"}>Type1</MenuItem>
//                     <MenuItem value={"Type2"}>Type2</MenuItem>
//                     <MenuItem value={"Type3"}>Type3</MenuItem>
//                 </Select>
//             </FormControl>
//             {/* Дата отгрузки клиенту, date, обяз */}
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <DemoContainer components={['DatePicker']}>
//                     <DatePicker label="Release date" />
//                 </DemoContainer>
//             </LocalizationProvider>
//             {/* Закупочная цена за цветок, который указан в строке, int, обяз */}
//             <TextField id="outlined-basic" label="Purchase price" variant="outlined" />
//             {/* Полная закупочная стоимость у поставщика, int, см в доке */}
//             <TextField id="outlined-basic" label="Total" variant="outlined" />
//             {/* Компания покупателя, string, обяз */}
//             <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">Labeling</InputLabel>
//                 <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={labeling}
//                     label="Labeling"
//                     onChange={handleChange}
//                 >
//                     <MenuItem value={"Type1"}>Type1</MenuItem>
//                     <MenuItem value={"Type2"}>Type2</MenuItem>
//                     <MenuItem value={"Type3"}>Type3</MenuItem>
//                 </Select>
//             </FormControl>
//             {/* Транспортная компания (работают в в Эквадоре, Колумбии - ПЕРЕЛЁТ), string, см в доке */}
//             <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">Cargo agencia</InputLabel>
//                 <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={cargoAgencia}
//                     label="Cargo agencia"
//                     onChange={handleChange}
//                 >
//                     <MenuItem value={"Type1"}>Type1</MenuItem>
//                     <MenuItem value={"Type2"}>Type2</MenuItem>
//                     <MenuItem value={"Type3"}>Type3</MenuItem>
//                 </Select>
//             </FormControl>
//             {/* Транспортная компания, Голандия, Россия, Казахстан), string, см в доке */}
//             <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">Truck</InputLabel>
//                 <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={truck}
//                     label="Truck"
//                     onChange={handleChange}
//                 >
//                     <MenuItem value={"Type1"}>Type1</MenuItem>
//                     <MenuItem value={"Type2"}>Type2</MenuItem>
//                     <MenuItem value={"Type3"}>Type3</MenuItem>
//                 </Select>
//             </FormControl>
//             {/* Прибыль от продажи 9если заказ не летит в Майами, int, см в доке */}
//             <TextField id="outlined-basic" label="Difference" variant="outlined" />
//             {/* Цена продажи за цветок, который указан в строке, int, см в доке */}
//             <TextField id="outlined-basic" label="Sale price" variant="outlined" />
//             {/* Сумма заказа для покупателя, int, см в доке */}
//             <TextField id="outlined-basic" label="Total sales" variant="outlined" />
//             {/* Номер заказа для транспортной компании Cargo, string, если cargo, то нада */}
//             <TextField id="outlined-basic" label="AWB" variant="outlined" />
//             {/* Номер заказа для покупателя, string */}
//             <TextField id="outlined-basic" label="Invoice" variant="outlined" />
//             {/* Номер заказа для поставщика, string */}
//             <TextField id="outlined-basic" label="Invoice (our)" variant="outlined" />
//             {/* Цена одного цветка, если заказ летит в Майами, int */}
//             <TextField id="outlined-basic" label="Final price in Miami" variant="outlined" />
//             {/* Тип заказа (регулярный, разовый), string */}
//             <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">Order type</InputLabel>
//                 <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={orderType}
//                     label="Order type"
//                     onChange={handleChange}
//                 >
//                     <MenuItem value={"Type1"}>Regular</MenuItem>
//                     <MenuItem value={"Type2"}>One-time</MenuItem>
//                 </Select>
//             </FormControl>
//             {/* Страна заказчика, string, автоматом под клиента */}
//             <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">Country</InputLabel>
//                 <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={country}
//                     label="Country"
//                     onChange={handleChange}
//                 >
//                     <MenuItem value={"Type1"}>Type1</MenuItem>
//                     <MenuItem value={"Type2"}>Type2</MenuItem>
//                 </Select>
//             </FormControl>
//             {/* Город заказчика, string, автоматом под клиента */}
//             <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">City of delivery</InputLabel>
//                 <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={cityOfDelivery}
//                     label="City of delivery"
//                     onChange={handleChange}
//                 >
//                     <MenuItem value={"Type1"}>Type1</MenuItem>
//                     <MenuItem value={"Type2"}>Type2</MenuItem>
//                 </Select>
//             </FormControl>
//         </Box>
//     )
// })