export default {
    addCart(state, payload) {
        const isHave = state.cartList.find(item => {
            return item.iid === payload.iid
        })
        if (isHave) {
            isHave.count++
        } else {
            payload.count = 1
            payload.checked = false
            state.cartList.push(payload)
        }
    },
    checkedAll(state) {
        for (let i = 0; i < state.cartList.length; i++) {
            if (state.cartList[i].checked) {
                state.cartList[i].checked = false
            } else {
                state.cartList[i].checked = true
            }

        }

    }
}