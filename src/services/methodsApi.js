methods: {
  // * get / set notes
  getNotes() {
    DataService.getAllUsers()
    .then((res) => {
      const dates = res.data
      this.notes = dates.reverse()
    })
    .catch((e) => console.log(e))

  },
// * submit note
handleSubmit(title,name, date_now) {
const note = {
  title: title,
  name: name,
  date_now: date_now,
}
let formData = new FormData()
formData.append('title', title)
formData.append('name', name)
formData.append('date_now', date_now)
DataService.setAllUsers(formData)
.then((res) => {
  console.log(res)
})
.catch((e) => console.log(e))



},
  // * remove note
  handleRemove(id) {
    DataService.deleteUser(id)
    .then((res) => {
      console.log(res)
    })
    .catch((e) => console.log(e))
  }
}
