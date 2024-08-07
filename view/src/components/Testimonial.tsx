import happinessImage from '../assets/images/users/happiness_ejama.png'
import kufreEmmanuel from '../assets/images/users/kufre_emmanuel.png'
import ibrahimAli from '../assets/images/users/ibrahim_ali.png'
import janetWilliam from '../assets/images/users/janet_william.png'
import toluPaul from '../assets/images/users/tolu_paul.png'

const testimonials: any[] = [
  {name: "Kufre Emmanuel",
   content: "Accelgora Academy transformed my tech skills into a market-ready portfolio. The courses and community support were incredible. Highly recommend!",
   image: kufreEmmanuel,
   course: "Advance Python Programming"
  },

  {name: "Happiness Ejama",
   content: "Thanks to Accelgora Academy, I gained practical experience and landed my dream job in tech. The flexible courses fit my busy schedule perfectly",
   image: happinessImage,
   course: "Web Developement"
  },

  {name: "Ibrahim Alu",
   content: "The tutors at Accelgora Academy provided invaluable guidance. My skills improved significantly, and I felt confident entering the job market",
   image: ibrahimAli,
   course: "Javascript"
  },

  {name: "Tolu Paul",
   content: "Accelgora Academy's resources were comprehensive and easy to follow. I built a strong portfolio and received constructive feedback. Great learning experience!",
   image: toluPaul,
   course: "Nodejs"
  },

  {name: "Janet William",
   content: "The community at Accelgora Academy made learning enjoyable and collaborative. I felt supported every step of the way. Excellent tech academy!",
   image: janetWilliam,
   course: "Typescript"
  }
]
/*className="flex  space-x-4 overflow-y-hidden overflow-x-auto lg:flex-row">*/

/*className="font-fira p-12 lg
:px-24 text-center">*/

const Testimonial: React.FC = () => {
  return (
    <section className=" font-fira p-4 md:p-12 lg:px-24 my-20 ">
      <h1 className=" text-3xl md:text-5xl font-bold text-center mb-10 ">What our students are saying</h1>
      <div className=" overflow-x-auto flex h-48 w-full space-x-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className=" flex-shrink-0 inline-block bg-blue-500/20 flex space-x-8 px-6 items-center rounded-lg w-full">
            <img src={testimonial.image} className=" hidden md:block  rounded-lg w-28 h-28"/>
            <div className=" flex flex-col ">
              <p className="">{testimonial.content}</p>
              <p className=" font-bold ">{testimonial.name}</p>
              <p className=" ">Completed: {testimonial.course}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
  
}

export default Testimonial;
