import React from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $quantityPerUnit: Int!) {
    createProduct(record: { name: $name, quantityPerUnit: $quantityPerUnit }) {
      record {
        name
      }
    }
  }
`;

const Mutation = () => {
  const [createProduct, { error, loading, data }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        name: "Aries",
        quantityPerUnit: 69,
      },
    }
  );

  return (
    <div>
      <button onClick={() => createProduct()}></button>
    </div>
  );
};

export default Mutation;
