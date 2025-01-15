import {useState} from 'react'
import "../styles/PersonalInfo.css"

export default function PersonalInfo({ initialData, onSubmit }) {
    const [formData, setFormData] = useState(initialData || {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        university: '',
        studyTitle: '',
        studyDate: ''
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

            <div className={"userInfo-inner-container"}>
                <label className={"userinfo-label"} htmlFor={"firstName-input"}>First Name</label>
                <input
                    type={"text"}
                    id={"firstName-input"}
                    className={"userinfo-input"}
                    name={"firstName"}
                    placeholder={"John"}
                    value={formData.firstName}
                    onChange={handleChange}
                    required={true}
                />

                <label className={"userinfo-label"} htmlFor={"lastName-input"}>Last Name</label>
                <input
                    type={"text"}
                    id={"lastName-input"}
                    className={"userinfo-input"}
                    name={"lastName"}
                    placeholder={"Doe"}
                    value={formData.lastName}
                    onChange={handleChange}
                    required={true}
                />

                <label className={"userinfo-label"} htmlFor="email-input">Email</label>
                <input
                    type="email"
                    id={"email-input"}
                    className={"userinfo-input"}
                    name={"email"}
                    placeholder={"johnDoe@proton.me"}
                    value={formData.email}
                    onChange={handleChange}
                    required={true}
                />

                <label className={"userinfo-label"} htmlFor={"phone-input"}>Ph. Number</label>
                <input
                    type={"tel"}
                    id={"phone-input"}
                    className={"userinfo-input"}
                    name={"phone"}
                    placeholder={"+91 9xxxx 8xxxx"}
                    value={formData.phone}
                    onChange={handleChange}
                    required={true}
                />

                <label className={"userinfo-label"} htmlFor={"university-input"}>University</label>
                <input
                    type={"text"}
                    id={"university-input"}
                    className={"userinfo-input"}
                    name={"university"}
                    placeholder={"XYZ University"}
                    value={formData.university}
                    onChange={handleChange}
                    required={true}
                />

                <label className={"userinfo-label"} htmlFor={"studyTitle-input"}>Title Of Study</label>
                <input
                    type={"text"}
                    id={"studyTitle-input"}
                    className={"userinfo-input"}
                    name={"studyTitle"}
                    placeholder={"Computer Science Engineering"}
                    value={formData.studyTitle}
                    onChange={handleChange}
                    required={true}
                />

                <label className={"userinfo-label"} htmlFor={"studyDate-input"}>Graduation Year</label>
                <input
                    type="number"
                    className={"userinfo-input"}
                    name={"studyDate"}
                    id={"studyDate"}
                    min="1900"
                    max="2099"
                    step="1"
                    placeholder="2027"
                    value={formData.studyDate}
                    onChange={handleChange}
                    required={true}
                />
            </div>
            <button type="submit" className={"info-button"}>Next</button>
        </form>
    );
}