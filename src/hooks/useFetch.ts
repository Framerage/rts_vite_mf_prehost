/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect, useMemo, useState} from "react";

/* eslint-disable @typescript-eslint/no-unused-vars */

export const useFetchAbort = (url: string) => {
  const [currentUrl, setCurrentUrl] = useState("");
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string | null>(null);

  const control = useMemo(() => new AbortController(), []);

  useEffect(() => {
    setCurrentUrl(prev => {
      if (prev !== url) {
        control.abort();
      }
      return url;
    });
  }, [url, control.signal, control]);

  useEffect(() => {
    if (currentUrl === url && isLoading) control.abort();
  }, [isLoading, currentUrl, url, control]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchedData = await fetch(url, {signal: control.signal})
          .then(res => res.json())
          .then(r => r.data);
        setIsLoading(false);
        setData(fetchedData);
      } catch (err: any) {
        if (err?.name === "AbortError") {
          setErr("Fetch request was aborted");
        } else {
          setErr("Other error:" + err);
        }
        setIsLoading(false);
      }
    };
    fetchData();
    return () => control.abort();
  }, [url, control]);

  return {data, isLoading, err};
};
