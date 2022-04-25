import Navigation from "./Navigation/Navigation"
import Social from "./Social/Social"
import Profile from "./Profile/Profile"
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import styles from "./Account.module.css"
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useForm } from "hooks/useForm"

const drawerWidth = 240;

const Account = (props) => {
  const { form, onChange } = useForm({ anchorEl: null, mobileMoreAnchorEl: null })

  const isMenuOpen = Boolean(form.anchorEl)
  const isMobileMenuOpen = Boolean(form.mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    onChange(event.currentTarget, "anchorEl")
  }

  const handleMobileMenuClose = () => {
    onChange(null, "mobileMoreAnchorEl")
  }

  const handleMenuClose = () => {
    onChange(null, "anchorEl")
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    onChange(event.currentTarget, "mobileMoreAnchorEl")
  };

  const drawer = (
    <Container sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Navigation />
      <Social />
      <Profile />
    </Container>
  )

  const container = window !== undefined ? () => window().document.body : undefined;
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={form.anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Navigation />
      <Social />
      <Profile />
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={form.mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Navigation
        isMobileMenuOpen={isMobileMenuOpen}
        handleMenuClose={handleMenuClose} />

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="medium"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>

      <MenuItem>
        <IconButton
          size="medium"
          aria-label="show 4 new mails"
          color="inherit">
          <Badge
            badgeContent={4}
            color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>

      <MenuItem>
        <IconButton
          size="medium"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge
            badgeContent={17}
            color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box className={styles.account}
        sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Navigation />
        <Social />
        <Profile />
      </Box>
      <Box sx={{
        display: { xs: 'flex', md: 'none' },
        flex: 1.4,
        flexFlow: 'row-reverse'
      }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Box>
      {renderMobileMenu}
      {renderMenu}
    </>
  )
}

export default Account