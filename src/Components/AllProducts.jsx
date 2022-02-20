import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AllproductCard from "./AllproductCard";

const fetchUsers = () => {
  return axios.get("https://fakestoreapi.com/products");
};

export default function AllProducts() {
  const [data, setData] = useState([]);
  const [isLoding, setIsLoading] = useState(true);

  const handleFetchUsers = async () => {
    try {
      setIsLoading(true);
      const List = await fetchUsers();
      setData(List);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleFetchUsers();
  }, []);

  if (isLoding) {
    return (
      <div className="flex">
        <div className="spinner"></div>
        ...Looding
      </div>
    );
  }

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Products</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          gap: 2
        }}
      >
        {data?.data.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                margin: "20px",
                padding: 5,
                border: "1px solid gray",
                backgroundColor: "rgb(238, 247, 247)",
                textAlign: "center"
              }}
            >
              <AllproductCard key={item.id} {...item} />
              {/* <img style={{width:"100px"}} src={item.image} alt={item.title} />
            <div>{item.title}</div> */}

              {/* <Link to={`/home/${item.id}`}>Show more</Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
