import { createContext, useState } from "react";

const ImageContext = createContext();

function ImageProvider({ children }) {

    const [images, setImages] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [processing, setProcessing] = useState(false);

    return <>
        <ImageContext.Provider value={{ images, setImages, questions, setQuestions, processing, setProcessing }}>
            {children}
        </ImageContext.Provider>
    </>;
}

export default ImageContext;
export { ImageProvider };
