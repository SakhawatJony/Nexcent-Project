import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import bannerimg from "../../asstes/img/Frame 35.png"

const Feature = () => {
    return (
        <Box sx={{ py: "20px" }}>
            <Container>
                <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Grid item md={6}>
                        <Box>
                            <img src={bannerimg} />
                        </Box>
                    </Grid>
                    <Grid item md={6}>
                        <Box>
                            <Typography sx={{ fontSize: "28px", color: "var(--text-color)" }}>The unseen of spending three <br /> years at Pixelgrade</Typography>
                            <Typography sx={{ fontSize: "14px", color: "var(--text-color-two)", py: "10px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</Typography>
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

export default Feature;
