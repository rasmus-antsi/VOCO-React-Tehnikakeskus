import './PageHeading.css';

function PageHeading({ title, intro }) {
  return (
    <div className="page-heading">
      <h1 className="page-heading__title">{title}</h1>
      <p className="page-heading__intro">{intro}</p>
    </div>
  );
}

export default PageHeading;
