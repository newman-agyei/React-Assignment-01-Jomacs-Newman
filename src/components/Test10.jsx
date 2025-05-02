/**
Task:

If isAdmin is true, display <h2>Admin Panel</h2>. Otherwise, show nothing. Use the logical AND operator (&&).
 */

function Test10() {
  const isAdmin = true;

  return (
    // Your code here
    <div>
      <h1>Dashboard</h1>
      {isAdmin && <p>You have admin access.</p>}
    </div>
  );
}

export default Test10;
