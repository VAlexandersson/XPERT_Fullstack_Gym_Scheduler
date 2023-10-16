export const getAllExercisesQuery = "SELECT * FROM Exercise";




export const getAmountOfWorkoutsQuery = "SELECT COUNT(*) as Number_of_workouts FROM Workout";


export const getAllWorkoutsWithExercisesQuery =    `SELECT  w.ID as wid, w.name AS Workout, c.ID as eid, c.name AS Exercise,
                                                    e.sets, e.reps, e.weight, e.minutes, e.rank
                                                    FROM Exercise as e
                                                    JOIN Workout as w ON e.WorkoutID = w.ID
                                                    JOIN CatalogExercise as c ON e.ExerciseID = c.ID;`;