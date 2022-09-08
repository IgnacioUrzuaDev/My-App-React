import {useState} from 'react';
import './ItemCount.css';
const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)
    function add(){
        if(count < stock){
            setCount(count + 1)
        }
    }
    function substract(){
        if(count > 0){
            setCount(count -1)
        }
    }
    function reset(){
        setCount(0)
    }
    return (
        <>
            <div className='CounterCard'>            
                    <div>
                    <button className='btn' onClick={substract}> - </button>
                    <> {count} </>
                    <button className='btn' onClick={add}> + </button>
                    </div>
                    <div>
                    <button className='btn' onClick={reset}> Clear cart </button>
                    <button className='btn' onClick={() => onAdd(count)}> Add to cart </button>
                    </div>
            </div>
        </>
    );
}

export default ItemCount;
