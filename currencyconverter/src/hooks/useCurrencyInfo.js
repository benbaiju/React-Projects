import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const baseUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`;
    const fallbackUrl = `https://latest.currency-api.pages.dev/v1/currencies`;
    const newUrl = `${baseUrl}/${currency}.json`;
    const fallbackEndpoint = `${fallbackUrl}/${currency}.json`;

    const fetchCurrencyData = async () => {
      try {
        let response = await fetch(newUrl);
        if (!response.ok) {
          throw new Error("New API fetch failed");
        }
        let json = await response.json();
        setData(json[currency]);
      } catch (error) {
        console.warn("Using fallback URL due to error:", error);
        try {
          let response = await fetch(fallbackEndpoint);
          if (!response.ok) {
            throw new Error("Fallback API fetch failed");
          }
          let json = await response.json();
          setData(json[currency]);
        } catch (error) {
          setError("Failed to fetch currency data");
          console.error(error);
        }
      }
    };

    fetchCurrencyData();
  }, [currency]);

  if (error) {
    console.error(error);
  }

  console.log(data);
  return data;
}

export default useCurrencyInfo;
