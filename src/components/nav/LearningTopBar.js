import './LearningTopBar.scss';

import { useAuth } from '../../context/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { PiDotsThreeBold } from 'react-icons/pi';

import { useMediaQuery } from 'react-responsive';

export default function LearningTopBar({ title }) {
    // media query
    // const isMobile = false;
    // const isDesktop = useMediaQuery({ minWidth: 992 });
    // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    // const isNotDesktop = useMediaQuery({ maxWidth: 992 });
    // const isNotMobile = useMediaQuery({ minWidth: 768 });

    // access context
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const loggedIn = auth.user !== null && auth.token !== '';

    return (
        <nav className="navbar bg-transparent fixed-top navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">
                <button
                    className="navbar-toggler border-0 shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    {/* <span className="navbar-toggler-icon"></span> */}
                    <span>
                        <PiDotsThreeBold />
                    </span>
                </button>
                {isMobile && (
                    <a className="navbar-brand text-light topic-title" href="#">
                        {title}
                    </a>
                )}
                <a className="navbar-brand text-secondary" href="/">
                    <i className="fa-solid fa-snowflake" id="logo" />
                </a>
                {!isMobile && (
                    <a className="navbar-brand text-light" href="#">
                        {title}
                    </a>
                )}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">
                                <i className="fa-regular fa-circle"></i> Quá trình học
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa-solid fa-book-open"></i> Ghi chú
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa-solid fa-circle-question"></i> Hướng dẫn
                            </a>
                        </li>

                        {loggedIn && (
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fa-solid fa-person-shelter"></i> User
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
