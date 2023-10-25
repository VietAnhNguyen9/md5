import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function Create() {
    let navigate = useNavigate();
    function createTour(e) {
        axios.post("http://localhost:3000/tuors", e).then(() => {
            alert("Success!!")
            navigate('/')
        })
    }
    return (
        <>
            <div className={'container'} style={{width: '600px'}}>
                <h1 style={{textAlign: "center"}}>Create form</h1>
                <Formik initialValues={{
                    title:'',
                    price:''
                }}
                        onSubmit={(e) => {
                            createTour(e)
                        }}>
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
                            <button className={'btn btn-primary'} type={'submit'}>Create</button>
                            <Link className={'btn btn-secondary'} to={'/'}>Back to home</Link>
                        </div>

                    </Form>

                </Formik>
            </div>
        </>
    )
}