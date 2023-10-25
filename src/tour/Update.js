import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function Update() {
    let navigate = useNavigate();
    let {id} = useParams()
    let [tour, setTour] = useState({})
    useEffect(() => {
        axios.get("http://localhost:3000/tuors/" + id).then((res) => {
            setTour(res.data)
        })
    }, [])

    function updateTour(tour) {
        axios.put("http://localhost:3000/tuors/"+ id,tour).then(() => {
            alert("Update Success")
            navigate('/')
        })
    }
    return (
        <>
            <div className={'container'} style={{width: '600px'}}>
                <h1 style={{textAlign: "center"}}>Update form</h1>
                <Formik initialValues={tour} onSubmit={(e) => {
                    updateTour(e)
                }} enableReinitialize={true}>
                    <Form>
                        <div className="mb-3">
                            <label htmlFor={'title'} className="form-label">Name</label>
                            <Field type={'text'} name={'title'} className={'form-control'} id="{'title'}"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor={'price'} className="form-label">Price</label>
                            <Field type={'number'} name={'price'} className={'form-control'} id="{'price'}"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor={'description'} className="form-label">Description</label>
                            <Field type={'text'} name={'description'} className={'form-control'} id="{'description'}"/>
                        </div>

                        <div style={{textAlign: "center"}}>
                            <button className={'btn btn-primary'} type={'submit'}>Update</button>
                            <Link className={'btn btn-secondary'} to={'/'}>Back to home</Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )

}