import { Link } from "react-router-dom";

export default function AllproductCard({ image, title, price, id }) {
  return (
    <div>
      <img style={{ width: "100px" }} src={image} alt="" />
      <div>
        <p>{title}</p>
        <p>{price}</p>
        <Link to={`/home/${id}`}>
          <p>Show more</p>
        </Link>
      </div>
    </div>
  );
}
