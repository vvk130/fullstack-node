const pool = new Pool({
    connectionString: 'YOUR_ELEPHANTSQL_CONNECTION_STRING',
  });
  
pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
  )
`, (err, result) => {
  if (err) {
    console.error('Error creating the users table', err);
  } else {
    console.log('Users table created successfully');
  }
});

pool.query(`
  INSERT INTO users (username, email)
  VALUES
    ('user1', 'user1@example.com'),
    ('user2', 'user2@example.com')
`, (err, result) => {
  if (err) {
    console.error('Error seeding the users table', err);
  } else {
    console.log('Data seeded successfully');
  }
});
  