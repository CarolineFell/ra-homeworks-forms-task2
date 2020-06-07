import shortid from 'shortid';

export default class WorkoutModel {
  constructor(date, distance) {
    this.id = shortid.generate();
    this.date = date;
    this.distance = distance;
  }
}