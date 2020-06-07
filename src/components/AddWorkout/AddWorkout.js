import React from 'react'
import PropTypes from 'prop-types'
import './AddWorkout.css';

export default function AddWorkout(props) {
  const { form, onSubmit, onChange } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form className='add-workout' onSubmit={handleSubmit}>
      <div className='add-workout-date column'>
        <label htmlFor='date label'>{'Дата (ДД.ММ.ГГ)'}</label>
        <input 
          id='date'
          name='date'
          value={form.date}
          onChange={handleChange}
          placeholder="12.12.12"
        />
      </div>
      <div className='add-workout-distance column'>
        <label htmlFor='distance label'>{'Пройдено (КМ)'}</label>
        <input
          id='distance'
          name='distance'
          value={form.distance}
          onChange={handleChange}
          placeholder="12"
        />
      </div>
      <button className="button column" type='submit'>Ok</button>
    </form>
  )
}

AddWorkout.propTypes = {
  form: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}
