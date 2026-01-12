import {useEffect, useState} from "react";

const fetchRes = async (searchText: string, abortSignal: AbortSignal) => {
  const response = await fetch(`/?s=${searchText}`, {signal: abortSignal})
    .then(res => res.json())
    .then(result => result);
  return response.data;
};
const useDebouce = (val: string, ms: number) => {
  const [current, setCurrent] = useState(() => val);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const handler = setTimeout(() => {
      setCurrent(val);
      setIsLoading(false);
    }, ms);

    return () => {
      clearTimeout(handler);
    };
  }, [val, ms]);
  return {current, isLoading};
};
export const TestSearch = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const debouncedValue = useDebouce(inputValue, 500).current;

  const abortController = new AbortController();
  useEffect(() => {
    abortController.abort();
    fetchRes(debouncedValue, abortController.signal);
  }, [debouncedValue]);

  useEffect(() => {
    return () => abortController.abort();
  }, []);
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </div>
  );
};
