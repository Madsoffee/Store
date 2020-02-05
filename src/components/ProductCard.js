import styled from 'styled-components'

const StyledWrapper = styled.div`
    max-width 200px;
    border-radius: 8px;
    box-shadow: 0 0 6px 0 rgba(0,0,0,.15);
    overflow: hidden;
    margin-bottom: 10px;

    img {
        width : 100%;
    }

    .content {
        padding: 10px 10px 0 10px;
        h4 , p {
            margin: 0px;
        }
    }

    .inLine {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid black;
    }

    .remain {
        color: green;
    }

    .price {
        color: red;
    }

    .action-button {
        padding: 8px;
        text-align: center;
        color: blue;
        cursor: pointer;

        &:hover {
            background-color: rgba(0,0,0,.15);
        }
    }
`

const ProductCard = props => {
    
    const { handleBuy } = props;
    const { imageUrl, title, description, remain, price } = props.product;

    return (
        <StyledWrapper>'
            <img src={imageUrl} />
            <div className='content'>
                <h4>{title}</h4>
                <p>{description}</p>
                <div className='inLine'>
                    <p className='remain'>{remain} Left</p>
                    <p className='price'>{price} Baht</p>
                </div>
            </div>
            <div className='action-button' onClick={handleBuy}>Buy</div>

        </StyledWrapper>
    )
}

export default ProductCard;