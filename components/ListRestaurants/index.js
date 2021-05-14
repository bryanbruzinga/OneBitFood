import { Row } from "react-bootstrap";
import Restaurant from "./Restaurant";

export default function ListRestaurants() {
  const restaurants = [
    {
      id: 1,
      name: "example 1",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing",
      delivery_tax: "5",
      image_url: "/restaurant.jpeg",
      category_title: "Cozinha japonesa",
    },
    {
      id: 2,
      name: "example 2",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing",
      delivery_tax: "10",
      image_url: "/restaurant.jpeg",
      category_title: "Cozinha mineira",
    },
    {
      id: 3,
      name: "example 3",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing",
      delivery_tax: "7",
      image_url: "/restaurant.jpeg",
      category_title: "Cozinha alienígena",
    },
    {
      id: 4,
      name: "example 4",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing",
      delivery_tax: "2",
      image_url: "/restaurant.jpeg",
      category_title: "Cozinha tailandesa",
    },
    {
      id: 5,
      name: "example 5",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing",
      delivery_tax: "5",
      image_url: "/restaurant.jpeg",
      category_title: "Cozinha nórdica",
    },
  ];

  return (
    <div className="mt-5">
      <h3 className="fw-bold">Restaurantes</h3>
      <Row>
        {restaurants.map((restaurant, i) => (
          <Restaurant {...restaurant} key={i} />
        ))}
      </Row>
    </div>
  );
}
