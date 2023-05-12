import useForm from "../useForm"

const Form = () => {
    const {username,password,handleInput,handlePassword} = useForm()

    return (
        <div>
            <input type="text" onChange={handleInput} value={username} name="username"/>
            <input type="password" onChange={handlePassword} value={password} name="password"/>
        </div>
         
    )
}
export default Form;