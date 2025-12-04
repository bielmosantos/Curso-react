import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // 6 - controlled inputs
    // 3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");

    const handleName = (e) => {
        setName(e.target.value)
    }

    console.log(name)
    console.log(email)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando o formulário")
        console.log(name, email)
    }

  return (
    <div>
        {/* 5 - Envio de form */}

        {/* 1 - Criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder='Digite seu nome' onChange={handleName}/>
            </div>
            {/* 2 - label envolvendo input */}
            <label>
                <span>E-mail:</span>
                {/* 4 - simplificação de manipulação de state */}
                <input type="email" name="email" placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)} />
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm