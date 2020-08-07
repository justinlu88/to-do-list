
// import './App.css';
// import React from 'react';
// import { useState } from "react"

// const App = () => {
//     const [tasks, setTasks] = useState(["Hello", "task2", "task3"])
//     const [userInput, setUserInput] = useState("")

//     const changeHandler = (changeEvent) => {
//         setUserInput(changeEvent.target.value)
//         return <div>
//             {tasks.map((e) => {
//                 console.log(e)
//                 return <h1>{e}</h1>
//                     <input onChange={changeHandler}>

//                     </input>
//             })}

//         </div>
//     }
// }
// export default App





// 1 Have an inputBox
// 2 Save value of the inputBox
// 3 Display value of the inputBox

// const App = () => {
//     const [userInput, setUserInput] = useState("")

//     const changeHandler = (event) => {
//         setUserInput(event.target.value)
//     }

//     return <div>
//         <h1>{userInput}</h1>
//         <input onChange={changeHandler} />
//     </div>
// }

// export default App


// Number of Clicks goes up by 1
// 1. Have button to click
// 2. have a numberOfClicks variable (React), which is 0 at first
// 3. Show the current Value of numberOfClicks on the screen.
// 4. Make onClick to increase numberOfClicks by 1.

// const App = () => {
//   const [numberOfClicks, setNumberOfClicks] = useState(0)

//   return <div>
//     <h1>{numberOfClicks}</h1>
//     <button onClick={() => { setNumberOfClicks(numberOfClicks + 1) }}>Click Me</button>
//   </div>
// }

// export default App

// import React from "react"

// const App = () => {
//     let numberOfClicks = 0
//     return <div>
//         <h1>
//             {"clicked", numberOfClicks}
//         </h1>
//         <button onClick={() => {
//             numberOfClicks = numberOfClicks + 3
//             console.log(numberOfClicks)
//         }}>
//             click here to add 3
//         </button>
//     </div>
// }
// export default App
//1 min 40

// Exercise 1
// 2 mins

// const App = () => {
//     let numberOfClicks = 5

//     return <div className="App">
//         <h1>{'Clicked ' + numberOfClicks}</h1>
//         <button onClick={() => {
//             numberOfClicks = numberOfClicks + 2
//             console.log("Clicked value", numberOfClicks)
//         }} >Click me</button>
//     </div>
// }
// export default App

// import React from "react"
// import { useState } from "react"

// const App = () => {
//     const [numberOfClicks, setNumberOfClicks] = useState(0)
//     return <div>
//         <h1>
//             {numberOfClicks}
//         </h1>
//         <button onClick={() => {
//             setNumberOfClicks(numberOfClicks + 1)
//         }}>
//             click
//         </button>
//     </div>

// }


// export default App
// 1min 20 












// // Exercise 2
// // 2 mins

// const App = () => {
//     const [numberOfClicks, setNumberOfClicks] = useState(0)

//     return <div className="App">
//         <h1>{'Clicked ' + numberOfClicks}</h1>
//         <button onClick={() => {
//             setNumberOfClicks(numberOfClicks + 2)
//         }} >Click me</button>
//     </div>
// }
// export default App

import React from "react"
// // Exercise 3
// 3 mins
// 
const App = () => {
    let color = "green"

    const headerStyle = { color: color }

    const colorChange = () => {
        color = 'red'
        console.log("Color is now   ", color)
    }

    return <div>
        <h1 style={headerStyle}>Hello</h1>
        <button onClick={colorChange}>Change</button>
    </div>
}
export default App



// Exercise 4
// 2 mins
// 
// const App = () => {
//   const [headerColor, setHeaderColor] = useState('green')

//   const headerStyle = { color: headerColor }
//   const changeColor = () => {
//     setHeaderColor('red')
//   }

//   return <div>
//     <h1 style={headerStyle}>Hello</h1>
//     <button onClick={changeColor}>Change Color</button>
//   </div>
// }
// export default App


// Exercise 5
// 2 mins
// 
// const App = () => {
//   const [userInput, setUserInput] = useState("")

//   const changeHandler = (changeEvent) => {
//     setUserInput(changeEvent.target.value)
//   }

//   return <div>
//     <h1>Typed: {userInput}</h1>
//     <input onChange={changeHandler}/>
//   </div>
// }
// export default App



