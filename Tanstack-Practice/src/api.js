export const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to load users");
  return res.json();
};
export const fetchUser = async (id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (!res.ok) throw new Error("Failed to load user");
  return res.json();
};

export const createUser = async (newUser) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });

  if (!res.ok) throw new Error("Failed to create user");
  return res.json();
};
