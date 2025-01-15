import {useState} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CVForm from "./components/CVForm.jsx";
import Markdown from 'react-markdown'
import {generateCV} from "./AI.js"

const App = () => {
    const [cvData, setCvData] = useState({
        personal: null,
        work: null,
    });
    const [generatedCV, setGeneratedCV] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFormCompletion = async (formData) => {
        setCvData(formData);
        console.log(formData);
        setIsLoading(true);

        try {
            const response = await generateCV(formData);
            if (response.success) {
                setGeneratedCV(response.data);
            } else {
                setError(response.error);
            }
        } catch (err) {
            setError(`Failed to generate CV. Error message: ${err}`);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/*"} element={
                        <CVForm onComplete={handleFormCompletion} initialValues={cvData}/>
                    }/>
                    <Route
                        path={"/final"}
                        element={
                            <>
                                {isLoading && <div id={"loading"}>Generating your CV...</div>}
                                {error && <div className="error">Error: {error}</div>}
                                {generatedCV && (
                                    <div className="finalCV-container">
                                        <div id={"final-header"}>
                                            <h2 id={"final-title"}>Your Generated CV</h2>
                                            <button id={"return-button"}
                                                    onClick={() => window.location.href = "/"}>Return
                                            </button>
                                        </div>
                                        <div id={"final-data"}><Markdown>{generatedCV}</Markdown></div>
                                    </div>
                                )}
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
