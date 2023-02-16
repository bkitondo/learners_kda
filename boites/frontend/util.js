import axios from "axios";

const getLearners = async () => {
  const res = await axios.get("http://localhost:3000/api/learner/learnerApi");

  if (res.status !== 200) {
    return new Error("Interval Server Error");
  } else {
    const data = await res.data.data;
    return data;
  }
};

export default getLearners;
