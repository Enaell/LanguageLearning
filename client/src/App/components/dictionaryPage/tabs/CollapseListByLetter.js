import React, {useState} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import Collapse from '@material-ui/core/Collapse';
import { Typography } from '@material-ui/core';

const CollapseListByLetter = ({letter, wordListByFirstLetter}) => {
  
  const [switchValue, setSwitchValue] = useState(false);
  const handleSwitchChange = () => (setSwitchValue(!switchValue));

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  console.log('wordListByFirstLetter');
  console.log(letter);
  console.log(wordListByFirstLetter);
  return (
    <div>
    <Typography onClick={handleSwitchChange} variant="h5">{letter}</Typography>
    <Collapse in={switchValue}>
      <List>
        {Object.keys(wordListByFirstLetter).map(value => (
          <ListItem key={wordListByFirstLetter[value]} role={undefined} dense button onClick={handleToggle(value)}>
            <Checkbox checked={checked.indexOf(value) !== -1} tabIndex={-1} disableRipple />
            <ListItemText primary={`Line item ${value + 1}`} />
            <ListItemSecondaryAction>
              <IconButton aria-label="Comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Collapse>
    </div>
  )
}

export default CollapseListByLetter;