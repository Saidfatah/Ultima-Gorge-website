const {query,elem}= require('../../utils/short')
module.exports= (function () {
    const months_bookings=[1,10,2,9,12,8,1,5,10,4,12,18]
    const bookingsAxis = query('.bookings')
    const columnsContainer = query('.columns')
    
    const maxBookings =()=>  Math.max(...months_bookings)
    const setColumnHeight=(column,height) =>{
        column.style.height = ((height /maxBookings())*100)+'%';
    }
    const newColumn =()=>{
      const column = elem('div')
      column.classList.add('column');
      column.style.height =0+'%';
      return  column
    }
    const newAxisValue=(v)=>{
      const axisValue = elem('div')
      axisValue.classList.add('booking_count');
      axisValue.innerHTML=v
      return  axisValue
    }
    const appendColumn= month_bookings=>{
         const column = newColumn()
         setColumnHeight(column,month_bookings)
         columnsContainer.append(column)
         
    }
    const appendColumns=()=>{
         months_bookings.forEach(month_bookings=>{
            appendColumn(month_bookings)
         })
    }
    const setBookingsAxis=()=>{
      const max= maxBookings();
      const scale = Math.ceil(max/10)
      console.log(scale)
      let accum = 0
      while(accum<=max){
          accum +=scale
          const axisv =newAxisValue(accum);
         bookingsAxis.append(axisv)
      }
    }
    
    appendColumns()
    setBookingsAxis()
}());


    