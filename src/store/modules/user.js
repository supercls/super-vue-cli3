import { login, logout } from '@/api/login'
import { getToken, setToken, removeToken, getMobile, setMobile, removeMobile,getDstoken,setDstoken,removeDstoken,setPatientInTab,getPatientInTab } from '@/utils/auth'
const user = { //定义仓库数据，状态等
    state: {
        token: 'PMZrj63slI/2jN+QY2Mob71fkS8Q2djxzhdXLgfkQA6E79/oltiyZwNgd5BAomb/',
        mobile: '18356097769',
        userid:'45340',
        isBack:false,
        isload:[false,false,false,false,false,false],
        routeBefore:'',
        PatientInTab:getPatientInTab()
    },
    mutations: {
        SET_TOKEN: (state, token) => { //处理后的数据放入数据库中
            state.token = token
            setToken(token)
        },
        SET_MOBILE: (state, mobile) => {
            state.mobile = mobile
            setMobile(mobile)
        },
        SET_USERID: (state, userid) => {
            state.userid = userid
            setDstoken(userid)
        },
        SET_ISLOAD: (state,isload) => {
            state.isload=isload
        },
        SET_ROUTEBEFORE: (state,routeBefore) => {
            state.routeBefore=routeBefore
        },
        SET_PATIENTINTAB: (state,PatientInTab) => {
            state.PatientInTab=PatientInTab
            setPatientInTab(PatientInTab)
        }
    },

    actions: {
        // 登录
        Login({ commit }, userInfo) { //userinfo  传递的参数    //处理后的数据放入数据库中 Action 提交的是 mutation，而不是直接变更状态。不同于mutations使用commit方法，actions使用dispatch方法。
            const username = userInfo.username.trim()
            return new Promise((resolve, reject) => {
                login(username, userInfo.password).then(response => {
                    const data = response
                    setToken(data.token)
                    commit('SET_TOKEN', data.token)
                    resolve() //完成
                }).catch(error => {
                    reject(error) //否决
                })
            })
        },
    }
}

export default user