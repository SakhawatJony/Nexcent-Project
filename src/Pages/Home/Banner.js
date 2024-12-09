import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import Slider from "react-slick";
import banner from "../../asstes/img/Illustration.png"
import "./Banner.css"

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Box >
            <Container sx={{pt:"100px"}}>


                <Slider {...settings} className="custom-slider">
                    <div>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center",gap:"50px" }}>
                            <Box>
                                <Typography sx={{ fontSize: "64px", fontWeight: 600, color: "var(--black-color)" }}>Lessons and insights <br/><span style={{ color: "var(--primary-color)" }}> from 8 years</span> </Typography>
                                <Typography sx={{ color: "var(--grey-color)", my: "5px", fontSize: "14px", fontWeight: 600 }}>Where to grow your business as a photographer: site or social media?</Typography>
                                <Button sx={{ bgcolor: 'var(--primary-color)', mt: "10px", textTransform: "capitalize", color: "var(--white-color)" }}>Register</Button>
                            </Box>
                            <Box sx={{ width: "350px", height: "250px" }}>
                                <img src={banner} style={{ height: "100%", width: "100%" }} />
                            </Box>
                        </Box>
                    </div>
                    <div>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center",gap:"50px" }}>
                            <Box>
                                <Typography sx={{ fontSize: "64px", fontWeight: 600, color: "var(--black-color)" }}>Lessons and insights <br/><span style={{ color: "var(--primary-color)" }}> from 8 years</span> </Typography>
                                <Typography sx={{ color: "var(--grey-color)", my: "5px", fontSize: "14px", fontWeight: 600 }}>Where to grow your business as a photographer: site or social media?</Typography>
                                <Button sx={{ bgcolor: 'var(--primary-color)', mt: "10px", textTransform: "capitalize", color: "var(--white-color)" }}>Register</Button>
                            </Box>
                            <Box sx={{ width: "350px", height: "250px" }}>
                                <img src={banner} style={{ height: "100%", width: "100%" }} />
                            </Box>
                        </Box>
                    </div>
                    <div>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center",gap:"50px" }}>
                            <Box>
                                <Typography sx={{ fontSize: "64px", fontWeight: 600, color: "var(--black-color)" }}>Lessons and insights <br/><span style={{ color: "var(--primary-color)" }}> from 8 years</span> </Typography>
                                <Typography sx={{ color: "var(--grey-color)", my: "5px", fontSize: "14px", fontWeight: 600 }}>Where to grow your business as a photographer: site or social media?</Typography>
                                <Button sx={{ bgcolor: 'var(--primary-color)', mt: "10px", textTransform: "capitalize", color: "var(--white-color)" }}>Register</Button>
                            </Box>
                            <Box sx={{ width: "350px", height: "250px" }}>
                                <img src={banner} style={{ height: "100%", width: "100%" }} />
                            </Box>
                        </Box>
                    </div>
                  
                
                </Slider>
            </Container>
        </Box>
    );
}

export default Banner;
