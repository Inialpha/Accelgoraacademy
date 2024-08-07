import inimfonImage from '../../assets/images/team/inimfon.png'

const team = [
  {'name': 'Kaiemobi Eke',
   'bio': `Inimfon Ebong is a passionate full stack software engineer, based in Calabar, Nigeria. \
He has experience in backend technologies, web development and DevOps. 
\n
He is passionate about building life improving solutions driven by creativity to meet the technological needs of underdeveloped countries hence fostering inclusiveness.
\n
He believes in learning processes that foster creativity and enhance innovation and is passionate in providing it. 
\n
His tech skills include Python, Nodejs, JavaScript, MySQL, Mongodb.
\n
He holds a certificate in software engineering from ALX SE with specialization in backend.`,
   'image': inimfonImage
  },

  {'name': 'Inimfon Ebong',
   'bio': "Inimfon Ebong is a passionate full stack software engineer, based in Calabar, Nigeria. \                        He has experience in backend technologies, web development and DevOps.\           He is passionate about building life improving solutions driven by creativity to meet the technological needs of underdeveloped countries hence fostering inclusiveness.\                                    He believes in learning processes that foster creativity and enhance innovation and is passionate in providing it.\
His tech skills include Python, Nodejs, JavaScript, MySQL, Mongodb.\
He holds a certificate in software engineering from ALX SE with specialization in backend.",
    'image': inimfonImage
  },

  {'name': 'Abdulrasheed Aliyu',
   'bio': "Inimfon Ebong is a passionate full stack software engineer, based in Calabar, Nigeria. \
He has experience in backend technologies, web development and DevOps.\
He is passionate about building life improving solutions driven by creativity to meet the technological needs of underdeveloped countries hence fostering inclusiveness.\
He believes in learning processes that foster creativity and enhance innovation and is passionate in providing it.\
His tech skills include Python, Nodejs, JavaScript, MySQL, Mongodb.\
He holds a certificate in software engineering from ALX SE with specialization in backend.",
   'image': inimfonImage
  }
]

const About: React.FC = () => {
  return (
    <section id="about" className=" font-fira p-4 md:p-12 lg:px-24 my-20 ">
      <h3 className=" text-center text-3xl md:text-5xl font-bold mb-10">Meet The Team</h3>
      <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center  gap-6">
        {team.map((member) => (
          <div className=" flex flex-col bg-white shadow-xl p-6 rounded-lg overflow-y-auto h-[500px] md:h-[600px] items-center">
            <img src={member.image} className=" rounded-full w-48 "/>
            <h3 className=" m-4 font-bold ">{member.name}</h3>
            {member.bio.split('\n').map((line, index) => (
            <p className=" text-left mb-2">{line}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default About;
