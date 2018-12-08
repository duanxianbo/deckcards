import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import {colorTypeMap} from '../config';
import theme from '../theme';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Zoom from '@material-ui/core/Zoom';
const {palette, shadows, shape} = theme;

const cardIconSylte = {
  color: ({type}) => colorTypeMap[type],
  content: ({type}) => `'${type}'`,
  position: 'absolute'
};

const styles = {
  cardContainer: {
    marginRight: 10,
    position: 'relative',
    width: 50,
    height: 70,
    borderRadius: shape.borderRadius,
    background: palette.white,
    boxShadow: shadows[8],
    '&:before': {...cardIconSylte, top: 2, left: 2},
    '&:after': {...cardIconSylte, bottom: 2, right: 2},
    marginBottom: 10
  }
};

function Card({element, classes}) {
  return (
    <Zoom in={true}>
      <Grid container alignItems={'center'} className={classes.cardContainer}>
        <Grid item container justify={'center'}>
          <Typography variant="subtitle2" color="inherit" noWrap>
            {element}
          </Typography>
        </Grid>
      </Grid>
    </Zoom>
  );
}

Card.propTypes = {
  element: PropTypes.string,
  classes: PropTypes.object
};


export default injectSheet(styles)(Card);
