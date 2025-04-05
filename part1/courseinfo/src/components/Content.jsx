import Part from "./Part";

const Content = ({ parts = [] }) => {
  const renderElements = ({ name, exercises }) => (
    <Part
      key={name}
      part={name}
      exercises={exercises}
    />
  );

  return <>{parts.map(renderElements)}</>;
};

export default Content;
