import axios from '@/utils/myaxios.js'
export const getLeftMenus = (params) => {
  return axios({
    url: 'menus',
    params
  })
}
