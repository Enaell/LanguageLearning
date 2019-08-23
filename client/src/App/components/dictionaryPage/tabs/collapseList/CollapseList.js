import React, {useState, useEffect} from 'react';
import Collapse from '@material-ui/core/Collapse';
import { Typography } from '@material-ui/core';
import { Column } from 'simple-flexbox'
import { WordList } from './WordList'

const CollapseList = (
  {
    horizontal,
    style, 
    listTitle, 
    wordList, 
    updateSelectedWords, 
    selectedWords, 
    setWordPreview
  }) => {

  const [checked, setChecked] = React.useState([]);

  const setWordList = () => {
    const newChecked = [...checked];
    wordList.forEach((word, index) => {
      const value = `${index}`;
      const checkedIndex = newChecked.indexOf(value);

      if (selectedWords.indexOf(word) !== -1){
        if (checkedIndex === -1) {
          newChecked.push(value);
        }
      }
      else {
        if (checkedIndex !== -1) {
          newChecked.splice(checkedIndex, 1);
        }
      }
    })
    setChecked(newChecked);
  };

  const [switchValue, setSwitchValue] = useState(false);

  const handleSwitchChange = () => {
    setSwitchValue(!switchValue)
  };


  const handleToggle = word => {
    updateSelectedWords(word)
  };

  useEffect(() => {
    setWordList();
  }, [selectedWords])

  return (
    <Column horizontal={horizontal} style={style}>
      <Typography style={{cursor: 'pointer'}} onClick={handleSwitchChange} variant="h5">{listTitle}</Typography>
      <Collapse in={switchValue}>
        <WordList wordList={wordList} handleToggle={handleToggle} handleWordPreview={setWordPreview} checked={checked}/>
      </Collapse>
    </Column>
  )
}

export default CollapseList;