

const API_URL_COMMENT = "http://localhost:3306/comments";

import axios from "axios";

class DataService {
  getComment() {
    return axios.get(API_URL_COMMENT)
  }

  setComment(data) {
    return axios.post(API_URL_COMMENT, data)


  }

  putComment(data) {
    return axios.put(API_URL_COMMENT, data)
  }

  deleteComment(data) {
    return axios.delete(API_URL_COMMENT, {data})
  }

}
export default new DataService()
