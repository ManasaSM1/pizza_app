import logo from './logo.svg';
import './App.css';



function App(){
    return (
     
        <div className="App">
          
        <h1 className="pizza-name">Welcome to Pizza Delivery App</h1>
        <div className="login">
          <h4>Admin login</h4>
        Email<br /><input type="email" /><br />
        Password<br /><input type="password" /><br />
        Forgot Password<input type="button" /><br />
       <input type="submit"/><br />
       </div>
       <div className="login">
          <h4>User login</h4>
        Email<br /><input type="email" /><br />
        Password<br /><input type="password" /><br />
        Forgot Password<input type="button" /><br />
       <input type="submit"/><br />
       </div>
        <Pizza />
      <h2>Delivery Status</h2>
        </div>
      
    );
  }


export default App;

    
 


function Pizza(){

  const pizza=[
  {
     name:"Veg-Pizza",
     picture :"https://media.istockphoto.com/photos/supreme-pizza-slice-lift-picture-id153784617?k=20&m=153784617&s=612x612&w=0&h=muHavOUqyjg8RkaIwbruet5I_IFkYJP6cPBi5M47jvI="
  },{
    name:"Chicken pizza",
    picture:"https://static.toiimg.com/thumb/53339084.cms?width=1200&height=900"
  }
 ]

 
  return(
  <div>
  <div className="pizza-list-conatiner">
    {pizza.map((pizza)=>(
     <div className="pizza-container">
        <img  className="pizza-picture" src={pizza.picture} />
      <h3 className="pizza-name">{pizza.name}</h3>
      </div>
    ))}
    </div>
    <div className="pizza-name">
    Select base
    <select >
  <option value="Whole-Wheat Pizza Base">Whole-Wheat Pizza Base</option>
  <option value="Oats Pizza Base">Oats Pizza Base</option>
  <option value="Cauliflower Pizza Base">Cauliflower Pizza Base</option>
  <option value="Multi-Grain Pizza Base">Multi-Grain Pizza Base</option>
  <option value="Chickpea Pizza Base">Chickpea Pizza Base</option>
</select>
<br />
 Select sauce
 <select >
  <option value="Pesto">Pesto</option>
  <option value="Ricotta Cheese">Ricotta Cheese</option>
  <option value="Barbecue Sauce">Barbecue Sauce</option>
  <option value="Ranch Dressing">Ranch Dressing</option>
  <option value="Tapenade">Tapenade</option>
</select>
<br />
Select cheese type
<select >
  <option value="Mozzarella">Mozzarella</option>
  <option value="Aged Havarti">Aged Havarti</option>
  <option value="Gorgonzola">Gorgonzola</option>
  <option value="Provolone">Provolone</option>
  <option value="The ultimate cheese pizza">The ultimate cheese pizza</option>
</select>
<br />
Select veggies
<select >
  <option value="Corn">Corn</option>
  <option value="Olives">Olives</option>
  <option value="Mushroom">Mushroom</option>
  <option value="Capsicum">Capsicum</option>
  <option value="Tomato">Tomato</option>
</select>
<br />
Select meat
<select >
  <option value="Chicken">Chicken</option>
  <option value="Bacon">Bacon</option>
 
</select>
<br />
  <button type="submit" >
    Order Pizza
  </button>
</div>
   </div>
    )
    }
  
    