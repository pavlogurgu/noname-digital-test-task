import data from "../auth/services/dataBackup.json";
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';


export function Users() {

  const [isOpen, setIsOpen] = useState(false);

  function addRole(){
    setIsOpen(true)

    
  }

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
              <button onClick={addRole}>Add Role</button>
              {isOpen === true ? (
                <Form>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      label="Пасажир"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      label="Водій"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                    
                      label="Диспетчер"
                      name="group1"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
              </Form>
              ) : null}

            </div>
          </div>
        </>
      ))}
    </>
  );
}
