import { FC } from "react";
import Layout from "../components/layout/layout";

function SingleApplicant() {
  return <div> signle </div>;
}

export default SingleApplicant;

SingleApplicant.getLayout = (page) => <Layout thinHeader>{page}</Layout>;
