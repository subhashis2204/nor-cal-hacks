import { useState } from "react";
import { useContext } from "react"
import ImageContext from "../context/ImageContext.jsx"
import axios from "axios"
import { Auth0Context } from "@auth0/auth0-react";

function ImageComponent() {
    const { images, setImages, setQuestions, setProcessing } = useContext(ImageContext);
    const handleFormSubmit = async (e) => {
        e.preventDefault()

        if (!isAuthenticated) return alert("Please Login to continue")
        if (images.length === 0) return alert("Please select some images")

        setProcessing(true)
        setQuestions([])
        const formData = new FormData();
        images.forEach((image) => {
            formData.append('files', image);
        });

        const response = await axios.post('http://127.0.0.1:5000/images', formData)
        const { content } = response.data
        const questions = content.map((item, index) => {
            return {
                id: index,
                question: item.question,
                answer: item.answer,
            }
        })
        setQuestions(questions)
        setProcessing(false)
    }

    const { user, isAuthenticated } = useContext(Auth0Context);
    return <>
        <form action="" onSubmit={handleFormSubmit} className="py-2">
            <label htmlFor="image" className="mr-2">Upload Your Image Files</label>
            <input type="file" id="image" onChange={(e) => setImages([...e.target.files])} accept="image/png, image/jpeg" multiple />
            <button className="bg-green-700 text-white px-3 py-2 text-sm rounded-md">Submit</button>
        </form>
    </>;
}

export default ImageComponent;
