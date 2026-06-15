import { useState } from "react";
import Card from "./Card";

export default function Form(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submittedData, setSubmittedDate] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmittedDate({
            name,
            email,
        })
        setName("");
        setEmail("");
    }

    if (submittedData) {
      return <Card data={submittedData} />;
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
               <div>
                <label htmlFor="userName">Inserisci il tuo nome</label>
                <input
                 type="text" 
                 id="userName"
                 value={name}
                 onChange={(e)=> setName(e.target.value)}
                  />
               </div>

                <div>
                <label htmlFor="userEmail">Inserisci la tua email</label>
                <input 
                 type="email" 
                 id="userEmail" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 />  
                </div>
                <button type="submit">Invia</button>
            </form>
        </>
    )
}