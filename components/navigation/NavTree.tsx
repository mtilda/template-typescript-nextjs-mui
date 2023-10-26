import { FunctionComponent } from 'react';
import {
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import BookTwoToneIcon from '@mui/icons-material/BookTwoTone';
import FaceTwoToneIcon from '@mui/icons-material/FaceTwoTone';
import ForumTwoToneIcon from '@mui/icons-material/ForumTwoTone';



const NavTree: FunctionComponent = () => {
  return (
    <nav>
      <List>
        <ListItem
          component={Link}
          href='/learn'
        >
          <ListItemIcon>
            <BookTwoToneIcon />
          </ListItemIcon>
          <ListItemText
            primary='Learn more'
          />
        </ListItem>

        <ListItem
          component={Link}
          href='/about'
        >
          <ListItemIcon>
            <FaceTwoToneIcon />
          </ListItemIcon>
          <ListItemText
            primary='About us'
          />
        </ListItem>

        <ListItem
          component={Link}
          href='/contace'
        >
          <ListItemIcon>
            <ForumTwoToneIcon />
          </ListItemIcon>
          <ListItemText
            primary='Contact us'
          />
        </ListItem>
      </List>
    </nav>
  );
};

export default NavTree;
