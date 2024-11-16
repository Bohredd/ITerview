import axios from "axios";

const baseUrl = "http://localhost:8000/interview/api";

export class ApiService {
  // Axios GET request
  static async get<T>(url: string, id?: number): Promise<T> {
    try {
      const response = await axios.get(`${baseUrl}${url}${id ? `${id}` : ""}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching data", error);
      throw error;
    }
  }

  // Axios POST request
  static async post<T>(url: string, data: any): Promise<T> {
    try {
      const response = await axios.post(`${baseUrl}${url}`, data);
      return response.data;
    } catch (error) {
      console.error("Error posting data", error);
      throw error;
    }
  }

  // Axios PUT request
  static async put<T>(url: string, data: any): Promise<T> {
    try {
      const response = await axios.put(`${baseUrl}${url}`, data);
      return response.data;
    } catch (error) {
      console.error("Error updating data", error);
      throw error;
    }
  }

  // Axios DELETE request
  static async delete<T>(url: string): Promise<T> {
    try {
      const response = await axios.delete(`${baseUrl}${url}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting data", error);
      throw error;
    }
  }

  // Axios LIST request
  static async list<T>(url: string): Promise<T> {
    try {
      const response = await axios.get(`${baseUrl}${url}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching list data", error);
      throw error;
    }
  }
}
