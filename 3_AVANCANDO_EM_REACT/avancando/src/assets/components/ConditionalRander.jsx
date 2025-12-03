import { useState } from "react"

const ConditionalRander = () => {
    const [x] = useState(true);

    const [name, setName] = useState("Matheus")
  return (
    <div>
        <h1>Isso sera exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso</p>}
        <h1>If ternário</h1>
        {name === "João" ? (
            <div>
                <p>O nome é João</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado!</p>
            </div>
        )}
        <button onClick={() => setName("João")}>Cliquie aqui!</button>
    </div>
  )
}

export default ConditionalRander