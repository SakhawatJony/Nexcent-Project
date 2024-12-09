import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import logo from "../../asstes/img/pana.png"

const Panna = () => {
    return (
        <Box sx={{ py: "20px" }}>
            <Container>
                <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Grid item md={6}>
                        <Box>
                            <img src={logo} />
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box>
                            <Typography sx={{ fontSize: "28px", color: "var(--text-color)" }}>How to design your site footer like <br/> we did</Typography>
                            <Typography sx={{ fontSize: "14px", color: "var(--text-color-two)", py: "10px" }}>One event calendar shared across National, Regional and Club events to simplify your event experience. Allowing you to create waiting lists, share data capture, issue credential for course completion, apply smart purchasing rules and much more.</Typography>
                            <Button sx={{ bgcolor: "var(--primary-color)", color: "var(--white-color)", textTransform: "capitalize", my: "8px", width: "150px", height: "45px" }}>
                                Learn More
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Panna;
