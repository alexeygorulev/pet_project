

const API_URL_COMMENT = "http://localhost:3306/comments";

import axios from "axios";

class DataService {
  getComment() {
    return axios.get(API_URL_COMMENT)
  }

  setComment(data) {
    // console.log(data)
    return axios.post(API_URL_COMMENT, data)


  }

  deleteUser(id) {
    console.log(id)
    return axios.delete(`${API_URL_COMMENT}/${id}`)
  }

}
export default new DataService()
