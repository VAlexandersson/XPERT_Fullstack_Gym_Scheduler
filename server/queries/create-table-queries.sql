CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL
);


CREATE TABLE IF NOT EXISTS workout_plan (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  user_id INTEGER NOT NULL,
  CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id)
);


CREATE TABLE IF NOT EXISTS exercise (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  sets INTEGER,
  reps INTEGER,
  intervalles INTEGER,
);


CREATE TABLE IF NOT EXISTS workout_plan_exercise (
  id SERIAL PRIMARY KEY,
  workout_plan_id INTEGER NOT NULL,
  exercise_id INTEGER NOT NULL,
  position INTEGER NOT NULL,
  CONSTRAINT fk_workout_plan_id FOREIGN KEY (workout_plan_id) REFERENCES workout_plan(id),
  CONSTRAINT fk_exercise_id FOREIGN KEY (exercise_id) REFERENCES exercise(id)
);