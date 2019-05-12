import React from 'react';
import { Column } from 'simple-flexbox';
import Typography from '@material-ui/core/Typography';


const styles = {
  pageTitle:{
    margin: '50px'
  },
  pageDescription:{
    maxWidth: '1140px'
  }
}

export const PageTitle = ({title}) => {
  return (
    <Column horizontal='center'>
      <Typography style={styles.pageTitle} variant="h3" color={'primary'} >{title}</Typography>
    </Column>
  );
}

// description must be string[]
export const PageDescription = ({descriptions}) => {
  return (
    <Column horizontal='center'>
      {descriptions.map((description) => (
          <Typography key={description} variant="subtitle1" color={'textSecondary'} >{description}</Typography>
        )
      )}
    </Column>
  )
}