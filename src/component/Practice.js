// import React, { createRef } from 'react'

// class Practice extends React.PureComponent{
// constructor(){
//   super();
//   this.state={
//     count:0
//   };
//   this.inputRef=createRef()
// }
// componentDidMount(){
//   console.log(this.inputRef);
//   this.inputRef.current.style.color="red"

// }
// render(){
//   console.log("I am rendering");
//   return (
//   <>
//     <h1 ref={this.inputRef}>Practice</h1>
//     <button onClick={()=>this.setState({count:1})}>Click</button>
//     </>
//   )
// }
// }

// export default Practice


// import React, { useEffect, useMemo, useRef, useState } from 'react'

// const Practice = () => {
//   const [data,setData]=useState(0)
//   const [newData,setNewData]=useState(0)
//   let domChange = useRef(null)
//   const memory =useMemo(function rendering(){
//     console.log("I am Rendering")
//   },[data])
//   useEffect(()=>{
//     console.log("Hi");
//     if(data === 1){
//       domChange.current.style.color = "red"
//     }
//   },[data])
//   return (
//     <>
//     {memory}
//     <h1 ref={domChange}>{data}</h1>
//     <h1>{newData}</h1>
//     <button onClick={()=>setData(data+1)}>Click1</button>
//     <button onClick={()=>setNewData(newData+1)}>Click2</button>
//     </>
//   )
// }

// export default Practice