import IbrahimImage from '../assets/images/team/inimfon.png'

const testimonials: object[] = [
  {'name': "Sarah J",
   'content': "Accelgora Academy transformed my tech skills into a market-ready portfolio. The courses and community support were incredible. Highly recommend!",
   'image': "",
   'course': "Advance Python Programming"
  },

  {'name': "Mike T",
   'content': "Thanks to Accelgora Academy, I gained practical experience and landed my dream job in tech. The flexible courses fit my busy schedule perfectly",
   'image': IbrahimImage,
   'course': "Web Developement"
  },

  {'name': "Emily R",
   'content': "The tutors at Accelgora Academy provided invaluable guidance. My skills improved significantly, and I felt confident entering the job market",
   'image': "",
   'course': "Javascript"
  },

  {'name': "David K",
   'content': "Accelgora Academy's resources were comprehensive and easy to follow. I built a strong portfolio and received constructive feedback. Great learning experience!",
   'image': "",
   'course': "Nodejs"
  },

  {'name': "Jessica L.",
   'content': "The community at Accelgora Academy made learning enjoyable and collaborative. I felt supported every step of the way. Excellent tech academy!",
   'image': "",
   'course': "Typescript"
  }
]

const Testimonial: React.FC = () => {
  return (
    <section className=" container m-20 text-center ">
      <h1 className=" text-5xl font-bold ">What are students are saying</h1>
      <div className=" ">
        {testimonials.map((testimonial) => (
          <div className="bg-blue-500/50  my-6 md:p-6 rounded-lg flex h-48 ">
            <img src={testimonial.image} className=" hidden md:inline-block w-auto rounded-lg "/>
            <div className=" text-left m-6 ">
              <p className=" mb-6">{testimonial.content}</p>
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
