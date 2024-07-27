import inimfonImage from '../../assets/images/team/inimfon.png'

const team = [
  {'name': 'Kaiemobi Eke',
   'bio': "Inimfon Ebong is a passionate full stack software engineer, based in Calabar, Nigeria. \                        He has experience in backend technologies, web development and DevOps.\           He is passionate about building life improving solutions driven by creativity to meet the technological needs of underdeveloped countries hence fostering inclusiveness.\                                    He believes in learning processes that foster creativity and enhance innovation and is passionate in providing it.\
His tech skills include Python, Nodejs, JavaScript, MySQL, Mongodb.\
He holds a certificate in software engineering from ALX SE with specialization in backend.",
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
    <section className=" text-center ">
      <h3 className=" text-5xl font-bold">Meet The Team</h3>
      <div className=" grid grid-cols-1 md:grid-cols-2 justify-center items-center  gap-6">
        {team.map((member) => (
          <div className=" bg-white shadow-xl p-6 rounded-lg">
            <img src={member.image} className=" rounded-full "/>
            <h3 className=" ">{member.name}</h3>
            <p className=" text-left">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About;
