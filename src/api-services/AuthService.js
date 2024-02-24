//Connor's Auth Service code template
//Author: https://github.com/ConnorBstill/cars-front-end/blob/master/src/ApiServices/AuthService.ts
import { API_URL } from '../environment';

export const register = async (body) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      // Handle non-successful response (HTTP status code other than 2xx)
      const errorMessage = await response.text();
      throw new Error(`Registration failed: ${response.status} - ${errorMessage}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle network errors or other exceptions
    console.error('Error registering:', error);
    throw error;
  }
};

export const LogIn = async (payload) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      // Handle non-successful response (HTTP status code other than 2xx)
      const errorMessage = await response.text();
      throw new Error(`Login failed: ${response.status} - ${errorMessage}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    // Handle network errors or other exceptions
    console.error('Error logging in within AuthServices:', error);
    throw error;
    
  }
};