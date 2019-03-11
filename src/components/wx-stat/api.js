import {promisify} from './utils';
const request = promisify(wx.request);
const baseURL = 'https://s.adx.newoer.com/';
function getAdxInfo(params){
  return request({
    url: baseURL + 'xcx',
    method: 'POST',
    data: params
  });
}

function sendStatInfo(url){
  return request({
    url: url
  });
}

export {
  getAdxInfo,
  sendStatInfo
}
