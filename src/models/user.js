import pool from "../config/dbConnect.js";

class User {
  static async findUserById(userId) {
    try {
      const [rows] = await pool.execute("SELECT * FROM user WHERE user_id=?", [
        userId,
      ]);
      return rows[0];
    } catch (err) {
      throw err;
    } 
  }

  static async saveUserInfo({ userId, email, password, name, birthday }) {
    try {
      await pool.execute("INSERT INTO user(user_id, email, password, name, birthday) VALUES(?, ?, ?, ?, ?)", [
        userId,
        email,
        password,
        name,
        birthday,
      ]);
    } catch (err) {
      throw err;
    }
  }

  static async checkIdExistence(userId) {
    try {
      const [rows] = await pool.execute(
        "SELECT EXISTS(SELECT * FROM user WHERE user_id=?) as isExistence",
        [userId]
      );
      return rows[0];
    } catch (err) {
      throw err;
    }
  }
}

export default User;
