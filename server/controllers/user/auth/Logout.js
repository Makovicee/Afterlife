export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV === "production",
    });
    res.status(200).json({ message: "Logout was successful" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
