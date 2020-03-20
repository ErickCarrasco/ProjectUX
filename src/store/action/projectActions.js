export const createProject = (project) =>{
    return (dispatch, getState, { getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        //Reference to firebase datastore
        firestore.collection('products').add({
            ...project,
            authorName: 'Not Found',
            authorID: 404,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT',project});
        }).catch((err)=>{
            dispatch({type: 'CREATE_P_ERROR',err})
        })
        
    }
};