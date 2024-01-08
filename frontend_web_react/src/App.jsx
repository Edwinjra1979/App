import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { TasksPage } from './pages/TasksPage';
import { TaskFormPage } from './pages/TaskFormPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to='/tasks'></Navigate>}></Route>
        <Route path="/tasks" element={<TasksPage></TasksPage>}></Route>
        <Route path="/tasks-create" element={<TaskFormPage></TaskFormPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


