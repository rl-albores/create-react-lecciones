import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import {
  HomeIcon,
  SettingsIcon,
  AccessAlarmIcon,
  ThreeDRotation,
} from '@mui/icons-material'

const getIcon = (icon) => {
  switch (icon) {
    case 'HOME':
      return <HomeIcon />
    case 'TASK':
      return <SettingsIcon />
    case 'SETTINGS':
      return <SettingsIcon />
    default:
      return <HomeIcon />
  }
}

const MenuListItems = ({ list }) => {
  const navigate = useNavigate()
  const navigateTo = (path) => {
    navigate(path)
  }

  return (
    <List>
      {list.map(({ text, path, icon }, index) => (
        <ListItem key={index} ButtonBase onClick={() => navigateTo(path)}>
          <ListItemIcon>{getIcon(icon)}</ListItemIcon>
          <ListItemText primary={text}></ListItemText>
        </ListItem>
      ))}
    </List>
  )
}

export default MenuListItems
