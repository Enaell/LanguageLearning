import React, {useState} from 'react';
import { Column } from 'simple-flexbox';
import translate from 'counterpart';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';

const DictionaryTabs = ({dictionary}) =>{
  
  const [tabNumber, setTabNumber] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabNumber(newValue);
  }

  const [switchValue, setSwitchValue] = useState(false);

  const handleSwitchChange = () => (setSwitchValue(!switchValue));

  return(
    <Column>
      <Tabs
      value={tabNumber}
      onChange={handleTabChange}
      indicatorColor="primary"
      textColor="primary"
      centered
      >
        <Tab label={translate('dictionaryPage.alphabeticOrder')}/>
        <Tab label={translate('dictionaryPage.subject')}/>
      </Tabs>
      {tabNumber === 0 && 
        <div>
          <Switch checked={switchValue} onChange={handleSwitchChange} aria-label="Collapse" />
            <Collapse in={switchValue}>
            <Paper>
            <Typography variant="h3" color={'primary'} >tab 0</Typography>
            </Paper>
          </Collapse>
        </div>
      }
      {tabNumber === 1 &&
        <Typography variant="h3" color={'primary'} >tab 1</Typography>
      }
    </Column>
  )
}

export default DictionaryTabs;
