import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function List() {
    let [tours, setTours] = useState([])
    let [tour, setTour] = useState()
    let [checkDelete, setCheckDelete] = useState(false)
    useEffect(() => {
        findAll()
    },[checkDelete])
    function findAll() {
        axios.get(" http://localhost:3000/tuors").then(res =>
        {
            setTours(res.data)
        })
    }

    function deleteTour(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:3000/tuors/" + id)
                .then(() => {
                        setCheckDelete(!checkDelete)
                        alert("Delete successfully!")
                    }
                )
        }
    }
    return (
        <div className={'container'}>
            <table className={'table table-hover'}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th colSpan={2} style={{width: '20%', textAlign: "center"}}>Action</th>
                </tr>
                </thead>
                <tbody>
                {tours.map((t, count = 1) => {
                    return (
                        <>
                            <tr>
                                <td>{++count}</td>
                                <td><Link style={{textDecoration: "none", color:"black"}} to={"/detail/" + t.id}>{t.title}</Link></td>
                                <td>{t.price}</td>
                                <td>
                                    <Link className={'btn btn-warning update'} to={"/update/" + t.id}>Update</Link>
                                </td>
                                <td>
                                    <button className={'btn btn-danger update'} onClick={() => {
                                        deleteTour(t.id)
                                    }}>Delete
                                    </button>
                                </td>
                            </tr>
                        </>
                    )
                })}
                <tr></tr>
                </tbody>
            </table>
            <Link className={'btn btn-info update'} to={'/create'}>Create</Link>

        </div>
    )
}