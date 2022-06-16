const getters = {
  getcounter: state => state.app.counter,
  getname: state => state.user.username,
  getpassword: state => state.user.password
}
export default getters
