import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import cutomarimg from "../../asstes/img/image 9.png";
import cutomar from "../../asstes/img/Frame 10.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Customers = () => {
    return (
        <Box sx={{ py: "10px", bgcolor: "var(--second-color)" }}>
            <Container>
                <Grid container sx={{ display: "flex", alignItems: "center" }}>
                    {/* Image Section */}
                    <Grid item md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ width: "300px", height: "300px" }}>
                            <img style={{ width: "100%", height: "100%" }} src={cutomarimg} alt="Customer" />
                        </Box>
                    </Grid>

                    {/* Text Section */}
                    <Grid item md={6}>
                        <Box>
                            <Typography sx={{ fontSize: "14px", color: "var(--grey-color)" }}>
                                “We have enjoyed working with the JustGo system to setup and go live with our new membership platform. The initial effort to organise it along the lines of how our sport currently works was quick and relatively easy. The new system has already massively improved the time and effort it takes to setup and process member and club applications. It will help us to communicate with people in our sport in a much more effective way, and collect data to help us improve how our sport is governed.”
                            </Typography>
                            <Typography sx={{ fontSize: "20px", color: "var(--primary-color)", fontWeight: 600, py: "5px" }}>
                                Tim Smith
                            </Typography>
                            <Typography sx={{ fontSize: "14px", color: "var(--grey-color)", py: "5px" }}>
                                British Dragon Boat Racing Association
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", mt: "8px" }}>
                                <Box>
                                    <img src={cutomar} style={{ width: "80%" }} alt="Customer Logos" />
                                </Box>
                                <Typography
                                    sx={{
                                        color: "var(--primary-color)",
                                        fontSize: "20px",
                                        whiteSpace: "nowrap",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                    }}
                                >
                                    <span>Meet all customers</span> <ArrowForwardIcon />
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Customers;
