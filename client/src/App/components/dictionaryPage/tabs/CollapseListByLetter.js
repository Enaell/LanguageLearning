import React, {useState} from 'react';
import Collapse from '@material-ui/core/Collapse';
import { Typography } from '@material-ui/core';
import { Column } from 'simple-flexbox'
import { WordList } from 'App/components/common/WordListComponents'

const CollapseListByLetter = ({style, letter, wordListByFirstLetter}) => {
  
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

  console.log(wordListByFirstLetter);

  return (
    <Column style={style}>
      <Typography style={{cursor: 'pointer'}} onClick={handleSwitchChange} variant="h5">{letter}</Typography>
      <Collapse in={switchValue}>
        <WordList wordList={wordListByFirstLetter} handleToggle={handleToggle} checked={checked}/>
      </Collapse>
    </Column>
  )
}

export default CollapseListByLetter;