import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import { IsLearningProvider } from './context/isLearning';
import GlobalStyles from './components/GlobalStyles/Globalstyles';

import NavBar from './components/nav/NavBar';
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home';
// import Register from './pages/Register';
// import Login from './pages/Login';
// import Lecture from './pages/user/course/Lecture';
// import Listening from './pages/user/course/Listening';
// import AccountActivate from './pages/auth/AccountActivate';
// import ForgotPassword from './pages/auth/ForgotPassword';
// import AccessAccount from './pages/auth/AccessAccount';

// import PrivateRoute from './components/routes/PrivateRoute';
// import Dashboard from './pages/user/Dashboard';
// import EnrolledCourses from './pages/user/course/EnrolledCourses';
// import PostedCourses from './pages/user/course/PostedCourses';
// import CourseCreate from './pages/user/course/CourseCreate';
// import CourseView from './pages/CourseView';
// import CourseEdit from './pages/user/course/CourseEdit';

function App() {
    return (
        <AuthProvider>
            <IsLearningProvider>
                <GlobalStyles>
                    <BrowserRouter>
                        <NavBar></NavBar>
                        <Toaster />
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </BrowserRouter>
                </GlobalStyles>
            </IsLearningProvider>
        </AuthProvider>
    );
}

export default App;
