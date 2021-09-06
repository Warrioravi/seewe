let detailCreator=(payload)=>{
  return {
      type:"SET_DETAILS",
      payload:payload, 
  }
}
export default detailCreator;