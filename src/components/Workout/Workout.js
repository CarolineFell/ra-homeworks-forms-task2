import React from 'react';
import WorkoutModel from '../../models/WorkoutModel';
import AddWorkout from '../AddWorkout/AddWorkout';
import StepList from '../WorkoutList/WorkoutList';
import moment from 'moment';
import './Workout.css';

export default function Workout(props) {
  const [ workouts, setWorkout ] = React.useState([]);
  const [ editingStepID, setEditingStepID ] = React.useState();
  const [ form, setForm ] = React.useState({ date: '', distance: '' });

  const handleChange = (name, value) => {
    setForm(prevForm => ({...prevForm, [name]: value}));
  };

  const handleSubmit = () => {
    const { distance } = form;
    const getDate = moment(form.date, 'DD.MM.YY', true);

    if (!getDate.isValid()) return;
    const date = getDate.toDate();

    if (editingStepID) {
      const oldDate = workouts.find((o) => o.id === editingStepID).date;
      setWorkout((prevState) => prevState.map((o) => {
        if (o.date.valueOf() === oldDate.valueOf()) {
          return new WorkoutModel(date, Number(distance));
        }
        return o;
      }));
    } else {
      if (workouts.find((o) => o.date.valueOf() === date.valueOf())) {
        setWorkout((prevState) => prevState.map((o) => {
          if (o.date.valueOf() === date.valueOf()) {
            return new WorkoutModel(date, Number(distance) + o.distance);
          }
          return o;
        }));
      } else {
        setWorkout((prevState) => [...prevState, new WorkoutModel(date, Number(distance))]);
      }
    }
    
    setForm({ date: '', distance: '' });
    setEditingStepID(null);
  }

  const handleEdit = (id) => {
    const step = workouts.find((o) => o.id === id);
    setEditingStepID(step.id);
    setForm({ date: moment(step.date).format('DD.MM.YY'), distance: step.distance });
  }

  const handleRemove = (id) => {
    setWorkout((prevState) => prevState.filter((o) => o.id !== id));
  }

  return (
    <div className='workout'>
      <AddWorkout
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <StepList workouts={workouts} onEdit={handleEdit} onRemove={handleRemove} />
    </div>
  )
}
