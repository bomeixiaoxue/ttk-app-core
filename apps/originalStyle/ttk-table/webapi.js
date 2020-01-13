/**
 * webapi.js 封装app所需的所有web请求
 * 供app测试使用，app加入网站后webpai应该由网站通过config,提供给每个app
 */

import { fetch } from 'edf-utils'
const mockproxy = '/v1/original-style'
export default {
    queryDate: (option) => fetch.post(`${mockproxy}/table/queryDate`, option),
    thead: (option) => fetch.post(`${mockproxy}/table/thead`, option),
    tableBody: (option) => fetch.post(`${mockproxy}/table/tableBody`, option),
    addRow: (option)=>fetch.post(`${mockproxy}/table/addRow`, option)
}