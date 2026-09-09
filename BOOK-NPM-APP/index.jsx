import ReactDOM from "react-dom"
function Book(){
    return(
        <div>
            <img src="" height="200px" width="200px"/>
            <h2>Title:ReactJS</h2>
            <h2>Price: ₹465</h2>
            <button>AddToCart</button>
        </div>
    )
}
function App(){
    return(
        <div>
            <Book/>
        </div>
    )
}
const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);
root.render(<App/>);