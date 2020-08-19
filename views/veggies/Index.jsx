const React = require('react');

class Index extends React.Component {
  render() {
    const { veggies } = this.props;
    return (
      <>
        <h1>Veggies Index Page</h1>
        <a href="/veggies/new">New Vegetable</a>
        {veggies?.map((vegetable) => {
          return (
            <div key={vegetable._id}>
              <p><a href={`/veggies/${vegetable._id}`}>{vegetable.name}</a></p>
              <p>{vegetable.isGreen ? "It is Green" : "It is not Green"}</p>
            </div>
          )
        })}
      </>
    )
  }
}

module.exports = Index;