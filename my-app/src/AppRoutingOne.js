import { useEffect } from 'react'
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
import StatePage from './pages/home/StatePage'

function AppRoutingOne() {
  let logged = false
  const taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first task',
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second task',
    },
  ]
  useEffect(() => {
    logged = localStorage.getItem('credentials')
  }, [])

  return (
    <Router>
      <div>
        <aside>
          <Link to="/">|| HOME |</Link>
          <Link to="/about">| ABOUT </Link>
          <Link to="/faqs">| FAQs </Link>
          <Link to="/task/1">| Task 1 </Link>
          <Link to="/task/2">| Task 2 </Link>
          <Link to="/any404">| Not Existing Route |</Link>
          <Link to="/login">| Login|</Link>
        </aside>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/online-state" element={<StatePage />} />
            <Route
              path="/login"
              element={logged ? <Navigate to="/" replace /> : <LoginPage />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faqs" element={<AboutPage />} />
            <Route
              path="/profile"
              element={
                logged ? <ProfilePage /> : <Navigate to="/login" replace />
              }
            />
            <Route path="/tasks" element={<TasksPage />} />
            <Route
              exact
              path="/task/:id"
              render={({ match }) => (
                <TaskDetailPage
                  match={match}
                  task={taskList[match.params.id - 1]}
                />
              )}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default AppRoutingOne
