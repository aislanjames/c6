// lib/wordpress.js
import axios from 'axios';

const API_URL = 'http://wp-api.local/wp-json/wp/v2'; // URL do seu site WordPress local

export async function getPosts() {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
}
