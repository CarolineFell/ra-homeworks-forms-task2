import React from 'react';
import PropTypes from 'prop-types';
import StepModel from '../../models/WorkoutModel';
import moment from 'moment';
import './WorkoutItem.css';

export default function WorkoutItem(props) {
  const { date, distance } = props.item;

  return (
    <div className='workout-item'>
      <div className='workout-item-date column-item'>{
        moment(date).format('DD.MM.YY')
      }</div>
      <div className='workout-item-distance column-item'>{distance.toFixed(1)}</div>
      <div className='workout-item-actions column-item'>
        <div className='icon edit' onClick={props.onEdit}>edit</div>
        <div className='icon delete' onClick={props.onRemove}>delete</div>
      </div>
    </div>
  )
}

WorkoutItem.propTypes = {
  item: PropTypes.instanceOf(StepModel).isRequired,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}