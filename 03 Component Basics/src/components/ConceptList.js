const ConceptList = (props) => {
  const conceptList = props.concepts.map((concept) => (
    <li className="concept" key={concept.title}>
      <img src={concept.image} alt={concept.title} />
      <h2>{concept.title}</h2>
      <p>{concept.description}</p>
    </li>
  ));
  return <ul id="concepts">{conceptList}</ul>;
};

export default ConceptList;
