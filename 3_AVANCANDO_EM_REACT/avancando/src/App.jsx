
import { Fragment, useState } from 'react'
import './App.css'
import City from './assets/city.jpg'
import ConditionalRander from './assets/components/ConditionalRander'
import ListRender from './assets/components/ListRender'
import ManageData from './assets/components/ManageData'
import ShowUserName from './assets/components/ShowUserName'
import CarDetails from './assets/components/CarDetails'
import Fragments from './assets/components/Fragments'
import Container from './assets/components/Container'
import ExeculteFunction from './assets/components/ExeculteFunction'
import Message from './assets/components/Message'
import ChangeMessageState from './assets/components/ChangeMessageState'
import UserDetails from './assets/components/UserDetails'

function App() {

  //const name = "Joaquim";
  const [userName] = useState("Maria");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Kia", color: "Branco", newCar: false, km: 10000},
    {id: 3, brand: "Bmw", color: "Azul", newCar: true, km: 0},
  ];

  function showMessege() {
    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const users = [
    {id: 1, name: "Matheus", job: "Programador", age: 31},
    {id: 2, name: "Maria", job: "Advogada", age: 40},
    {id: 3, name: "Josias", job: "Repórter", age: 66},
    {id: 4, name: "Miguel", job: "Estudante", age: 16},
  ]

  return (
    <>
      <div className='App'>
        <h1>Teste</h1>
        <div>
          <img src="/img1.jpg" alt="Paisagem" />
        </div>
        <div>
          <img src={City} alt="Cidade" />
        </div>
        <ManageData/>
        <ListRender/>
        <ConditionalRander/>
        <ShowUserName name={userName} />
        {/* destructuring */}
        <CarDetails brand="VW" km={100000} color="Azul" />
        {/* loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
          />
        ))}
        {/* fragmant */}
        <Fragments propFragment="Teste"/>
        {/* children */}
        <Container myValue="testing">
          <p>E este é o conteúdo</p>
        </Container>
        {/* execultar função */}
        <ExeculteFunction myFunction={showMessege} />
        {/* state lift */}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>
        {/* desafio */}
        {users.map((user) => (
          <UserDetails
          key={user.id}
          name={user.name}
          job={user.job}
          age={user.age}
          />
        ))}
      </div>
    </>
  )
}

export default App
