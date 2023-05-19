import { ThreeDots } from "react-bootstrap-icons";

const MatchCardComponent = (props: any) => {
  return (
    <div className="col-12">
      <div className="match">
        <div className="card-body">
          <h5 className="card-title">
            Recent Sales <span>| Today</span>
          </h5>

          <table className="table table-borderless datatable">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Customer</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <a href="#">{props.num}</a>
                </th>
                <td>{props.name}</td>
                <td>
                  <a href="#" className="text-primary">
                    {props.info}
                  </a>
                </td>
                <td>{props.price}</td>
                <td>
                  <span className="badge bg-success">{props.status}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MatchCardComponent;
