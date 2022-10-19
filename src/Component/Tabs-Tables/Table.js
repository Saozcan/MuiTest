import React from "react"
import CustomizedInputBase from "./SearchBar";
import {Box, Switch} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";
import {Assignment, BusinessCenter, PersonOutlined} from "@mui/icons-material";
import TableData from "./TableData";

const CustomButton = styled(Button)(({theme}) => ({
    color: "grey",
    backgroundColor: "white",
    borderColor: "grey",
    textTransform: "none",
    marginLeft: "10px",
    padding: "5px",
    textAlign: "center",
    '&:hover': {
        backgroundColor: "#1976d2",
        color: "white",
    },
}));

//todo search value ile filtre yapılacak.

export default function TableFirst() {
    const [switchCheck, setSwitchCheck] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");

    const handleChange = (event) => {
        setSwitchCheck(event.target.checked);
    }

    console.log(searchValue);

    return (
        <div style={{
            width: "100%",
            maxWidth: "1200px",
            padding: "10px",
            backgroundColor: "white",
        }}
        >
            <div style={{
                width: "100%",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <div>
                    <CustomizedInputBase searchValue={setSearchValue}/>
                </div>
                <div style={{display: "flex", alignItems: "center"}}>
                    <Switch
                        checked={switchCheck}
                        onChange={handleChange}
                    />
                    <Typography sx={[{color: "grey",}, switchCheck && {color: "blue"},]}>Sadece Açık
                        Pozisyonlar</Typography>
                </div>
                <div className="buttons" style={{paddingRight: "5px"}}>
                    <CustomButton variant="outlined"><BusinessCenter sx={{marginRight: "5px"}}/> Firma
                        Ekle</CustomButton>
                    <CustomButton variant="outlined"><Assignment sx={{marginRight: "5px"}}/> Talep Ekle</CustomButton>
                    <CustomButton variant="outlined"><PersonOutlined sx={{marginRight: "5px"}}/> Aday
                        Ekle</CustomButton>
                </div>
            </div>
            <div>
                <TableData></TableData>
            </div>
        </div>
    )
}
