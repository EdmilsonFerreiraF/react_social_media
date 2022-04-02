import Navigation from "./Navigation/Navigation"
import Social from "./Social/Social"
import Profile from "./Profile/Profile"
import Drawer from '@mui/material/Drawer';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./Account.module.css"
import { styled, useTheme } from '@mui/material/styles';
import { useState } from "react";

const drawerWidth = 240;

const Account = (props) => {
    const theme = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const handleDrawer = () => {
        setIsOpen(prevState => !prevState);
    };

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Container sx={{ display: { xs: 'none', sm: 'block' }}}>
            <Navigation />
            <Social />
            <Profile />
        </Container>
    )
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
        <Container sx={{ display: { xs: 'none', sm: 'block' }}}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawer}
                edge="end"
                sx={{
                    mr: 2,
                    // ...(isOpen && { display: 'none' }) 
                }}
            >
                <MenuIcon />
            </IconButton>

            <div className={styles.account}>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </div>
            </Container>
        </>
    )
}

export default Account