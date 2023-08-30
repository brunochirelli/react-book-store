export const handleResponse = async (response: any) => {
  console.log(response);

  const data = await response.json();

  console.log(data);

  if (!response.ok) {
    if (response.status === 401) {
      // auto logout if 401 response returned from api
      // logout();
      // location.reload(true);
    }
    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }

  if (data) return data;
};
