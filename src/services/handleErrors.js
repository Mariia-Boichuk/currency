export const handleErrors = async (request) => {
  try {
    return await request;
  } catch (e) {
    throw e;
  }
};
