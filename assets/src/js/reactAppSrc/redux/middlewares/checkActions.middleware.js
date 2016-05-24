export default store => next => action => {
    try{
        action.type.toString();
    } catch (e){
        console.error('Mssing "type" property in an action', e.stack);
        throw new Error('Missing "type" property in an action', e.stack);
    }
    next(action);
}