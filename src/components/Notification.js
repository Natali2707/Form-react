const Notification = (props) => {
    const {name, surname, password, email} = props;
    return(
        <>
        <p>Уважаемый, {name}, проверьте правильность введенных данных:</p>
        <p>Фамилия: {surname}</p>
        <p>Пароль: {password}</p>
        <p>Email: {email}</p>
        </>
    )
}

export default Notification;