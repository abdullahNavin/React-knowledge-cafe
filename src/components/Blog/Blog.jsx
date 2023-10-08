
import PropTypes from 'prop-types';
import { BsFillBookmarkFill } from 'react-icons/bs';

const Blog = ({ blog, handleAddToBookmarks }) => {
    const { cover, title, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='my-8'>
            <img className='w-full mb-3' src={cover} alt={`this is a img of ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-5'>
                    <div><img className='w-[60px] h-[60px]' src={author_img} alt="" /></div>
                    <div>
                        <h2 className='text-[24px] font-bold '>{author}</h2>
                        <p className='text-color'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p className='text-color'>{reading_time} min read
                        <button
                            onClick={() => handleAddToBookmarks(blog)}
                            className='ml-2 text-xl'><BsFillBookmarkFill></BsFillBookmarkFill></button>
                    </p>
                </div>
            </div>
            <h1 className='text-[40px] font-bold'>{title}</h1>
            {
                hashtags.map((has, idx) => <span key={idx} className='text-color'> <a href="">#{has}</a></span>)
            }
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func.isRequired
}
export default Blog;