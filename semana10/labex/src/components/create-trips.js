import React from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Header, LabeX, ReturnButton, HeaderLabel, CreateTrips, TextBox, FormButton } from "./styles"
import { useProtectedPage } from "./hooks/useProtectedPage"
import Planets from "./assets/planets"
import { useForm } from "../components/hooks/useForm"

function CreateTripsPage() {

    const { form, onChange } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

    const onChangeInput = (event) => {
        const { value, name } = event.target;
        onChange(value, name)
    }

    const history = useHistory()

    const goBackToAdminHome = () => {
        history.push("/homeadmin")
    }

    // const createTrip = () => {

    //     const token = localStorage.getItem('token')


    //     axios
    //         .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-dumont/trips"), {
    //             headers: { token }
    //         }
    //             .then((res) => {
    //                 console.log(res)
    //                 console.log(form)
    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //             })




    // }

    // const onSubmitCreate = (event) => {
    //     event.preventDefault()
    //     createTrip()
    // }



    useProtectedPage();
    return (

        <div>
            <Header>
                <LabeX>Labe-X</LabeX>
                <HeaderLabel>Desbrave o universo com a Labe-X</HeaderLabel>
                <ReturnButton onClick={goBackToAdminHome}>Voltar para Home do Administrador</ReturnButton>
            </Header>


            <CreateTrips>
                {/* <form onSubmit={onSubmitCreate}> */}
                    <h2>Cadastrar uma nova viagem</h2>
                    <label>Nome:</label>
                    <input
                        required
                        name="name"
                        type="text"
                        value={form.name}
                        pattern="{5,}"
                        onChange={onChangeInput} />

                    <label>Planeta:</label>
                    <Planets onChangeInput={onChangeInput} planet={form.planet} />

                    <label>Data da viagem:</label>
                    <input required
                        name="date"
                        type="number"
                        value={form.date}
                        onChange={onChangeInput} />

                    <label>Duração:</label>
                    <input
                        required
                        name="durationInDays"
                        type="number"
                        min="50"
                        value={form.durationInDays}
                        onChange={onChangeInput} />

                    <label>Descrição da viagem:</label>
                    <TextBox
                        required
                        name="description"
                        value={form.description}
                        pattern="{30,}"
                        onChange={onChangeInput} />

                    <FormButton type="submit">Cadastrar</FormButton>
                {/* </form> */}
            </CreateTrips>

        </div>
    )
}

export default CreateTripsPage