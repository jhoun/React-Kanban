export const SET_TASKS = 'SET_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const ADD_TASK = 'ADD_TASK';
export const RESET_TASKS = 'RESET_TASKS';

export const setTasks = (data) => {
  return {
    type: SET_TASKS,
    data,
  }
}

export const deleteTask = (data) => {
  return {
    type: DELETE_TASK,
    data,
  }
}

export const addTask = (data) => {
  return {
    type: ADD_TASK,
    data,
  }
}

export const resetTasks = (data) => {
  console.log('data: ', data);
  return {
    type: RESET_TASKS,
    data,
  }
}