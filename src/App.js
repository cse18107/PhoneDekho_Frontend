import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import { Routes,Route } from 'react-router-dom';
import GraphPage from './Pages/Dashboard/GraphPage/GraphPage';
import ProfilePage from './Pages/Dashboard/ProfilePage/ProfilePage';
import OrderListPage from './Pages/Dashboard/OrderListPage/OrderListPage';
import ItemListPage from './Pages/Dashboard/ItemListPage/ItemListPage';
import AddUserPage from './Pages/Dashboard/AdminGeneratorPage/AddUserPage';
import UserListPage from './Pages/Dashboard/UserListPage/UserListPage';
import AddItemPage from './Pages/Dashboard/AddItemPage/AddItemPage';
import Login from './Pages/Auth/Login.js';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='/dashboard' element={<GraphPage/>}/>
          <Route path='/dashboard/your-profile' element={<ProfilePage/>}/>
          <Route path='/dashboard/order-list' element={<OrderListPage/>}/>
          <Route path='/dashboard/item-list' element={<ItemListPage/>}/>
          <Route path='/dashboard/add-user' element={<AddUserPage/>}/>
          <Route path='/dashboard/add-item' element={<AddItemPage/>}/>
          <Route path='/dashboard/users-list' element={<UserListPage/>}/>
        </Route>
        
      </Routes>
    {/* <Dashboard/> */}
    </div>
  );
}

export default App;
