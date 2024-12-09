import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const FotterHeader = () => {
    return (
        <Box>
            <Box sx={{ height: "250px", bgcolor: "var(--second-color)", display: "flex",py:"15px", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Typography sx={{ color: "#263238", fontSize: "55px", fontWeight: 600 }}>Pellentesque suscipit <br /> fringilla libero eu.</Typography>
                <Button sx={{ bgcolor: "var(--primary-color)", color: "var(--white-color)",gap:"5px", textTransform: "capitalize", my: "8px", width: "150px", height: "45px" }}>
                    <Typography sx={{ textTransform: "capitalize" ,fontSize:"13px"}}> Get a Demo</Typography> <ArrowForwardIcon />
                </Button>
            </Box>

        </Box>
    );
}

export default FotterHeader;
