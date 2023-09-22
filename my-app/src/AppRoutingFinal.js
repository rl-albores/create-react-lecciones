import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from 'react-router-dom'
import NotFoundPage from './pages/404/NotFoundPage'
import './App.css'
import LoginPage from './pages/auth/LoginPage'
import DashBoardPage from './pages/dashboard/DashBoard'

function AppRoutingFinal() {
  let loggedIn = true
  return (
    <Router>
      <Routes>
        <Route
          exact
          path=""
          element={
            loggedIn ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route exact path="/login" element={<LoginPage />} />
        <Route
          exact
          path="/dashboard"
          element={
            loggedIn ? <DashBoardPage /> : <Navigate to="/login" replace />
          }
        />
        <Route element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default AppRoutingFinal
