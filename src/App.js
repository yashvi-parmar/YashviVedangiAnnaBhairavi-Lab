import {render} from 'react-dom';
import RestaurantScreen from './components/RestaurantScreen';
import Counter from './features/counter/IncrementByAmount';
export default function App() { 
  return(
    <><RestaurantScreen /><Counter /></>
  )
}
