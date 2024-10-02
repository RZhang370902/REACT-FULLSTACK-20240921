import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


function CreatePost() {
        const initialValues = {
            title: "",
            postText: "",
            username: ""
        };

        const validationSchema = Yup.object().shape({
            title: Yup.string().required("You must input a title"),
            postText: Yup.string().required("You must input a post"),
            username: Yup.string().min(3).max(30).required("You must input a username between 3 and 30 characters")
        });


        const onSubmit = (data) => {
            axios.post("http://localhost:3001/posts", data)
                .then((response) => {
                    console.log("It worked");
                }
                )
            }
        
    return (
    <div>Create Post
        <div className="createPostPage">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className="formContainer">
                    <label htmlFor="title">Title:</label>
                    <ErrorMessage name="title" component="span" />
                    <Field autocomplete="off" id="inputCreatePost" name="title" placeholder="Title" />
                    <label htmlFor="postText">Post:</label>
                    <ErrorMessage name="postText" component="span" />
                    <Field autocomplete="off" id="inputCreatePost" name="postText" placeholder="Post" />
                    <label htmlFor="title">Username:</label>
                    <ErrorMessage name="username" component="span" />
                    <Field autocomplete="off" id="inputCreatePost" name="username" placeholder="Username" />
                    <button type="submit">Create Post</button>
                </Form>
            </Formik>

        </div>

    </div>
    
);
}

export default CreatePost; 