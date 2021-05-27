import { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        this.setState({ loading: false });
        let fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        this.setState({ orders: fetchedOrders });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }
  render() {
    const orders = this.state.orders.map((order) => {
      return (
        <Order
          key={order.id}
          price={+order.price}
          ingredients={order.ingredients}
        />
      );
    });
    return <div>{orders}</div>;
  }
}

export default withErrorHandler(Orders, axios);
