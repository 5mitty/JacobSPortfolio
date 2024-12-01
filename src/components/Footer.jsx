import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footerSection'>
            <div className="justify-content-center">
                {/* GitHub Icon */}
                <Link to={`https://github.com/5mitty`} className="footerLink">GitHub</Link>
                {/* LinkedIn Icon */}
                <Link to={`https://www.linkedin.com `} className="footerLink">LinkedIn</Link>
                {/* Stack overflow Icon */}
                <Link to={`https://stackoverflow.com`} className="footerLink">Stack Overflow</Link>
            </div>
        </div>
    );
}

export default Footer;