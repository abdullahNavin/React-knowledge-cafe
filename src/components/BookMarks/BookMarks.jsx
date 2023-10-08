import PropTypes from 'prop-types'
import BookMark from './BookMark';

const BookMarks = ({ bookmarks,readingTime }) => {
    // console.log(bookmarks)
    return (
        
        <div className="md:w-1/3 ml-2">
            <div>
                <h1 className='text-3xl font-bold text-sky-500 text-center p-2 bg-gray-300 rounded-md mt-2'>Spend Time On Read:{readingTime} min</h1>
            </div>
            <h1 className="text-4xl text-center underline">BookMarked : {bookmarks.length}</h1>

            {
                bookmarks.map((bookMark,idx) => <BookMark
                    key={idx}
                    bookMark={bookMark}
                ></BookMark>)
            }

        </div>
    );
};
BookMarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default BookMarks;