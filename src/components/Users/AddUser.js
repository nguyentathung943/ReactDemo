
import Card from "../UI/Card"
import style from "./AddUser.module.css"
const AddUser = props => {
    const submitForm = (event) => {
        event.preventDefault()
        console.log("whore")
    }
    return (
        <Card className={style.input}>
            <form onSubmit={submitForm}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username"></input>
                <label htmlFor="age">Age (Years)</label>
                <input type="number" id="age"></input>
                <button type="submit">ADD</button>
            </form>
        </Card>)
}

export default AddUser;