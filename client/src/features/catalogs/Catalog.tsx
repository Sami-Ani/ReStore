import { Button } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

//  Let's give our props a type
// it's type basically defines the type of values
//  it can expect a list of products
// and a no arg and no returning function

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <ProductList products={products} />
      <Button variant="contained" sx={{ mb: 4, mt: 4 }}>
        {" "}
        Add product
      </Button>
    </>
  );
}
