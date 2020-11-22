export default {
    cartLength(state) {
        return state.cartList.length
    },
    allPrice(state) {
        return state.cartList.filter(item => {
            return item.checked
        }).reduce((prev, item) => {
            return prev + item.price * item.count
        }, 0)
    },
    checkedLength(state) {
        return state.cartList.filter(item => {
            return item.checked
        }).length
    }
}