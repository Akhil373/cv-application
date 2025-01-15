import {useState} from 'react'
import "../styles/WorkInfo.css"

export default function WorkInfo({initialData, onSubmit}) {
    const [formData, setFormData] = useState(initialData || {
        company: "",
        date: "",
        experience: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit} id={"userinfo-form-container"}>
            <p id={"details-title"}>Input your details below</p>

            <div id={"workinfo-container"}>
                <label className={"userinfo-label"} htmlFor={"company-input"}>Company Name</label>
                <input
                    type={"text"}
                    id={"company-input"}
                    className={"userinfo-input"}
                    name={"company"}
                    placeholder={"Google LLC"}
                    onChange={handleChange}
                    required={true}
                />

                <label className={"userinfo-label"} htmlFor={"date-input"}>Date of work</label>
                <input
                    type="number"
                    className={"userinfo-input"}
                    name={"date"}
                    id={"studyDate"}
                    min="1900"
                    max="2099"
                    step="1"
                    placeholder="2027"
                    value={formData.studyDate}
                    onChange={handleChange}
                    required={true}
                />

                <label className={"userinfo-label"} htmlFor={"experience-input"}>Position Title and experience</label>
                <textarea
                    id={"experience-input"}
                    className={"userinfo-input"}
                    name={"experience"}
                    onChange={handleChange}
                    required={true}
                />
            </div>
            <button type="submit" className={"info-button"}>Generate CV</button>
        </form>
    );
}