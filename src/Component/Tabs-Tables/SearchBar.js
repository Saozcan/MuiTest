import * as React from 'react';
import Button from '@mui/material/Button';
import {useState} from "react";
import {Search} from "@mui/icons-material";
import {TextField} from "@mui/material";

// todo: input value kullanılarak filtre yapılacak.

export default function CustomizedInputBase({searchValue}) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleOnClick = () => {
        searchValue(inputValue);
    }

    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <TextField
                sx={{
                    width: "300px",
                    "fieldset": {
                        borderRadius: "0",
                        outline: "none",
                        "&.Mui-focused": {
                            outline: "none",
                        }
                    },
                }}
                id="outlined-basic" size="small"
                placeholder="Firma, Pozisyon ve Adaylarda Ara"
                onChange={handleChange}
            />
            <Button
                style={{ borderRadius: "0"}}
                size="large"
                onClick={handleOnClick}
                variant="contained"><Search/> </Button>
        </div>
    )
        ;
}
