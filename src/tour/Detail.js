import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function Detail() {
    let navigate = useNavigate();
    let {id} = useParams()
    let [tour, setTour] = useState({})
    useEffect(() => {
        axios.get("http://localhost:3000/tuors/" + id).then((res) => {
            setTour(res.data)
        })
    }, [])


    return (
        <>
            <div className={'container'} style={{width: '600px'}}>
                <h1 style={{textAlign: "center"}}>Detail</h1>
               <p>Name: {tour.title}</p>
               <p>Price: {tour.price}</p>
               <p>Description: {tour.description}</p>
                <Link className={'btn btn-secondary'} to={'/'}>Back to home</Link>
            </div>


        </>
    )

}