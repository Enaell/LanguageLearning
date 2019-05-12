import React, {useState, useEffect} from 'react';
import Collapse from '@material-ui/core/Collapse';
import { Typography } from '@material-ui/core';
import { Column } from 'simple-flexbox'
import { WordList } from './WordList'

const CollapseList = ({horizontal, style, listTitle, wordList, updateSelectedWords, selectedWords}) => {

  // Add check to words present in redux selected list

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


  const handleToggle = value => () => {
    updateSelectedWords(wordList[value])
  };

  useEffect(() => {
    console.log('SelectedWords use Effect');
    setWordList();
  }, [selectedWords])

  // useEffect(() => {
  //   selectedWords.forEach(word => {
  //     const currentIndex = wordList.indexOf(word);
  //     const newChecked = [...checked];

  //     if (currentIndex !== -1){
  //       newChecked.push(currentIndex + '');
  //       setChecked(newChecked);
  //     }
  //   })
  // }, []);

  useEffect(() => {
    console.log('Checked useEffect');
    console.log(checked);
  }, [checked])

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