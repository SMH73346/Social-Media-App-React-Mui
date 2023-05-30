import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch, } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import PageIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import MarketplaceIcon from '@mui/icons-material/Storefront';
import FriendsIcon from '@mui/icons-material/Person';
import SettingIcon from '@mui/icons-material/Settings';
import ProfileIcon from '@mui/icons-material/AccountBox';
import React from 'react'
import { ModeNight } from '@mui/icons-material';

const Sidebar = ({mode, setMode}) => {
  return (
    <Box sx={{ p: 2, display: { xs: "none", sm: "block" } }} flex={1} >
      <Box position={'fixed'}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' herf='#home'>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' herf='#page'>
              <ListItemIcon>
                <PageIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' herf='#group'>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' herf='#marketplace'>
              <ListItemIcon>
                <MarketplaceIcon />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' herf='#Friend'>
              <ListItemIcon>
                <FriendsIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' herf='#setting'>
              <ListItemIcon>
                <SettingIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' herf='#profile'>
              <ListItemIcon>
                <ProfileIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' herf='#profile'>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />

              {/* <Switch onChange={e=>setMode(Mode === 'light' ? 'dark' : 'light')}/> */}
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar
