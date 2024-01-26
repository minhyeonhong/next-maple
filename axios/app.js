import axios from 'axios';

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

app.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
     // 서버 응답이 실패할 경우
     if (error.response) {
        // 서버 응답이 있는 경우
        console.log(error.response.data.message);
      } else if (error.request) {
        // 요청이 완료되지 않은 경우
        console.log('No response received');
      } else {
        // 오류를 발생시킨 요청 구성에 문제가 있는 경우
        console.log('Error in request configuration:', error.message);
      }

    return Promise.reject(error);
  }
);

export { app };