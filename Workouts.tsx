import React from "react";
import work1 from "../assets/workouts/pushup.gif";
import work2 from "../assets/workouts/incline push.gif";
import work3 from "../assets/workouts/dimond.gif";
import work4 from "../assets/workouts/wide push.gif";
// Define the types for the data
type Exercise = {
  exercise_id: string;
  name: string;
  sets: number;
  reps: number[];
  weight: number | string | number[];
  unit: string | null;
  img?: string; // Add img as an optional property
};

type Workout = {
  workout_id: string;
  user_id: string;
  date: string;
  exercises: Exercise[];
};

// Sample dummy data
const workoutData: Workout[] = [
  {
    workout_id: "w001",
    user_id: "user123",
    date: "2025-01-04",
    exercises: [
      {
        img: work1,
        exercise_id: "e001",
        name: "Pushup",
        sets: 3,
        reps: [15, 12, 10],
        weight: "Bodyweight",
        unit: null,
      },
      {
        img: work2,
        exercise_id: "e002",
        name: "Incline pushup",
        sets: 4,
        reps: [12, 10, 8, 6],
        weight: "bodyweight",
        unit: null,
      },
      {
        img: work3,
        exercise_id: "e002",
        name: "Diamond pushup",
        sets: 4,
        reps: [12, 10, 8, 6],
        weight: "bodyweight",
        unit: null,
      },
      {
        img: work4,
        exercise_id: "e002",
        name: "wide-arm pushup",
        sets: 4,
        reps: [12, 10, 8, 6],
        weight: "bodyweight",
        unit: null,
      },
    ],
  },
  {
    workout_id: "w002",
    user_id: "user124",
    date: "2025-01-04",
    exercises: [
      {
        exercise_id: "e003",
        name: "Squats",
        sets: 4,
        reps: [10, 10, 8, 8],
        weight: [80, 90, 100, 110],
        unit: "kg",
      },
      {
        exercise_id: "e004",
        name: "Lunges",
        sets: 3,
        reps: [12, 12, 10],
        weight: 20,
        unit: "kg",
      },
    ],
  },
];

const Workouts = () => {
  return (
    <div className="font-sans p-5 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Workout Sessions
      </h1>
      <div className="space-y-6">
        {workoutData.map((workout) => (
          <div
            key={workout.workout_id}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 w-96"
          >
            <p className="text-sm text-gray-500 mb-2">
              User ID: {workout.user_id}
            </p>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Exercises:
            </h3>
            <ul className="space-y-4">
              {workout.exercises.map((exercise) => (
                <li
                  key={exercise.exercise_id}
                  className="border-l-4 border-blue-500 pl-4"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {exercise.img && (
                      <img
                        src={exercise.img}
                        alt={exercise.name}
                        className="w-48 h-auto rounded-lg shadow-sm"
                      />
                    )}
                    <div>
                      <strong className="text-lg font-medium text-gray-800">
                        {exercise.name}
                      </strong>
                      <p className="text-sm text-gray-600">
                        Sets: {exercise.sets}, Reps: {exercise.reps.join(", ")}
                      </p>
                      <p className="text-sm text-gray-600">
                        Weight:{" "}
                        {Array.isArray(exercise.weight)
                          ? exercise.weight.join(", ") + ` ${exercise.unit}`
                          : `${exercise.weight} ${exercise.unit || ""}`}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
