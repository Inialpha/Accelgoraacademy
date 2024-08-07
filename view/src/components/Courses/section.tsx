import React from 'react';
import pythonImage from '../../assets/images/courses/python_programming.jpeg'
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
    <section id="courses" className=" font-fira p-4 md:p-12 lg:px-24 my-20">
      <h1 className=" text-3xl md:text-5xl font-bold text-center mb-10">Our Courses</h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 ">
	    {courses.map((course, index) => (
	      <div className=" bg-slate-100 border border-slate-200 rounded-lg">
                <img src={course.image} className=" w-full rounded-t-lg h-60 "/>
                <div className=" p-6 mt-6">
		    <h3 className=" text-lg font-bold mb-4 ">{course.title}</h3>
			<p className=" line-clamp-4 text-xs">{course.description}</p>
                  <hr className="my-4 border-t border-gray-300" />
                  <div className= "flex justify-between">
                    <p>{course.price}</p>
                    <p>{course.duration}</p>
                  </div>
                    <hr className="my-4 border-t border-gray-300" />
                    <button className=" bg-blue-500 text-white font-bold py-2 px-4 rounded-full justify-self-center ">Enroll</button>
                </div>
              </div>
		))}

      </div>
    </section>
  )
}

export default Course;
