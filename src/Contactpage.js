// Author: Yan Nazzim Gonzalez
// Date: 3/10/2024
// Front End Capstone
import { Link } from "react-router-dom";

function Contactpage() {
    return (
        <div>
            <h2 className="contactH2">Contact Page</h2>
            <div className="contactList">
                <p className="contactP">Feel free to contact me at anytime.<br></br> (The dev that made this site)</p>
                <p className="contactP">Email: <Link to="mailto:ygonz42@gmail.com">ygonz42@gmail.com</Link></p>
                <p className="contactP">Phone: (203) 809 4494</p>
            </div>
        </div>
    );
}

export default Contactpage;