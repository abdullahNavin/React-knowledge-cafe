import PropTypes from 'prop-types'
import BookMark from './BookMark';

const BookMarks = ({ bookmarks }) => {
    // console.log(bookmarks)
    return (
        <div className="md:w-1/3 ml-2">
            <h1 className="text-4xl text-center underline">BookMarked : {bookmarks.length}</h1>

            {
                bookmarks.map(bookMark => <BookMark
                    key={bookMark.id}
                    bookMark={bookMark}
                ></BookMark>)
            }

        </div>
    );
};
BookMarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}
export default BookMarks;