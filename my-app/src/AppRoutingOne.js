import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from 'react-router-dom'
import './App.css'
import HomePage from './pages/home/HomePage'
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/AboutPage'
import ProfilePage from './pages/profile/ProfilePage'
import TasksPage from './pages/tasks/TasksPage'
import TaskDetailPage from './pages/tasks/TaskDetailPage'
import LoginPage from './pages/auth/LoginPage'

function AppRoutingOne() {
  const logged = false

  return (
    <Router>
      <div>
        <aside>
          <Link to="/">|| HOME |</Link>
          <Link to="/about">| ABOUT </Link>
          <Link to="/faqs">| FAQs </Link>
          <Link to="/any404">| Not Existing Route |</Link>
        </aside>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faqs" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />}>
              {logged ? (
                <ProfilePage />
              ) : (
                () => {
                  alert('Debes Loggearte para accesar a tus tareas...')

                  return <Route path="*" element={<Navigate to="/" />} />
                }
              )}
            </Route>
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/tasks/:id" element={<TaskDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default AppRoutingOne
