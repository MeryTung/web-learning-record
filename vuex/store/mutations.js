import * as types from './mutations-type'
const mutations = {
    // [types.PUSH_PRODUCT_TOCART](state,product){
    //     state.items.push({
    //         id:product.id,
    //         title:product.title,
    //         quantity:1
    //     })
    // }, 
    // [types.INCREMENT_ITEM_QUANTITY](state,product){
    //     const cartItem = state.items.find(item=>item.id===product.id)
    //     cartItem.quantity++
    // }
    [types.ADD_COUNTER](state){
        return state.count+=1
    }

}



export default mutations