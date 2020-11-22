const FilterSellCount = (value) => {
    let num;
    if (value > 9999) { //大于9999显示x.xx万
        num = (Math.floor(value / 1000) / 10) + '万';
    } else if (value < 9999 && value > -9999) {
        num = value
    } else if (value < -9999) { //小于-9999显示-x.xx万
        num = -(Math.floor(Math.abs(value) / 1000) / 10) + '万'
    }
    return num;
}

const DateFormat = (time) => {
    const date = new Date(time * 1000)
    const nowDate = date.toLocaleDateString().split('/').join('-');
    const nowTime = date.toLocaleTimeString().split('/').join('-');
    return nowDate + nowTime
}

export default {
    FilterSellCount,
    DateFormat
}