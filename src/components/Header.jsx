import ProfileLogo from '../images/profile-logo.jpg'

export default function Header() {
    return (
        <div className="header--container">
            <img src={ ProfileLogo } alt="" width="317px" height="317px"/>
        </div>
    )
}