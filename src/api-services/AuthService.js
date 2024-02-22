//Connor's Auth Service code template
//Author: https://github.com/ConnorBstill/cars-front-end/blob/master/src/ApiServices/AuthService.ts
import { API_URL } from '../environment';

export const register = async (body) => {
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

export const LogIn = async (payload) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();

  return data;
}