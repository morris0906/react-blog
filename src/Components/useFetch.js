import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        //Checking error from the server
        if (!res.ok) {
          throw Error("Oops something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
        setIsPending(false);
        setData(null);
        setError(err.message);
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
