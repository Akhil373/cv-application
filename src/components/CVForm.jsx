import {BrowserRouter, Routes, Route, useNavigate, data} from "react-router-dom";
import PersonalInfo from "./PersonalInfo.jsx";
import WorkInfo from "../components/WorkInfo";
import "../styles/CVForm.css";
import {useState} from "react";

export default function CVForm({ onComplete, initialValues }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialValues)

    const updateFormData = (type, data) => {
        setFormData(prev => ({
            ...prev,
            [type]: data,
        }));
    }

    const handlePersonalSubmit = (data) => {
        updateFormData('personal', data);
        navigate("/work");
    }

    const handleWorkSubmit = (data) => {
        const finalData = {
            ...formData,
            work: data
        }
        onComplete(finalData);
        navigate("/final");
    };

    return (
        <div className="cv-form-container">
            <div id={"cv-form-title-container"}><h1 id={"cv-form-title"}>Build Your CV in Seconds</h1></div>

            <Routes>
                <Route path="/" element={
                    <PersonalInfo
                        initialData={formData.personal}
                        onSubmit={handlePersonalSubmit}
                    />
                }/>

                <Route path="/work" element={
                    <WorkInfo
                        initialData={formData.work}
                        onSubmit={handleWorkSubmit}
                    />
                }/>
            </Routes>
        </div>
    )
}