const dayjs = require('dayjs')

const quarterOfYear = require('dayjs/plugin/quarterOfYear');
const relativeTime = require('dayjs/plugin/relativeTime');
require('dayjs/locale/zh-cn');

dayjs.locale('zh-cn');         //使用中国本地化语言
dayjs.extend(relativeTime);     //为Day.js引入用于相对时间计算的扩展插件
dayjs.extend(quarterOfYear);    //为Day.js引入用于季度计算的扩展插件

let day = dayjs()
    .endOf('quarter')
    .startOf('week')
    .add(5, 'week')
    .add(1, 'day')
    .add(10, 'hours');

let duration = day.fromNow();

console.log(day, duration);

console.log(duration);