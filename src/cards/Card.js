import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import {colorTypeMap} from '../config';

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
    borderRadius: '10px',
    background: '#fff',
    boxShadow: '3px 3px 7px rgba(0,0,0,0.3)',
    '&:before': {...cardIconSylte, top: 2, left: 2},
    '&:after': {...cardIconSylte, bottom: 2, right: 2},
    display: 'flex',
    alignItems: 'center'
  },
  cardContent: {
    flex: 1,
    textAlign: 'center',
    font: 'Georgia, Times New Roman, serif'
  }
};

function Card({element, classes}) {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardContent}>{element}</div>
    </div>
  );
}

Card.propTypes = {
  element: PropTypes.string,
  classes: PropTypes.object
};


export default injectSheet(styles)(Card);
