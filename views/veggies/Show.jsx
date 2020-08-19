const React = require('react');

class Show extends React.Component {
  render() {
    const { _id, name, isGreen } = this.props.vegetable;
    return (
      <div>
        <h1>Veggies Show Page</h1>
        <p>The {name} is {isGreen ? "Green" : "not Green"}</p>
        <a href={`/veggies/${_id}/edit`}>Edit</a>
        <form action={`/veggies/${_id}?_method=DELETE`} method="POST">
          <input type="submit" value="Delete" />
        </form>
      </div>
    )
  }
}

module.exports = Show;