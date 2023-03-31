import { useState } from 'react';

const Exam01 = () => {
    const [numbers, setNumbers] = useState([ 1, 1, 4, 6, 8, 3, 5, 5, 9, 11, 15])

    const onClick = () => {

        // Loc ra so chan
        // const newNumbers = numbers.filter((item) => {
        //     return item % 2 === 0
        // })
        // setNumbers(newNumbers)

        // Loc ra so chia het 3
        // const newNumbers = numbers.filter((item) => {
        //     return item % 3 === 0
        // })
        // setNumbers(newNumbers)

        // Loc ra so duy nhat
        const data = {}
        numbers.forEach((item) => {
            data[item] = true
        })

        const newNumbers = Object.keys(data)
        setNumbers(newNumbers)
    }

    return (
        <div>
            { numbers.map((item) => {

                 return (
                     <div>
                        <div> {item} </div>
                    </div>
                 )
            })}

            <button onClick={onClick} >Click me</button>
        </div>
    );
  };
  
export default Exam01;