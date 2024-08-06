import inimfonImage from '../assets/images/team/inimfon.png'

const testimonials: any[] = [
  {name: "Sarah J",
   content: "Accelgora Academy transformed my tech skills into a market-ready portfolio. The courses and community support were incredible. Highly recommend!",
   image: inimfonImage,
   course: "Advance Python Programming"
  },

  {name: "Mike T",
   content: "Thanks to Accelgora Academy, I gained practical experience and landed my dream job in tech. The flexible courses fit my busy schedule perfectly",
   image: inimfonImage,
   course: "Web Developement"
  },


  {name: "Emily R",
   content: "The tutors at Accelgora Academy provided invaluable guidance. My skills improved significantly, and I felt confident entering the job market",
   image: inimfonImage,
   course: "Javascript"
  },

  {name: "David K",
   content: "Accelgora Academy's resources were comprehensive and easy to follow. I built a strong portfolio and received constructive feedback. Great learning experience!",
   image: inimfonImage,
   course: "Nodejs"
  },

  {name: "Jessica L.",
   content: "The community at Accelgora Academy made learning enjoyable and collaborative. I felt supported every step of the way. Excellent tech academy!",
   image: inimfonImage,
   course: "Typescript"
  }
]

const Testimonial: React.FC = () => {
  return (
    <section className="font-fira p-12 lg:px-24 text-center">
      <h1 className=" text-5xl font-bold ">What our students are saying</h1>
      <div className="flex items-center space-x-4 overflow-y-hidden overflow-x-auto lg:flex-row">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="bg-blue-500/20 w-[500px] flex">
            <img src={testimonial.image} className=" hidden md:block  rounded-lg w-28 h-28"/>
            <div className=" flex items-center justify-end flex-col w-2/3 ">
              <p className=" mb-6 w-full h-1/2 text-ellipsis">{testimonial.content}</p>
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
