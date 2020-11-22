import {
    request
} from './request'

export function getCategoryList() {
    return request({
        url: '/category'
    })
}

export function getCategoryGoods(maitKey) {
    return request({
        url: '/subcategory',
        params: {
            maitKey
        }
    })
}

export function getCategoryDetail(miniWallKey, type) {
    return request({
        url: '/subcategory/detail',
        params: {
            miniWallKey,
            type
        }
    })
}