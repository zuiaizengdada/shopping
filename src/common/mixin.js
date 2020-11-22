import BackTop from 'components/content/backtop/backTop'
export const backTopMixin = {
    data() {
        return {
            isShow: null
        }
    },
    components: {
        BackTop
    },
    methods: {
        backtop() {
            this.$refs.scroll.scrollTo(0, 0)
        }
    }
}