import {
  getCheckStatus,
  getStones,
  getCheckInDays,
  check_in,
  sticky_luck,
  draw
} from "./api/getMsg.js";
import axios from "axios";
axios.defaults.withCredentials = true;
import config from "./config.js";
axios.defaults.baseURL = config.url;
axios.defaults.headers["cookie"] = config.cookie;

// 相应拦截处理
axios.interceptors.response.use(
  (response) => {
    const { data } = response;
    if (data.err_msg === "success" && data.err_no === 0) {
      return data;
    } else {
      return Promise.reject(data.err_msg);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 当天是否签到
getCheckStatus().then((res) => {
  console.log(res);
});
// 矿石数目
getStones().then((res) => {
  console.log(res);
});
//签到天数
getCheckInDays().then((res) => {
  //cont_count 连续签到天数
  //sum_count: 累计签到天数
  console.log(res);
});
check_in().then((res) => {
  //cont_count 连续签到天数
  //sum_count: 累计签到天数
  console.log(res);
});
sticky_luck().then((res) => {
  //dip_action 连续签到天数
  //has_dip: 是否沾了
  //total_value 幸运值
  //dip_value 粘的次数
  console.log(res);
});
// 沾喜气 都要 post



draw().then((res) => {
  console.log(res);
  /**
   * {
  id: 19,
  lottery_id: '6981716980386496552',
  lottery_name: '98矿石',
  lottery_type: 1,
  lottery_image: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32ed6a7619934144882d841761b63d3c~tplv-k3u1fbpfcp-no-mark:0:0:0:0.image',        
  lottery_desc: '',
  lottery_cost: 0,
  lottery_reality: 2,
  recycle_point: 0,
  donate_point: 0,
  draw_lucky_value: 10,
  total_lucky_value: 416,
  history_id: '7221510446279786531'
}
   */
});

