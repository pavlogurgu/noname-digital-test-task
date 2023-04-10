import data from "../auth/services/dataBackup.json";

export function Users() {
  console.log(data, typeof data);

  return (
    <>
      {data.users.map((user) => (
        <>
          <div class="card" key={user.id} style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">{user.name}</h5>
              {user.admin ? (
                <p>
                  <b>Admin</b>
                </p>
              ) : null}

              <p class="card-text">Age: {user.age}</p>
              <p class="card-text">
                Trips:{" "}
                {user.trips === "" ? (
                  <span>No destinations yet</span>
                ) : (
                  <span>{user.trips}</span>
                )}
              </p>
              <p class="card-text">Role: {user.role}</p>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
