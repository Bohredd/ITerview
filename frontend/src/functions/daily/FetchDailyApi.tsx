import { useEffect } from "react";
import { ApiServiceDaily } from "../../services/api/ApiDaily";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "LIST" | "FILTER";

interface UseFetchDataParams<T> {
  method: HttpMethod;
  url: string;
  id?: number | string;
  body?: object; // Para requisições que exigem corpo (POST, PUT)
  setData: (data: T) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
}

const useFetchDataDaily = <T,>({
  method,
  url,
  id,
  body,
  setData,
  setLoading,
  setError,
}: UseFetchDataParams<T>) => {
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let data;

        if (method === "GET" || method === "LIST") {
          data = await ApiServiceDaily.get<T>(url, id ? Number(id) : undefined);
        } else if (method === "POST") {
          data = await ApiServiceDaily.post<T>(url, body);
        } else if (method === "PUT") {
          data = await ApiServiceDaily.put<T>(url, body);
        } else if (method === "DELETE") {
          data = await ApiServiceDaily.delete<T>(url);
        }

        if (data !== undefined) {
          setData(data);
        } else {
          setError(`No data returned from ${method} request`);
        }
      } catch (err) {
        console.error(`Error during ${method} request`, err);
        setError(`Failed to perform ${method} request`);
      } finally {
        setLoading(false);
      }
    };

    if (id || method === "LIST") {
      fetchData();
    } else {
      setError("Invalid ID or request method");
      setLoading(false);
    }
  }, [method, url, id, body, setData, setLoading, setError]);
};

export default useFetchDataDaily;
