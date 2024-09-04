import { useMutation, useQueryClient } from "@tanstack/react-query";

const useAddToWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (newProduct) => {
      // Here you would usually send a request to your API to update the wishlist
      // For example:
      // return axios.post('/api/wishlist', newProduct);
      return Promise.resolve(newProduct);
    },
    {
      onMutate: async (newProduct) => {
        await queryClient.cancelQueries(["wishlist"]);

        const previousWishlist = queryClient.getQueryData(["wishlist"]);

        queryClient.setQueryData(["wishlist"], (oldWishlist) => [
          ...(oldWishlist || []),
          newProduct,
        ]);

        return { previousWishlist };
      },
      onError: (err, newProduct, context) => {
        queryClient.setQueryData(["wishlist"], context.previousWishlist);
      },
      onSettled: () => {
        queryClient.invalidateQueries(["wishlist"]);
      },
    }
  );
};

export default useAddToWishlist;
