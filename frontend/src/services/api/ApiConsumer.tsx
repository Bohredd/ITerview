import axios from "axios";

const baseUrl = "http://localhost:8000/";

export class ApiConsumer {
  static async get<T>(appname: string, url: string, id?: number): Promise<T> {
    try {
      const response = await axios.get(
        `${baseUrl}${appname}/api/${url}${id ? `${id}` : ""}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data", error);
      throw error;
    }
  }

  static async post<T>(appname: string, url: string, data: any): Promise<T> {
    console.log("POST request to:", `${baseUrl}${appname}/api/${url}`);
    console.log("With data:", data);
    try {
      const response = await axios.post(
        `${baseUrl}${appname}/api/${url}`,
        data
      );
      return response.data;
    } catch (error) {
      console.error("Error posting data", error);
      throw error;
    }
  }

  static async put<T>(appname: string, url: string, data: any): Promise<T> {
    try {
      const response = await axios.put(`${baseUrl}${appname}/api/${url}`, data);
      return response.data;
    } catch (error) {
      console.error("Error updating data", error);
      throw error;
    }
  }

  static async delete<T>(appname: string, url: string): Promise<T> {
    try {
      const response = await axios.delete(`${baseUrl}${appname}/api/${url}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting data", error);
      throw error;
    }
  }

  static async list<T>(appname: string, url: string): Promise<T> {
    try {
      const response = await axios.get(`${baseUrl}${appname}/api/${url}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching list data", error);
      throw error;
    }
  }
}
