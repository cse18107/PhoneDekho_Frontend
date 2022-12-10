import yourprofile from '../assets/icons/yourprofile.png';
import chart from '../assets/icons/dashboard.png';
import itemlist from '../assets/icons/itemlist.png';
import userlist from '../assets/icons/userslist.png';
import additem from '../assets/icons/additem.png';
import adduser from '../assets/icons/adduser.png';
import orderlist from '../assets/icons/orderlist.png';
const map = new Map(); 
map.set('/dashboard/your-profile',{headerName:'YOUR PROFILE',icon:yourprofile});
map.set('/dashboard',{headerName:'DASHBOARD',icon:chart});
map.set('/dashboard/order-list',{headerName:'ORDER LIST',icon:orderlist});
map.set('/dashboard/item-list',{headerName:'ITEM LIST',icon:itemlist});
map.set('/dashboard/add-user',{headerName:'ADD NEW USER',icon:adduser});
map.set('/dashboard/add-item',{headerName:'ADD NEW ITEM',icon:additem});
map.set('/dashboard/users-list',{headerName:'USERS LIST',icon:userlist});

export default map;