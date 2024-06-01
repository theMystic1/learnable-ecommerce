import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),

  endpoints: (builder) => ({
    allProducts: builder.query({
      query: () => "/products",
    }),

    paginateProducts: builder.query({
      query: () => `/products?limit=10&skip=6`,
    }),

    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),

    getProductByCategory: builder.query({
      query: (category) => `/products/category/${category}`,
    }),
  }),
});

export const {
  useAllProductsQuery,
  useGetProductByIdQuery,
  useGetProductByCategoryQuery,
  usePaginateProductsQuery,
} = productsApi;
