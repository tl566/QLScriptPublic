/**
 * cron 10 10 * * *
 * Show:得物农场0.0.3版本 暂时只有浇水 签到 领取气泡和木桶水滴得功能 
 * 修复了验证码 自动过滑块
 * 变量名:dewu
 * 变量值:抓app.dewu.com/hacking-tree/v1  请求头Headers中的x-x-auth-token  去掉Bearer  去掉Bearer  去掉Bearer
 * 多账号& 或换行 或新建同名变量
 * scriptVersionNow = "0.0.3";
 * new Env("得物")
 * 把UA换成自己的UA  把UA换成自己的UA   把UA换成自己的UA   否则会触发风控
 * 依赖 crypto-js & jsencrypt 版本最新即可
 * UA变量名 dewuUA  必须填自己的 否则会风控 请求头Headers中的User-Agent
 * SK变量名 dewuSK  任意账号的即可 必填
 * helpCode 分享链接中的几个表情 例如 😻💥💬😻🌹🌼😿
 * 首账号助力作者，后面得账号助力heloCode
 */

let UA = process.env["dewuUA"] ? process.env["dewuUA"] : "Mozilla/5.0 (iPhone; CPU iPhone OS 17_4_0 like Mac OS X) AppleWebKit/604.5.15 (KHTML, like Gecko) Mobile/15E148/duapp/5.39.0"
let helpCode = process.env["dewuHelpCode"] ? process.env["dewuHelpCode"] : ""
let SK = process.env["dewuSK"] ? process.env["dewuSK"] : "😻💥💬😻🌹🌼😿"
  