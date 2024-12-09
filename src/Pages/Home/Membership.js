import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import icons1 from "../../asstes/img/Icon.png"
import icons2 from "../../asstes/img/Icon (1).png"
import icons3 from "../../asstes/img/Icon (2).png"

const Membership = () => {
    return (
        <div>
            <Container sx={{ py: "30px" }}>
                <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontSize: "28px", color: "var(--text-color)" }}>Manage your entire community <br /> in a single system</Typography>
                    <Typography sx={{ fontSize: "16px", color: "var(--text-color-two)", py: "5px" }}>Who is Nextcent suitable for?
                    </Typography>
                </Box>
                <Grid container sx={{mt:"20px"}} spacing={5}>

                    <Grid item xs={12} sm={12} md={4}>
                        <Box sx={{ height: "250px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", width: "280px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <img src={icons1} />
                            <Box>
                                <Typography sx={{ fontSize: "25px", color: "var(--text-color)", textAlign: "center" }}>Membership Organisations</Typography>
                                <Typography sx={{ fontSize: "14px", color: "var(--text-color-two)", textAlign: "center", py: "5px" }}>Our membership management software provides full automation of membership renewals and payments</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Box sx={{ height: "250px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", width: "280px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <img src={icons2} />
                            <Box>
                                <Typography sx={{ fontSize: "25px", color: "var(--text-color)", textAlign: "center" }}>National <br/> Associations</Typography>
                                <Typography sx={{ fontSize: "14px", color: "var(--text-color-two)", textAlign: "center", py: "5px" }}>Our membership management software provides full automation of membership renewals and payments</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Box sx={{ height: "250px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", width: "280px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <img src={icons3} />
                            <Box>
                                <Typography sx={{ fontSize: "25px", color: "var(--text-color)", textAlign: "center" }}>Clubs And <br/> Groups</Typography>
                                <Typography sx={{ fontSize: "14px", color: "var(--text-color-two)", textAlign: "center", py: "5px" }}>Our membership management software provides full automation of membership renewals and payments</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

        </div>
    );
}

export default Membership;
