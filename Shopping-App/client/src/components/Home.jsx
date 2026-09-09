import Item from "./Item"
const Home = () => {
  const itemdata=[
    {image:"",title: "ReactJs",price: 567},
    {image:"",title: "NodeJs",price: 371},
    {image:"",title: "ExpresJs",price: 842},
    {image:"",title: "ReactJs",price: 567},
    {image:"",title: "NodeJs",price: 371},
    {image:"",title: "ExpresJs",price: 842},
  ]
  return (
    <div className="home">
    {
      itemdata.map((i,index)=>{
          return <Item key={index} props={i}/>
      })
    }   
    </div>
  )
}

export default Home
