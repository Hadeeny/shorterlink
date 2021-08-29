const urlRegex = new RegExp(
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
);

async function fetchWithTimeout(resource, options) {
  const { timeout = 15000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(resource, {
        ...options,
        signal: controller.signal,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }

    clearTimeout(id);
  });
}

export { urlRegex, fetchWithTimeout };
