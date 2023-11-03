import axios from "axios";

const Bucket_REST_API_URL = "http://localhost:8501/bucket";

class BucketServices {

  getById(bucketId) {
    return axios.get(`${Bucket_REST_API_URL}/${bucketId}`);
  }

  getItems() {
    return axios.get(Bucket_REST_API_URL);
  }

  addItem(bucket) {
    return axios.post(Bucket_REST_API_URL, bucket);
  }

  updateItem(bucket) {
    return axios.put(`${Bucket_REST_API_URL}/${bucket.id}`, bucket);
  }

  deleteItem(bucketId) {
    return axios.delete(`${Bucket_REST_API_URL}/${bucketId}`);
  }

}

export default new BucketServices();
