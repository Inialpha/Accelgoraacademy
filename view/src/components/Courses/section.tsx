import React from 'react';
import bg from '../../assets/images/courses/python_programming.jpeg'

const Course: React.FC = () => {
  const courses = [
    {'title': 'Python Programming',
  	'image': bg,
	'description': 'Enroll to learn and master the foundamentals of \
	programming and the Python language with this interesting course where you \
	will get access to endless resourses, mentorship and guidiance and belong to a \
	dynamic comminity of programmers',
        'duration': '12 weeks',
	'price': '$300'
	},

	{'title': 'Web Developement',
	'image': bg,
    'description': 'Enroll to learn and master the foundamentals of \
    programming and the Python language with this interesting course where you \
	will get access to endless resourses, metorship and guidiance and belong to a \
	dynamic comminity of programmers',
    'duration': '12 weeks',
    'price': "$100"
    },

	{'title': 'Web Developement',
		'image': bg,
			'description': 'Enroll to learn and master the foundamentals of ',
                        'duration': '12 weeks',
			'price': '$400'
		},

		{'title': 'Web Developement',
                  'image': bg,
			'description': 'Enroll to learn and master the foundamentals of ',
                        'duration': '12 weeks',
			'price': '$200'
		}

	]


  return (
    <section className="lg:p-24 p-12">
      <h3 className='text-5xl text-center mb-2 font-bold'>Our Courses</h3>
      <div className=" grid font-fira grid-cols-1 lg:grid-cols-3 gap-4">
	    {courses.map((course, index) => (
	      <div className=" bg-slate-50 rounded-lg">
                <img src={course.image} className=" w-full h-60 "/>
                <div className=" p-3 mt-3">
		    <h3 className=" text-lg font-bold mb-4 ">{course.title}</h3>
			          <p className=" line-clamp-4">{course.description}</p>
                  <hr className="my-4 border-t border-gray-300" />
                  <div className= "flex justify-between">
                    <p>{course.price}</p>
                    <p>{course.duration}</p>
                  </div>
                    <hr className="my-4 border-t " />
                    <button className=" bg-blue-500 text-white font-bold py-2 px-4 rounded-full justify-self-center ">Enroll</button>
                </div>
              </div>
		))}

      </div>
    </section>
  )
}

export default Course;
