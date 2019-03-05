const getters = {
  token: state => state.user.token,
  mobile: state => state.user.mobile,
  userid: state => state.user.userid,
  PatientInTab: state => state.user.PatientInTab,
  isload: state => state.user.isload,
}

export default getters
