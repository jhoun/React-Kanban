export const SET_TASKS = 'SET_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const setTasks = (data) => {
  return {
    type: SET_TASKS,
    data,
  }
}

export const deleteTask = (data) => {
  console.log('data: ', data);
  return {
    type: DELETE_TASK,
    data,
  }
}