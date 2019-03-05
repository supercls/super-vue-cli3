const TokenKey = 'Admin-Token'
const Tokenuserid = 'user-Token'
const MobileTel = 'Mobile-Tel'
export function getMobile() {
    return settingstorage().mobile
}

export function setMobile(mobile) {
    var settings=settingstorage()
    settings.mobile=mobile
    settingstorage(settings)
}

export function removeMobile() {
    var settings=settingstorage()
    settings.mobile=''
    settingstorage(settings)
}

export function getToken() {
    return settingstorage().token
}

export function setToken(token) {
    var settings=settingstorage()
    settings.token=token
    settingstorage(settings)
}

export function setPatientInTab(PatientInTab) {
    var settings=settingstorage()
    settings.PatientInTab=PatientInTab
    settingstorage(settings)
}

export function getPatientInTab() {
    var str=settingstorage().PatientInTab;
    if(str==undefined){
        str=[true,true]
    }
    return str
}

export function removeToken() {
    localStorage.removeItem('h5_settings');
}

export function getDstoken() {
    return settingstorage().Tokenuserid
}


export function setDstoken(token) {
    var settings=settingstorage()
    settings.Tokenuserid=token
    settingstorage(settings)
}

export function settingstorage(settings){
    if(!!arguments.length) {
        settings = settings || {};
        localStorage.setItem('h5_settings', JSON.stringify(settings));
    } else {
        var settingsText = localStorage.getItem('h5_settings') || "{}";
        return JSON.parse(settingsText);
    }
}