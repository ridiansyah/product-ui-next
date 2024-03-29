import { GET } from "@/app/fetch";
import DetailBar from "@/components/appBar/detailBar";
import CardDetail from "@/components/cardDetail";
import Head from "next/head";

export async function getServerSideProps({ params }) {
  // Fetch data on server side based on 'params.id'
  let product = {};
  const response = await GET(`/products/${params.id}`);
  const { data } = response;
  if (data) {
    product = data;
  }
  return { props: { product } };
}

const ProductDetail = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product?.title ?? "Product Detail"}</title>
        <meta
          name="description"
          content={product?.description ?? "Product Description"}
        />
        <meta
          name="keywords"
          content={
            product?.title ?? "good product, cheap product, quality product"
          }
        />
      </Head>
      <div className="container-fluid">
        <DetailBar />
        <CardDetail product={product} />
      </div>
    </>
  );
};

export default ProductDetail;
