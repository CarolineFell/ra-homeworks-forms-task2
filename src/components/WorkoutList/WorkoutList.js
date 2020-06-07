import React from 'react';
import PropTypes from 'prop-types';
import WorkoutItem from '../WorkoutItem/WorkoutItem';
import './WorkoutList.css';

export default function WorkoutList(props) {
  const { workouts } = props;

  const handleEdit = (id) => props.onEdit(id);
  const handleRemove = (id) => props.onRemove(id);

  const workoutsSort = workouts.sort((a, b) => {
    if (Date.parse(a.date) < Date.parse(b.date)) {
      return 1;
    }
    return -1;
  });

  return (
    <div className='workout-list'>
      <div className='workout-list-headers'>
        <div className='workout-list-date'>{'Дата (ДД.ММ.ГГ)'}</div>
        <div className='workout-list-distance'>{'Пройдено (КМ)'}</div>
        <div className='workout-list-actions'>{'Действия'}</div>
      </div>
      <div className='workout-list-body'>
        {
          workoutsSort.map((o) => 
            <WorkoutItem
              item={o}
              onEdit={() => handleEdit(o.id)}
              onRemove={() => handleRemove(o.id)}
              key={o.id}
            />
          )
        }
      </div>
    </div>
  );
}

WorkoutList.propTypes = {
  workouts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
