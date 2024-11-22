import { useEffect } from "react";
import { ApiConsumer } from "../services/api/ApiConsumer";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "LIST" | "FILTER";

interface useFetchDataParams<T> {
  method: HttpMethod;
  url: string;
  app_name: string;
  id?: number | string;
  body?: object; // Para requisições que exigem corpo (POST, PUT)
  setData: (data: T) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string) => void;
}

const useFetchData = <T,>({
  method,
  url,
  app_name,
  id,
  body,
  setData,
  setLoading,
  setError,
}: useFetchDataParams<T>) => {
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let data;

        if (method === "GET" || method === "LIST") {
          console.log("app_name: ", app_name);
          console.log("url: ", url);
          console.log("id: ", id);
          data = await ApiConsumer.get<T>(
            app_name,
            url,
            id ? Number(id) : undefined
          );
        } else if (method === "POST") {
          console.log("body: ", body);
          data = await ApiConsumer.post<T>(app_name, url, body);
        } else if (method === "PUT") {
          data = await ApiConsumer.put<T>(app_name, url, body);
        } else if (method === "DELETE") {
          data = await ApiConsumer.delete<T>(app_name, url);
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
                console.log("app_name: ", app_name);
                console.log("url: ", url);
              console.log("id: ", id);
              console.log(
                `127.0.0.1:8000/${app_name}/api/${url}${id ? `${id}` : ""}`
              );
      setError("Invalid ID or request method");
      setLoading(false);
    }
  }, [method, url, id, body, setData, setLoading, setError]);
};

export default useFetchData;
