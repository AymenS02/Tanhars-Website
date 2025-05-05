export default async function handler(req, res) {
  const { token } = req.body;
  const secret = import.meta.env.VITE_RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
  );
  const data = await response.json();
  res.status(200).json({ success: data.success });
}