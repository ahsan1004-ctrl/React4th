import { Button } from 'antd'
import React from 'react'

const CompletedTodo = () => {
  const todos = JSON.parse(localStorage.getItem('todos')) || []

  // Filter only incomplete todos
  const incompleteTodos = todos.filter(todo => todo.status === "Completed")

  return (
    <>
      <div className="container">

        <div className="row g-4">

          {
            incompleteTodos.map((todo, i) => {
              const {
                title,
                location,
                description,
                dueDate,
                status,
                createdAt,
                createdBy,
                visibility
              } = todo;

              return (
                <div className="col-12 col-sm-6 col-lg-4" key={i}>

                  <div className="card h-100">

                    <div className="card-header d-flex justify-content-between align-items-center">
                      <h5 className="mb-0 fw-bold">{title}</h5>
                      <span className="badge bg-success">{status}</span>
                    </div>

                    <div className="card-body">
                      <p className="text-muted mb-1">
                        <strong>Location:</strong> <span>{location}</span>
                      </p>

                      <div
                        className="overflow-hidden"
                        style={{
                          maxHeight: "75px",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical"
                        }}
                      >
                        {description}
                      </div>

                      <p className="mb-2">
                        <strong>Due Date:</strong>
                        <span className="text-danger">{dueDate}</span>
                      </p>
                    </div>

                    <div className="card-footer">
                      <div className="d-flex justify-content-between align-items-center small">
                        <div>
                          <span className="text-muted">Created:</span><br />
                          <span className="fw-medium">{createdAt}</span>
                        </div>
                        <div className="text-end">
                          <span className="text-muted">By:</span><br />
                          <span className="fw-medium">{createdBy}</span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <span className="badge bg-info">{visibility}</span>
                      </div>
                    </div>
                    {status === 'Incomplete' ? (<Button className='ms-auto m-2' type='primary' size='small'>Click To Complete</Button>) : <></>}
                  </div>

                </div>
              )
            })
          }

        </div>
      </div>
    </>
  )

}

export default CompletedTodo