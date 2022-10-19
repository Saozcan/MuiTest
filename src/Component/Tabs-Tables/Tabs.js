import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EnhancedTable from "./Table";
import {styled} from '@mui/material/styles';
import {HowToReg, PersonAddAlt1, Person, ReceiptLong} from "@mui/icons-material";
import TableFirst from "./Table";

const AntTab = styled((Tab))(({theme}) => ({
    width: "25%",
    borderRadius: "5px",
    "&.Mui-selected": {
        ".spanValue": {color: "blue",},
        ".iconName": {color: "grey"},
        backgroundColor: "#ffffff",
        color: "black",
    }
}));

const TabButtonComp = ({name, valueNumber, icon}) => {

    return (
        <div style={{
            minWidth: "150px",
            textTransform: "none",
            margin: "10px 10px 0 10px",
            padding: "0 10px",
        }}>
            <div style={{display: "flex", marginBottom: "15px", justifyContent: "center", alignItems: "center"}}>
                <div className="iconName" style={{marginRight: "5px"}}>{icon}</div>
                <span style={{fontWeight: "bold", justifyContent: "center"}}>{name}</span>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{width: "50px", marginRight: "20px"}}>
                    <hr/>
                </div>
                <span className="spanValue">{valueNumber}</span>
                <div style={{width: "50px", marginLeft: "20px"}}>
                    <hr/>
                </div>
            </div>
        </div>
    )
}

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '80%', pt: "20px", overflow: "hidden"}}>
            <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>

                <Tabs style={{display: "flex", width: "100%", justifyContent: "space-between"}} value={value}
                      onChange={handleChange} aria-label="basic tabs example">
                    <AntTab label={
                        <TabButtonComp name={"Tüm Firma Talepleri"} valueNumber={200}
                                       icon={<ReceiptLong/>}/>
                    } {...a11yProps(0)} />
                    <AntTab label={
                        <TabButtonComp name={"Açık Pozisyonlar"} valueNumber={50}
                                       icon={<PersonAddAlt1/>}/>
                    } {...a11yProps(1)} />
                    <AntTab label={
                        <TabButtonComp name={"Yönlendirilen Adaylar"} valueNumber={500}
                                       icon={<HowToReg/>}/>
                    } {...a11yProps(2)} />
                    <AntTab label={
                        <TabButtonComp name={"Kapanan Pozisyonlar"} valueNumber={330}
                                       icon={<Person/>}/>
                    } {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel style={{padding: "0"}} value={value} index={0}>
                <TableFirst/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <EnhancedTable/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <EnhancedTable/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <EnhancedTable/>
            </TabPanel>
        </Box>
    );
}
