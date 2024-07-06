import {createStore} from "vuex"
import {mainModule} from "@/store/mainModule"
import {productModule} from "@/store/productModule"
export default createStore({

    modules: {
        mainModule: mainModule,
        product: productModule,
    },

})