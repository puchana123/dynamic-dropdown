import './App.css';
import FoodComponent from './components/FoodComponent';
import DropdownComponent from './components/DropdownComponent';
import MenuData from './data/MenuData';
import {useState} from 'react'

function App() {

  const [foods,setFoods] = useState(MenuData)

  const changeMenu = (e)=>{
    const category = e.target.value;
    if(category === 'เมนูทั้งหมด'){
      setFoods(MenuData)
    }else{
      const result =MenuData.filter((data)=>{
        return data.menu === category
      })
      setFoods(result)
    }   
  }

  return (
    <div className='container'>
      <DropdownComponent changeMenu={changeMenu}/>
      <div className='content'>
        {foods.map((data,index)=>
          <FoodComponent key={index} {...data}/>
        )}
     
      </div>
      
    </div>
  );
}

export default App;
