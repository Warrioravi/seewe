let templateCreator=(code)=>{
    return{
        type:"SET_TEMPLATE",
        payload:code,
    }
}
export default templateCreator;