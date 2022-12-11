const Course = ({ course }) => {
  const total = course.parts.reduce(
    (acc, part) => acc + part.exercises, 0
  )
  return (
    <>
      <h2>{course.name}</h2>
      <ul>
        {course.parts.map(part =>
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        )}
      </ul>

      <p><b>total of {total} exercises</b></p>
    </>
    
  )
}

export default Course