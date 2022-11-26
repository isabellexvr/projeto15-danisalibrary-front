import Header from "../constants/Header";
import Sidebar from "../constants/Sidebar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function CategoryPage() {
  const { category } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/get-products/${category}`)
      .then((answer) => console.log(answer.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Header />
      <Sidebar/>
    </>
  );
}
