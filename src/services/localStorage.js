export const addEmailUser = (email) => {
  const user = { email };
  localStorage.setItem('user', JSON.stringify(user));
};

export const addDateLog = (date) => {
  const dateLog = { date };
  localStorage.setItem('date', JSON.stringify(dateLog));
}
