const initState ={
    projects:[
        {id: '1', title:'decryption', content:'encrypted'}
    ]
}

const projectReducer = (state=initState, action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created a dummy', action.project);
            return state;
        case 'CREATE_P_ERROR':
            console.log('error on create', action.err)
            return state
        default:
            return state
    }
}

export default projectReducer