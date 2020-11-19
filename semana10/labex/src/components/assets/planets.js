function Planets (props) {
    return (
        <select required
        onChange={props.onChangeInput}
        value={props.planet}
         id="planet" 
         name="planet">
   <option value="Seleção">Selecione o planeta</option>         
   <option value="Mercúrio">Mercúrio</option>
   <option value="Vênus">Vênus</option>
   <option value="Marte">Marte</option>
   <option value="Júpiter">Júpiter</option>
   <option value="Saturno">Saturno</option>
   <option value="Urano">Urano</option>
   <option value="Netuno">Netuno</option>
   </select>)
}

export default Planets