import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import logoimg from "../../asstes/img/Clients Logos.png"


const OurClients = () => {
    return (
        <Container>
            <Box sx={{ mt: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontSize: "25px", color: "var(--text-color)" }}>Our Clients</Typography>
                    <Typography sx={{ fontSize: "16px", color: "var(--text-color-two)", py: "5px" }}>We have been working with some Fortune 500+ clients</Typography>
                </Box>
                <Box sx={{ mt: "10px" }}>
                    <img style={{ height: "100px", width: "100%" }} src={logoimg} />
                </Box>




            </Box>
        </Container>


    );
}

export default OurClients;
