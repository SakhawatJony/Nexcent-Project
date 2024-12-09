import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import card1 from "../../asstes/img/image 18.png"
import card2 from "../../asstes/img/image 19.png"
import card3 from "../../asstes/img/image 20.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Marketing = () => {
    return (
        <Box sx={{ my: "50px" }}>
            <Container>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                    <Box sx={{ textAlign: "center" }}>


                        <Typography sx={{ fontSize: "28px", color: "var(--text-color)" }}>Caring is the new marketing</Typography>
                        <Typography sx={{ fontSize: "14px", color: "var(--text-color-two)", textAlign: "center" }}>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</Typography>
                    </Box>
                </Box>
                <Box sx={{ py: "10px" }}>
                    <Grid container>
                        <Grid item md={4} sx={{ position: "relative" }}>
                            <Box>
                                <img src={card1} />
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Box sx={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px", height: "100px", width: "280px", background: "#F5F7FA", py: "20px", px: "10px", position: "absolute", top: "200px", borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center" }}>
                                    <Typography sx={{ fontSize: "18px", color: "var(--text-color)", fontWeight: 600 }}>Creating Streamlined <br />Safeguarding Processes with OneRen</Typography>
                                    <Typography
                                        sx={{
                                            color: "var(--primary-color)",
                                            fontSize: "15px",
                                            whiteSpace: "nowrap",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "5px",
                                            marginTop: "10px"
                                        }}
                                    >
                                        <span>Readmore</span> <ArrowForwardIcon />
                                    </Typography>
                                </Box>
                            </Box>

                        </Grid>
                        <Grid item md={4} sx={{ position: "relative" }}>
                            <Box>
                                <img src={card2} />
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Box sx={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px", height: "100px", width: "280px", background: "#F5F7FA", py: "20px", px: "10px", position: "absolute", top: "200px", borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center" }}>
                                    <Typography sx={{ fontSize: "18px", color: "var(--text-color)", fontWeight: 600 }}>What are your safeguarding <br />responsibilities and how can you manage them? </Typography>
                                    <Typography
                                        sx={{
                                            color: "var(--primary-color)",
                                            fontSize: "15px",
                                            whiteSpace: "nowrap",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "5px",
                                            marginTop: "10px"
                                        }}
                                    >
                                        <span>Readmore</span> <ArrowForwardIcon />
                                    </Typography>
                                </Box>
                            </Box>

                        </Grid>
                        <Grid item md={4} sx={{ position: "relative" }}>
                            <Box>
                                <img src={card3} />
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Box sx={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px", height: "100px", width: "280px", background: "#F5F7FA", py: "20px", px: "10px", position: "absolute", top: "200px", borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", textAlign: "center" }}>
                                    <Typography sx={{ fontSize: "18px", color: "var(--text-color)", fontWeight: 600 }}>Revamping the Membership <br />Model with Triathlon Australia</Typography>
                                    <Typography
                                        sx={{
                                            color: "var(--primary-color)",
                                            fontSize: "15px",
                                            whiteSpace: "nowrap",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "5px",
                                            marginTop: "10px"
                                        }}
                                    >
                                        <span>Readmore</span> <ArrowForwardIcon />
                                    </Typography>
                                </Box>
                            </Box>

                        </Grid>
                    </Grid>
                </Box>
            </Container>

        </Box>
    );
}

export default Marketing;
