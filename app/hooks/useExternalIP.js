import React, {useState, useEffect} from 'react';
import axios from 'axios';
import axiosRetry from 'axios-retry';

const api = axios.create({
  baseURL: 'https://ipapi.co/',
});

export default function useExternalIP(endpoint) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getExternalIP = async () => {
    try {
      setError(false);
      setLoading(true);
      const response = await api.get(endpoint);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log('EXTERNAL IP ERROR #######', error);
    }
  };

  return {
    data,
    error,
    loading,
    getExternalIP,
  };
}
