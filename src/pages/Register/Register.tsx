import { useState } from "react";
import axios from "axios";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");


    async function save(event: { preventDefault: () => void; }) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8080/auth/register", {
                name: name,
                email: email,
                phone: phone,
                password: password,
            });
            alert("Usuário registrado com sucesso!");

        } catch (err) {
            alert(err);
        }
    }

    return (
        <div>
            <div className="container mt-4" >
                <div className="card">
                    <h1>Faça uma conta!</h1>

                    <form>
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter Name"

                                value={name}
                                onChange={(event) => {
                                    setName(event.target.value);
                                }}
                            />

                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Email"

                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}

                            />

                        </div>

                        <div className="form-group">
                            <label>Celular</label>
                            <input type="number" className="form-control" id="phone" placeholder="Enter Phone"

                                value={phone}
                                onChange={(event) => {
                                    setPhone(event.target.value);
                                }}

                            />

                        </div>

                        <div className="form-group">
                            <label>Senha</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password"

                                value={password}
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}

                            />
                        </div>

                        <button type="submit" className="btn btn-primary mt-4" onClick={save} >Save</button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;