import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { TasksPage } from './pages/TasksPage';
import { TaskFormPage } from './pages/TaskFormPage';
import { Navigation } from './components/Navigation';
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <BrowserRouter> 
    <div className="container mx-auto">
    <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to='/tasks'></Navigate>}></Route>
        <Route path="/tasks" element={<TasksPage></TasksPage>}></Route>
        <Route path="/tasks-create" element={<TaskFormPage></TaskFormPage>}></Route>
        <Route path="/tasks/:id" element={<TaskFormPage></TaskFormPage>}></Route>
      </Routes>
      <Toaster />
    </div>    
    
    </BrowserRouter>
  )
}

export default App


