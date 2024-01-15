import axios from 'axios';

const maple = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MAPLE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

maple.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    switch (error.response.status) {
      // case 401: {
      //   alert("로그인 정보가 만료되어 로그아웃 합니다.");
      //   localStorage.clear();
      //   window.location.replace("/");
      //   break;
      // }
    }

    return Promise.reject(error);
  }
);

export { maple };