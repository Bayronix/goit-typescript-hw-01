import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

async function getData() {
  const data = await fetchData<any>("https://api.example.com/data");
  console.log(data);
}

getData();
