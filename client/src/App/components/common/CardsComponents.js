import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent } from '@material-ui/core';
import { Column } from 'simple-flexbox'
import translate from 'counterpart';


export const WordCard = ({ word, elevation, align, wordDetailAlign, style }) => {
  return (
    <Card elevation={ elevation || 1 } style={style}>
      <CardContent>
          <Typography align={ align } color="textSecondary" gutterBottom>
            Caractère
          </Typography>
          <Typography align={ wordDetailAlign || align } component="h2" variant="h1" gutterBottom>
            { word.name }
          </Typography>
          <Typography align={ align } color="textSecondary" gutterBottom>
            Pinying
          </Typography>
          <Typography align={ wordDetailAlign || align } variant="h6" gutterBottom>
            { word.globalName }
          </Typography>
      </CardContent>
    </Card>
  );
}

export const WordColumn = ({ word, horizontal, nameVariant, globalNameVariant }) => {
  return (
    <Column horizontal={ horizontal || 'center'} >
        <Typography color="textSecondary" gutterBottom>
          Caractère
        </Typography>
        <Typography variant={ nameVariant || 'h2' } gutterBottom>
          { word.name }
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Pinying
        </Typography>
        <Typography variant= { globalNameVariant || 'h6' } gutterBottom>
          { word.globalName }
        </Typography>
    </Column>
  )
}
