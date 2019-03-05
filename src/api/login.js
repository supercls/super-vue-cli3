import service from '@/utils/fetch.js'
export function login(mobileTel, pwd) { //fetch  promise用法
    return service({
        url: 'api/User/LoginIn',
        method: 'post',
        data: {
            mobileTel: mobileTel,
            pwd: pwd
        }
    })
}


/**
 * 上传图片接口
 * @param {String} imageData 图片文件
 * @param {String} suffix 文件后缀
 */
export function uploadJoinMeImage(imageData, suffix) {
    return service({
        url: 'api/User/UploadJoinMeImage',
        method: 'post',
        data: {
            "imageData": imageData,
            "suffix": suffix
        }
    })
}