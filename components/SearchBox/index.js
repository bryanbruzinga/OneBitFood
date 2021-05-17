import React from "react";
import { Form, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";

export default function SearchBox() {
  const [query, setQuery] = React.useState("");
  const router = useRouter();

  function Search(e) {
    e.preventDefault();
    router.push(`/restaurants?q=${query}`);
  }

  return (
    <Form className="d-flex mx-5 mt-2" onSubmit={(e) => Search(e)}>
      <Form.Control
        type="text"
        placeholder="Buscar Restaurantes..."
        className="me-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="outline-custom-red" type="submit">
        <FaSearch />
      </Button>
    </Form>
  );
}
