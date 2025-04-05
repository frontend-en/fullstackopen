const Total = ({ parts = [] }) =>
  <p>Number of exercises{' '}
    {parts.reduce((acc, item) => acc + item.exercises, 0)}
  </p>

export default Total