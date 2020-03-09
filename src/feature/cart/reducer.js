const cartReducer = (state=[], action)=>{
    switch(action.type){
        case 'ADD':
            //Dump the items in the new array
            return [...state, action.payload]

        case 'REMOVE':
            const firstMatchIndex = state.indexOf(action.payload)
            return state.filter((item, index)=>index !== firstMatchIndex)
        default:
            return state
    }
}

export default cartReducer;