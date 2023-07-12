import AbstractManager from "./AbstractManager.js"

class CommentManager extends AbstractManager {
  constructor() {
    super({ table: "comments" })
  }

  findAll() {
    return this.database.query(
      `SELECT c.id, c.content, p.id as pid, u.id as uid FROM  ${this.table} c JOIN posts p ON c.post_id = p.id JOIN users u ON c.author = u.id;`
    )
  }

  find(id) {
    return this.database.query(
      `SELECT c.id, c.content, p.id as pid, u.id as uid FROM  ${this.table} c JOIN posts p ON c.post_id = p.id JOIN users u ON c.author = u.id where p.id = ?;`,
      [id]
    )
  }
}

export default CommentManager
