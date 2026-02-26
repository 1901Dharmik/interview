import { useRef, useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com",
  withCredentials: true,
});


// search based
function SearchComponent() {
  const [results, setResults] = useState([]);
  const controllerRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleSearch = (query) => {
    // Debounce (300ms)
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(async () => {
      // Cancel previous request
      if (controllerRef.current) {
        controllerRef.current.abort();
      }

      controllerRef.current = new AbortController();

      try {
        const res = await api.get(`/search?q=${query}`, {
          signal: controllerRef.current.signal,
        });

        setResults(res.data);
      } catch (err) {
        if (err.name !== "CanceledError") {
          console.error(err);
        }
      }
    }, 300);
  };

  return (
    <input
      type="text"
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search..."
    />
  );
}

// filter based
// const controllerRef = useRef(null);

const fetchProducts = async (category) => {
  if (controllerRef.current) {
    controllerRef.current.abort();
  }

  controllerRef.current = new AbortController();

  try {
    const res = await api.get(`/products?category=${category}`, {
      signal: controllerRef.current.signal,
    });

    setProducts(res.data);
  } catch (err) {
    if (err.name !== "CanceledError") {
      console.error(err);
    }
  }
};


// pagination based

const controllerRef = useRef(null);

const fetchPage = async (page) => {
  if (controllerRef.current) {
    controllerRef.current.abort();
  }

  controllerRef.current = new AbortController();

  try {
    const res = await api.get(`/posts?page=${page}`, {
      signal: controllerRef.current.signal,
    });

    setPosts(res.data);
  } catch (err) {
    if (err.name !== "CanceledError") {
      console.error(err);
    }
  }
};


// User leaves page before request finishes → memory leak warning.

useEffect(() => {
  const controller = new AbortController();

  const fetchData = async () => {
    try {
      const res = await api.get("/dashboard", {
        signal: controller.signal,
      });

      setData(res.data);
    } catch (err) {
      if (err.name !== "CanceledError") {
        console.error(err);
      }
    }
  };

  fetchData();

  return () => {
    controller.abort(); // cancel on unmount
  };
}, []);
