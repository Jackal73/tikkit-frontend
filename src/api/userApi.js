import axios from 'axios';

const loginUrl = "http://localhost:3001/v1/user/login";
export const userLogin = frmData => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(loginUrl, frmData);

      console.log(res);

      resolve(res.data);

      if(res.data.status === "success") {
        sessionStorage.setItem('accessJWT', res.data.accessJWT);
        localStorage.setItem(
          'tikkit',
          JSON.stringify({ refreshJWT: res.data.refreshJWT })
        );
      }
    } catch (error) {
      console.log(error.message);
      reject(error);
    }


  });
};