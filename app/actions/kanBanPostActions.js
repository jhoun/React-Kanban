export const DELETE_TASK = 'DELETE_TASK';

export const deleteTask = (data) => {
  return {
    type: DELETE_TASK,
    data,
  }
}