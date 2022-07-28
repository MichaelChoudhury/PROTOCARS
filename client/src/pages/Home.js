import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllCars } from '../redux/actions/carsActions'
import { Button, Row, Col } from 'antd';
import Spinner from '../components/Spinner';

function Home() {
  const {cars} = useSelector(state => state.carsReducer)
  const {loading} = useSelector(state=>state.alertsReducer)
  const dispatch = useDispatch()

  const [query, setQuery] = useState('');

  
  useEffect(() => {
    dispatch(getAllCars())
  }, [])

  return (
    <DefaultLayout setQuery = {setQuery}>
      {query}  
      {loading === true && (<Spinner/>)}
        
        <Row justify='center' gutter={16} className='mt-5'>

              {cars.map(car => {

               {/* <DefaultLayout ChangeQuery = {data => setQuery(data)} /> */}

              if (car.carDesc.includes(query)||
                  car.carPrice.includes(query)) {

                return <Col lg={5} sm={24} xs={24}> 
                    <div className="car p-2 bs1 mt-3">
                      <img src={car.carImg} className="carimg"  alt="No pic"/>
                    
                        <div className="car-content d-flex align-items-center justify-content-between">
                        <div>
                              <button className="btn1 mr-2">Buy Now</button>
                        </div>
                          </div>
                              <p>{car.carDesc}</p>
                              <p>{car.carPrice}</p>
                          </div>           

                </Col>
                }
              })}

        </Row>

    </DefaultLayout>
  )
}

export default Home