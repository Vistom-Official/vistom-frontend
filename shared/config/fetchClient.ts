export const throwResponseError = async (response: Response): Promise<void> => {
  let body = {};
  try {
    body = await response.json();
  } catch {
    // Ignore
  }
  throw {
    IS_API_ERROR: true,
    url: response.url,
    status: response.status,
    data: body,
  };
};

export const fetchClient = async (
  url: string,
  options?: RequestInit,
  withErrorHandler = true
) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  const response = await fetch(url, config);

  if (withErrorHandler) {
    if (!response.ok) {
      await throwResponseError(response);
    }

    return await response.json();
  }

  return response;
};
