import React, { useState } from 'react'

const TodoList = () => {
    const [user, setUser] = useState({ name: "", id: '', showInput: false })
    const [data, setData] = useState([])
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setUser({ ...user, [name]: value })
    }
    const formSubmit = () => {
        if (user.name === "") {
            return
        }
        else {
            setData([...data, { ...user, id: new Date().getTime().toString() }])
        }
        setUser({ name: "", id: '', showInput: false })
    }
    const deleteItem = (id) => {
        let newfilter = data.filter((list) => {
            return list.id !== id
        })
        setData(newfilter)
    }


    const handleCheck = (e, id) => {
        const { checked } = e.target
        setData(
            data.map((user) => user.id == id ? (checked ? { name: user.name, id: user.id, showInput: true } : { name: user.name, id: user.id, showInput: false }) : user)
        )
    }
    let val;
    const handleUpdate = (e, id) => {
        const val = e.target.value
        setData(data.map((user) => user.id == id ? { ...user, name: val } : user))
    }
    const handleUpdateUser = (id, e) => {

    }
    return (
        <div className='todoList'>
            <div className='inputDiv'>
                <input type="text" name="name" onChange={handleChange} value={user.name} />
                <button onClick={formSubmit}>Save</button>
            </div>
            <div className='itemList'>
                <ul>
                    {data.map((item) =>
                    (
                        <li key={item.id}>
                            <input type="checkbox" onChange={(e) => handleCheck(e, item.id)} />
                            {item.showInput ? <> <input type="text" value={item.name} onChange={(e) => handleUpdate(e, item.id)} /> </> : <span>{item.name}</span>}
                            <button onClick={() => deleteItem(item.id)} className='removeBtn'>remove</button></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList