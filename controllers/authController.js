const authService = require ("../services/authService")

async function newUser(req, res) {
    try {
      const userCreated = await authService.daftar(req.body);
      res.status(201).json({ userCreated });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async function Login(req, res) {
    const userData = req.body;
    try {
      const user = await authService.Login(userData);
      res.status(200).json({
        message: "Successfully login",
        data: user
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

module.exports = {
    newUser,
    Login
}
  