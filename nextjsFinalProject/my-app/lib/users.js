let users = [];

export function addUser(username, password) {
  if (users.find(u => u.username === username)) return null;
  const newUser = { username, password };
  users.push(newUser);
  return newUser;
}

export function findUser(username) {
  return users.find(u => u.username === username);
}

