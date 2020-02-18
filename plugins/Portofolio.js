import Vue from 'vue'
const pool = require('db.js')

Vue.prototype.$getUser = (id) => {
  const result = pool.query('SELECT * FROM portofolio WHERE id=$1', [id])
  return result
}
