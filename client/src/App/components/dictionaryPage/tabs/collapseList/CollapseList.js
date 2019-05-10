import React, {useState} from 'react';
import Collapse from '@material-ui/core/Collapse';
import { Typography } from '@material-ui/core';
import { Column } from 'simple-flexbox'
import { WordList } from './WordList'

const CollapseList = ({horizontal, style, listTitle, wordList, updateSelectedWords}) => {
  
  // Add check to words present in redux selected list

  const [switchValue, setSwitchValue] = useState(false);
  const handleSwitchChange = () => (setSwitchValue(!switchValue));

  const [checked, setChecked] = React.useState([]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    updateSelectedWords(wordList[value])
    setChecked(newChecked);
  };

  const getWordChecked = () => {
    checked.map(value => {
      return wordList[value]} );
  }
  
  React.useEffect(() => getWordChecked());
  
  return (
    <Column horizontal={horizontal} style={style}>
      <Typography style={{cursor: 'pointer'}} onClick={handleSwitchChange} variant="h5">{listTitle}</Typography>
      <Collapse in={switchValue}>
        <WordList wordList={wordList} handleToggle={handleToggle} checked={checked}/>
      </Collapse>
    </Column>
  )
}

export default CollapseList;