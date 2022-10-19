import React from "react";
import {Sync} from "@mui/icons-material";

const Baslik = ({name}) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            padding: "7px 15px",
            border: "1px solid lightGrey",
        }}>{name}
            <button style={{
                backgroundColor: "white",
                border: "none",
            }}
            ><Sync sx={{fontSize: "17px", display: "flex"}}/></button>
        </div>
    )
}

const data = [
    "Firma", "Sektör", "Pozisyon", "Lokasyon", "Talep Sayısı", "Açılış Tarihi", "Sorumlu", "Durum",
]


export default function TableData() {

    return (
        <div style={{width: "100%", marginTop: "10px"}}>
            <div style={{display: "flex"}}>
                {data.map((value, index) => <Baslik name={value} key={index} />)}
            </div>
        </div>
    )
}