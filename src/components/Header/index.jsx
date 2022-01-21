import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import classes from './style.module.css';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../Assets/logo.png';
import channelsList from '../JSON/channels-list';
import { VerseContext } from '../../context/Verse';
const pages = [
    'Home',
    'About',
    'Contact',
    <Button variant="contained" style={{ backgroundColor: '#008080', height: 57, fontSize: 16, fontWeight: 'bold', width: 212, borderRadius: 8 }}>
        Add Your Listing
    </Button>,
];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [channelPlaylist, setChannel] = React.useState([]);
    const { setSearchDetail, storeData, setInputVerse } = React.useContext(VerseContext);

    React.useEffect(() => {
        let channels = channelsList.channels.map(item => {
            return {
                name: item.name,
                id: item.id,
            };
        });
        setChannel([...channels]);
    }, []);

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const [name, setChannelName] = React.useState('');
    const [verseName, setVerse] = React.useState('');

    const handleChange = event => {
        if (event.target.name === 'verse') {
            setInputVerse(event.target.value);
            setVerse(event.target.value);
        } else {
            setChannelName(event.target.value);
        }
    };

    const handleSubmit = () => {
        if (name || verseName) {
            setSearchDetail(name, verseName);
        } else {
            alert(`Please enter the details`);
        }
    };

    return (
        <div className={classes.topBar}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters style={{ padding: '0px 3rem' }}>
                        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, mr: 2 }}>
                            <div style={{ marginTop: '20px' }}>
                                <img src={logo} width="200px" />
                            </div>
                        </Typography>

                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {pages.map(page => (
                                <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 1, color: 'white', display: 'block', ml: 3 }}>
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit">
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}>
                                {pages.map(page => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container>
                <Grid container spacing={2} justifyContent={'center'}>
                    <Grid item sm={7}>
                        <p className={classes.title}>Find your best video based verse</p>
                        <p className={classes.description}>Search 243,000 verses mentioned in 10,000 messages across 100+ channels</p>
                    </Grid>
                </Grid>
                <Grid container justifyContent={'center'}>
                    <Grid item sm={10}>
                        <div className={classes.search}>
                            <Grid container spacing={2}>
                                <Grid item xs={4} md={5}>
                                    <p className={classes.verse}>Verse</p>
                                    <div>
                                        <TextField id="standard-basic" variant="standard" name="verse" style={{ width: '80%' }} onChange={handleChange} />
                                    </div>
                                </Grid>
                                <Grid item xs={5} md={6}>
                                    <p className={classes.chanel}>Chanel</p>
                                    <div>
                                        <FormControl fullWidth>
                                            <Select labelId="demo-simple-select-label" id="demo-simple-select" variant="standard" value={name} onChange={handleChange}>
                                                {channelPlaylist.length &&
                                                    channelPlaylist.map((item, index) => {
                                                        return (
                                                            <MenuItem value={item.id} key={index}>
                                                                {item.name}
                                                            </MenuItem>
                                                        );
                                                    })}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </Grid>

                                <Grid item xs={3} md={1}>
                                    <div
                                        style={{
                                            backgroundColor: '#008080',
                                            color: 'white',
                                            textAlign: 'center',
                                            paddingTop: '10px',
                                            paddingBottom: '10px',
                                            cursor: 'pointer',
                                            borderRadius: '8px',
                                        }}
                                        onClick={handleSubmit}>
                                        <SearchIcon fontSize="large" />
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
export default Header;
