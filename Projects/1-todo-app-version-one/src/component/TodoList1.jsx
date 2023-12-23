function TodoList1(){
  let Name = "Born";
  let Date = "08/08/2000";
  return <div className="container ">
        <div className="row kg-row">
          <div className="col-6">{Name}</div>
          <div className="col-4">{Date}</div>
          <div className="col-2">
            <button type="button" className="btn btn-outline-danger kg-button">Delete</button>
          </div>
        </div>
      </div>
}
export default TodoList1;
