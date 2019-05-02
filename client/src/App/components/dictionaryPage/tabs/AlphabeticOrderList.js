import React, {useState} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const orderedDictionary = ({dictionary}) => {
  console.log('dictionary in ordered function');
  console.log(dictionary);
  let sortedDictionary = {}
  dictionary.map(word => {
    if (!(sortedDictionary.keys && sortedDictionary.keys.includes(word.globalName.charAt(0))))
      sortedDictionary[word.globalName.charAt(0)] = [];
    sortedDictionary[word.globalName.charAt(0)].push(word);
  });
      return sortedDictionary;
}

const AlphabeticOrderList = ({dictionary}) => {
  
  console.log(orderedDictionary({dictionary}));

  const [switchValue, setSwitchValue] = useState(false);

  const handleSwitchChange = () => (setSwitchValue(!switchValue));

  return (
    <div>
    <Typography variant="h6" onClick={handleSwitchChange}>tab 0</Typography>
    <Collapse in={switchValue}>
      <Paper>
        <Typography variant="h3" color={'primary'} >tab 0</Typography>
      </Paper>
    </Collapse>

    {/* <List>
    {dictionary.map((tr) => <Translation translation={tr} key={tr} selectAnswer={onAnswerSelected} />
    )}
  </List> */}
  </div>
  )
}

export default AlphabeticOrderList;