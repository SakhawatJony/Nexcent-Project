import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import icons1 from "../../asstes/img/Icon (3).png"
import icons2 from "../../asstes/img/Icon (4).png"
import icons3 from "../../asstes/img/Icon (5).png"
import icons4 from "../../asstes/img/Icon (6).png"

const Clubs = () => {
    return (
        <Box sx={{ bgcolor: "var(--second-color)", height: "250px" }}>
            <Container sx={{display:"flex",alignItems:"center",justifyContent:"space-between",py:"70px"}}>
                <Box>
                    <Typography sx={{ fontSize: "28px", color: "var(--text-color)" }}>
                        Helping a local <br /> <span style={{ color: "var(--primary-color)" }}>business reinvent itself</span>
                    </Typography>
                    <Typography sx={{ color: "#18191F", fontSize: "16px" }}>We reached here with our hard work and dedication</Typography>

                </Box>
                <Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                            <Box><img src={icons1} /></Box>
                            <Box>
                                <Typography sx={{ color: "var(--text-color)", fontSize: "28px", fontWeight: 600 }}>2,245,341</Typography>
                                <Typography sx={{ fontSize: "16px", fontWeight: 600, color: "var(--text-color-two)" }}>Members</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                            <Box><img src={icons2} /></Box>
                            <Box>
                                <Typography sx={{ color: "var(--text-color)", fontSize: "28px", fontWeight: 600 }}>46,328</Typography>
                                <Typography sx={{ fontSize: "16px", fontWeight: 600, color: "var(--text-color-two)" }}>Clubs</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "30px",mt:"20px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                            <Box><img src={icons3} /></Box>
                            <Box>
                                <Typography sx={{ color: "var(--text-color)", fontSize: "28px", fontWeight: 600 }}>828,867</Typography>
                                <Typography sx={{ fontSize: "16px", fontWeight: 600, color: "var(--text-color-two)" }}>Event Bookings</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                            <Box><img src={icons4} /></Box>
                            <Box>
                                <Typography sx={{ color: "var(--text-color)", fontSize: "28px", fontWeight: 600 }}>1,926,436</Typography>
                                <Typography sx={{ fontSize: "16px", fontWeight: 600, color: "var(--text-color-two)" }}>Payments</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Clubs;
