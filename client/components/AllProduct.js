import React from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../store/product'
import history from '../history'
import {Link} from 'react-router-dom';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'

function mapState(state) {
  return {
    products: state.products.products
  }
}
function mapDispatch(dispatch) {
  return {
    fetchingProduct: () => {
      dispatch(fetchProducts())
    }
  }
}

export class AllProduct extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.fetchingProduct()
  }
  render() {
    if (!this.props.products) return <div>No Products</div>

    return (

      <div>
        {this.props.products.map(product => (
          <div key={product.id}>
            <Card>
              {/* <Link to={`/products/${product.id}`}> */}
              <CardImg
                top
                width="100%"
                src={product.imageUrl}
                alt="Card image cap"
              />
              {/* </Link> */}
              <CardBody>
                <CardTitle>{product.name}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>{product.description}</CardText>
                <Button color="primary">Add to Cart</Button>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    )
  }
}
export default connect(mapState, mapDispatch)(AllProduct)