// Exercise 6
// 4 mins

// const App = () => {
//   const [story, setStory] = useState("")
//   const [userInput, setUserInput] = useState("")

//   const changeHandler = (event) => {
//     setUserInput(event.target.value)
//   }

//   const addUserInputToStory = () => {
//     setStory(story + userInput)
//     setUserInput("")
//   }

//   return <div>
//     <h1>My story</h1>
//     <div>{story}</div>
//     <input onChange={changeHandler} value={userInput}/>
//     <button onClick={addUserInputToStory}>Add text</button>
//     <button onClick={() => {setStory("")}}>Clear All</button>
//   </div>
// }

// export default App



// Exercse 7
// 2 mins
// 
// const App = () => {
//   const [myDisplayNumber, setMyDisplayNumber] = useState("")

//   return <div>
//     <h1>{myDisplayNumber}</h1>
//     <button onClick={() => {setMyDisplayNumber(myDisplayNumber + "1")}}>1</button>
//   </div>
// }
// export default App




// Exercise 8 Array.map
// Goal:  Display a list of sentences / string
// 1. Display one at a time
// 2. display all by using .map

// MAP IS USED TO DISPLAY / RENDER LIST
// const App = () => {
//   const list = ["My name is Joe.", "I like maths.", "I like games more.", "I don't like homework.", "I like cycling."]
//   return <div style={{marginLeft: "20px"}}>
//     {list.map((listItem, index) => {
//       // console.log(listItem, index)
//       return <h2 key={index} >{listItem}</h2>  
//     })}
//   </div>
// }

// export default App



// const mapCallbackFunction = (number) => { return number + 2 }
// const array1 = [2,3,4]
// const result1 = array1.map(mapCallbackFunction)
// // console.log("array1", array1)
// // console.log("result1", result1)

// // 1. iterates through each element of the array, 
// // 2. invokes the callBack function passing each element to the function, 
// // 3. Collects returns values of each of these callBack invocations in a new array, and return the new array.
// const myArrayMapFunction = (array, callBackFunction) => {
//   const resultArray = []
//   for (let i=0; i < array.length; i++) {
//     const element = array[i]
//     const callbackResult = callBackFunction(element)
//     console.log(element, callbackResult)
//     resultArray.push(callbackResult)
//   }
//   return resultArray
// }

// const newResult = myArrayMapFunction(array1, (number) => { return number + 2 })
// console.log(newResult)





// const array2 = ["a", "b", "c"]
// const result2 = array2.map((element) => { return element + element })
// // => ["aa", "bb", "cc"]  (correct!)

// const array3 = ["abc", "bd", "c"]
// const result3 = array3.map((element) => { return element.length })
// // => [3, 2, 1]

// const array4 = ["abc", "bd", "c"]
// const result4 = array4.map((element) => { return <div>{element}</div> })
// // => [<div>abc</div>, <div>bd</div>, <div>c</div>]

// const array5 = ["abc", "bd", "c"]
// const result5 = array5.map((element) => { return <div>element</div> })
// // => [<div>element</div>, <div>element</div>, <div>element</div>]

// const App = () => {
//     const [userInput, setUserInput] = useState("")

//     const changeInput = (event) => {
//         setUserInput(event.target.value)
//     }
//     return <div>
//         <h1>
//             {userInput}
//         </h1>
//         <input></input>
//     </div>
// }
// export default App


// const App = () => {
//     const [userInput, setUserInput] = useState("")

//     const changeInput = (event) => {
//         setUserInput(event.target.value)
//     }
//     return <div>
//         <h1>{userInput}</h1>
//         <input onChange={changeInput}>
//         </input>
//     </div>


// }

// export default App

// const App = () => {
//     const [userNumber, setUserNumber] = useState(0)

//     const addOne = () => {
//         setUserNumber(userNumber + 1)
//     }
//     return <div>
//         {userNumber}
//         <button onClick={addOne}>
//             add one
//     </button>
//     </div>


// }

// export default App

// const App = () => {

//     const [myNumber, setMyNumber] = useState(0)

//     const addOne = () => {
//         setMyNumber(myNumber + 1)
//     }
//     return <div className="App">
//         <button onClick={addOne}>
//             {myNumber}
//         </button>
//     </div>

// }


// export default App