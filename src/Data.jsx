import './data.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone,
    faSquarePhone,
    faMobileScreenButton,
    faEnvelope,
    faGlobe,
    faLocationDot
} from '@fortawesome/free-solid-svg-icons';

function Data({ company_name, company_slogan, name, job_position, phone_1, phone_2, phone_3, email, website, address, image }) {
    return (
        <>
            <h3 className="preview-heading">Preview</h3>
            <div className="design">
                <div className="top-bars">
                    <div className="first"></div>
                    <div className="second"></div>
                    <div className="third"></div>
                </div>

                <div className="id_card">
                    <p id="cname">{company_name || "Company Name"}</p>
                    <p id="slogan">{company_slogan || "Company Slogan"}</p>

                    <div className="image">
                        {image && <img src={image} alt="Uploaded" className="preview-img" />}
                    </div>

                    <p id="uname">{name || "Name"}</p>
                    <p id="job">{job_position || "Job Position"}</p>

                    <div className="other">
                        {phone_1 && <div><FontAwesomeIcon icon={faPhone} /> {phone_1}</div>}
                        {phone_2 && <div><FontAwesomeIcon icon={faSquarePhone} /> {phone_2}</div>}
                        {phone_3 && <div><FontAwesomeIcon icon={faMobileScreenButton} /> {phone_3}</div>}
                        {email && <div><FontAwesomeIcon icon={faEnvelope} /> {email}</div>}
                        {website && <div><FontAwesomeIcon icon={faGlobe} /> {website}</div>}
                        {address && <div><FontAwesomeIcon icon={faLocationDot} /> {address}</div>}
                    </div>
                </div>

                <div className="footer">
                    <div className="third"></div>
                    <div className="first"></div>
                    <div className="second"></div>
                </div>
            </div>
        </>
    );
}

export default Data;
