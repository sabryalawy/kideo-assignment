export const addContactMessage = async (
  email: string,
  message: string,
  name: string
): Promise<any> => {
  await addContactMessage(email, message, name);
  return { email, message, name, status: "Message received" };
};

export const getContactMessage = async (
  page: any,
  limit: any
): Promise<any> => {
  return {
    page,
    limit,
    messages: await getContactMessage(Number(page), Number(limit)),
  };
};
