// Refactored GroceryListItem to be a class component

class GroceryListItem extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  }

  onHover() {
    this.setState({
      done: !this.state.done
    });
  }
  
  render() {
    var style = {
      'font-weight': this.state.done ? 'bold' : 'normal'
    };
    return (
        <li style={style} onMouseOver={this.onHover.bind(this)}>{this.props.item}</li>
    )
  }
}

var App = () => (
  <div>
    <GroceryList items={['Milk', 'Cheese', 'Burgundy']}/>
  </div>
)


// Refactor GroceryList to dynamically render an array of groceryItems, utilizing your new GroceryListItem component
var GroceryList = (props) => (
  <ul>
    {props.items.map(grocery =>
      <GroceryListItem item={grocery}/>
    )}
  </ul>
)

ReactDOM.render(<App />, document.getElementById("app"));
