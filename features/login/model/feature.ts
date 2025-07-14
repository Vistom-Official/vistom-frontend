import { useState } from "react";

export const useLoginFeature = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
};
