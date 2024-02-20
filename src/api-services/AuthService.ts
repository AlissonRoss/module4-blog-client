//Connor's Auth Service code template
//Author: https://github.com/ConnorBstill/cars-front-end/blob/master/src/ApiServices/AuthService.ts
import { API_URL } from '../environment';

interface AuthRequestBody {
  username: string;
  password: string;
}

export const register = async (body: AuthRequestBody) => {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();

  return data;
}

export const LogIn = async (body: AuthRequestBody) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const data = await response.json();

  return data;
}