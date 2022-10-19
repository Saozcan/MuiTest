import React from "react"
import CustomizedInputBase from "./SearchBar";
import {Switch} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {styled} from "@mui/material/styles";

const CustomButton = styled(Button)(({ theme }) => ({
    color: "grey",
    backgroundColor: "white",
    borderColor: "grey",
    textTransform: "none",
    marginLeft: "10px",
    '&:hover': {
        backgroundColor: "#1976d2",
        color: "white",
    },
}));


export default function TableFirst() {
    const [switchCheck, setSwitchCheck] = React.useState(false);

    const handleChange = (event) => {
        setSwitchCheck(event.target.checked);
    }
    return (
        <div style={{
            width: "100%",
            maxWidth: "1200px",
            padding: "10px",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
        }}>
            <div>
                <CustomizedInputBase/>
            </div>
            <div style={{display: "flex", alignItems: "center"}}>
                <Switch
                    checked={switchCheck}
                    onChange={handleChange}
                />
                <Typography style={{color: "grey"}}>Sadece Açık Pozisyonlar</Typography>
            </div>
            <div className="buttons">
                <CustomButton variant="outlined">Firma Ekle</CustomButton>
                <CustomButton variant="outlined">Talep Ekle</CustomButton>
                <CustomButton variant="outlined">Aday Ekle</CustomButton>
            </div>
        </div>
    )
}
