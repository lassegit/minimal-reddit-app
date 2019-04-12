const defaultParams = {
  method: 'GET',
  cache: 'no-cache',
};

const throwError = error => Promise.reject(new Error(error));

const api = {
  get(url, params) {
    return fetch(url, { ...defaultParams, params })
      .then(response => {
        if (!response.ok) {
          return throwError(`${response.status} error occured.`);
        }
        return response.json();
      })
      .catch(error => throwError(error));
  },
};

export default api;
