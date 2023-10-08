import PropTypes from 'prop-types'

const BookMark = ({bookMark}) => {
    const {title}=bookMark
    return (
        <div className='bg-gray-100 p-5 mt-5 rounded'>
            <h1 className="text-3xl font-bold">{title}</h1>
        </div>
    );
};

BookMark.propTypes={
    bookMark:PropTypes.object.isRequired
}
export default BookMark;