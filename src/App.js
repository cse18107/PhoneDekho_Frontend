import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import { Routes,Route } from 'react-router-dom';
import GraphPage from './Pages/Dashboard/GraphPage/GraphPage';
import ProfilePage from './Pages/Dashboard/ProfilePage/ProfilePage';
import OrderListPage from './Pages/Dashboard/OrderListPage/OrderListPage';
import ItemListPage from './Pages/Dashboard/ItemListPage/ItemListPage';
import AdminGeneratorPage from './Pages/Dashboard/AdminGeneratorPage/AdminGeneratorPage';
import UserListPage from './Pages/Dashboard/UserListPage/UserListPage';
import AddItemPage from './Pages/Dashboard/AddItemPage/AddItemPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>}>
          <Route path='/' element={<GraphPage/>}/>
          <Route path='/your-profile' element={<ProfilePage/>}/>
          <Route path='/order-list' element={<OrderListPage/>}/>
          <Route path='/item-list' element={<ItemListPage/>}/>
          <Route path='/add-admin' element={<AdminGeneratorPage/>}/>
          <Route path='/add-item' element={<AddItemPage/>}/>
          <Route path='/users-list' element={<UserListPage/>}/>
        </Route>
      </Routes>
    <Dashboard/>
    </div>
  );
}

export default App;
