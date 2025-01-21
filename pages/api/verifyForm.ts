export default function verifyForm({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const error: { error: boolean; list: any[] } = { error: false, list: [] };
  const email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (name === "") {
    error.error = true;
    error.list.push("Name is required");
  }
  if (email === "") {
    error.error = true;
    error.list.push("Email is required");
  } else if (!email_regex.test(email)) {
    error.error = true;
    error.list.push("Email in improper format.");
  }
  if (message === "") {
    error.error = true;
    error.list.push("message is required");
  }
  if (error.error === true) {
    return error;
  }
  return true;
}
