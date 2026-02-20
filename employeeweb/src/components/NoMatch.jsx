import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div className="text-center mt-5">
      <h1 className="display-4 text-danger">404</h1>
      <h3>Page Not Found</h3>
      <Link to="/" className="btn btn-primary mt-3">Go Back Home</Link>
    </div>
  );
}

export default NoMatch;
