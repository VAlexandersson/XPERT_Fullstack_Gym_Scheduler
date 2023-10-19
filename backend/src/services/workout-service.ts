import Database from 'better-sqlite3';
const db = new Database('./db1.sqlite');

export const get = (id: number) => {
};


export const getAllPlannedWorkouts = (id: number) => {
  return db
    .prepare(
      `SELECT w.ID as WorkoutID, w.name, pw.date, w.UserID as UserID, pw.ID AS PlannedWorkoutID
                                            FROM PlannedWorkout pw
                                            INNER JOIN Workout w ON pw.WorkoutID = w.ID
                                            WHERE w.UserID = ? 
                                            ORDER BY pw.date ASC;`
    )
    .all(id);
};

export const getNextWorkout = (id: number) => {
  return db
    .prepare(
      `SELECT w.ID as WorkoutID, w.name, pw.date, w.UserID as UserID, pw.ID AS PlannedWorkoutID,
                                            FROM PlannedWorkout pw
                                            INNER JOIN Workout w ON pw.WorkoutID = w.ID
                                            WHERE w.UserID = ? 
                                            ORDER BY pw.date ASC
                                            LIMIT 1;`
    )
    .get(id);
};


export const getPlannedWorkouts = (id: number) => {
  const plannedWorkouts = db
    .prepare(
      `
        SELECT 
            PlannedWorkout.ID,
            PlannedWorkout.WorkoutID,
            PlannedWorkout.date,
            Workout.name,
            Workout.UserID
        FROM PlannedWorkout
        JOIN Workout ON PlannedWorkout.WorkoutID = Workout.ID
        WHERE date >= date('now') AND Workout.UserID = ?
        GROUP BY PlannedWorkout.WorkoutID
    `
    )
    .all(id);
  return plannedWorkouts;
}







