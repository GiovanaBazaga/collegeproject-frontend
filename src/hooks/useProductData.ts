import axios from "axios";
import { ProductData } from "../interface/ProductData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (): Promise<ProductData[]> => {
    const response = await axios.get(API_URL + '/products');
    return response.data;
}

export function useProductData() {
    return useQuery<ProductData[], Error>({
        queryFn: fetchData,
        queryKey: [''],
        retry: 2
    })
}