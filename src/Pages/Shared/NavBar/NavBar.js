import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import logo from "../../../asstes/img/logo.png";

const NavBar = () => {
    return (
        <Box sx={{ bgcolor: "#F5F7FA", height: "70px", display: "flex", alignItems: "center",  }}>
            <Container>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {/* Logo Section */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img src={logo} alt="Logo" style={{ height: "40px" }} />
                    </Box>

                    {/* Navigation Links */}
                    <Box sx={{ display: "flex", gap: "30px" }}>
                        {["Home", "Service", "Feature", "Product", "Testimonial", "FAQ"].map((link) => (
                            <Typography
                                key={link}
                                sx={{
                                    fontSize: "15px",
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    color: "var(--black-color)",
                                    "&:hover": { color: "var(--primary-color)" },
                                }}
                            >
                                {link}
                            </Typography>
                        ))}
                    </Box>

                    {/* Login and Signup Section */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
                        <Typography
                            sx={{
                                fontSize: "13px",
                                color: "var(--primary-color)",
                                cursor: "pointer",
                                "&:hover": { textDecoration: "underline" },
                            }}
                        >
                            Login
                        </Typography>
                        <Button
                            sx={{
                                bgcolor: "var(--primary-color)",
                                color: "var(--white-color)",
                                textTransform: "capitalize",
                                fontSize: "12px",
                                padding: "5px 15px",
                                "&:hover": { bgcolor: "var(--primary-hover-color)" },
                            }}
                        >
                            Sign up
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default NavBar;
