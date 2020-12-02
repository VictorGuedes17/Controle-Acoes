import { getData } from "../Common/storage";
import apiUrl from "./apiUrl";

interface RequestParams {
  params: string;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: any;
  body?: {};
}

//Criado especifica para Auth devido não ser necessário passar o token
export const requestAPI_Auth = async ({
    params,
    method,
    body,
    headers = {}
  }: RequestParams) => {
    const url = `${apiUrl}${params}`;
    console.log("url: ", url);
    // console.log("body: ", JSON.stringify(body));
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: body ? JSON.stringify(body) : null
    });
  
    return await response.json();
  };

  export const requestAPI = async ({
    params,
    method,
    body,
    headers = {}
  }: RequestParams) => {
    const url = `${apiUrl}${params}`;
    console.log("url: ", url);
    // const token = await getData('token')
    // console.log("body: ", JSON.stringify(body));
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer 123`,
        ...headers
      },
      body: body ? JSON.stringify(body) : null
    });
  
    return await response.json();
  };

  export const requestExternalAPI = async ({
    params,
    method,
    body,
    headers = {}
  }: RequestParams) => {
    const url = `${params}`;
    console.log("url: ", url);
    // const token = await getData('token')
    // console.log("body: ", JSON.stringify(body));
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: body ? JSON.stringify(body) : null
    });
  
    return await response.json();
  };

