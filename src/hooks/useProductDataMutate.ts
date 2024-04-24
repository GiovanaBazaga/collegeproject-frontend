import axios from "axios";
import { ProductData } from "../interface/ProductData";
import { QueryClient, useMutation } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const postData = async (data: ProductData): Promise<any> => {
    const response = await axios.post(API_URL + '/products', data);
    return response;
}

export function useProductDataMutate() {
    const queryClient = new QueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['product-data']})
        }
    })

    return mutate;
}