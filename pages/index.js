import React, { useEffect } from "react";
import { GET } from "@/app/fetch";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/store/slices/products";
import Head from "next/head";
import ProductList from "@/components/productList";
import IndexBar from "@/components/appBar/indexBar";

export default function Index() {
  const { datas } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await GET("/products");
    const { data } = response;
    if (data) {
      dispatch(setProducts(data));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>{"My Store - Products List"}</title>
        <meta name="description" content={"The best store in the world"} />
        <meta
          name="keywords"
          content={"good product, cheap product, quality product"}
        />
      </Head>
      <div className="container-fluid">
        <IndexBar />
        <ProductList products={datas} />
      </div>
    </>
  );
}
