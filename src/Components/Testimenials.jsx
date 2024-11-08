import { useState } from "react"

export const Testimenials = () => {
    const [test, setTest] = useState(0)

    const testimonials = [
        {
          quote: "This is the best product I've ever used!",
          author: "Jane Doe",
        },
        {
          quote: "I highly recommend this product to everyone!",
          author: "John Smith",
        },
        {
          quote: "This product has completely changed my life!",
          author: "Bob Johnson",
        }
    ]

    const handleNextClick = () => {
        setTest(test + 1)
        if (test >= testimonials.length - 1) {
            setTest(0)
        }
    }
    const handlePrevClick = () => {
        setTest(test - 1)
        if (test <= 0) {
            setTest(testimonials.length - 1)
        }
    }
    
  return (
     <div className="testimonials">
        <div className="testimonials-quote">
            {
                testimonials[test].quote
            }
            
            </div>
            <div className="testimonials-author">
            {
                testimonials[test].author
            }
        </div>
        <div className="testimonials-nav">
            <button onClick={handlePrevClick} className="">Prev</button>
            <button onClick={handleNextClick}>Next</button>
        </div>
        </div>
        
     

   
  )
}
