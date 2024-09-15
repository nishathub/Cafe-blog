import PropTypes from 'prop-types';

// const [readTime, setReadTime] = useState(0);

// let readTime = 0;
// const handleReadTime = (event, time) => {
//     event.preventDefault();
//     console.log('time from function', time);
//     const updatedReadTime = readTime + time;
//     console.log('readTime from function', readTime);
//     console.log('updatedReadTime from function', updatedReadTime);
//     // setReadTime(updatedReadTime);
// }

const Blog = ({item, handleBookmarks, handleReadTime}) => {
    return (
        <div className="blog-box">
            <div>
            <img className="rounded-lg w-full" src={item.cover_img} alt="" />
            </div>
            <div className="md:flex justify-between items-center">
                <div className="flex gap-4">
                    <div>
                    <img className="h-14 w-14 rounded-full" src={item.author_img} alt="blogger-image" />
                    </div>
                    <div>
                        <h4>{item.author_name}</h4>
                        <h6>{item.post_date}</h6>
                    </div>
                </div>
                <div className="flex gap-4 items-center md:mt-0 mt-4">
                    <h4>{item.reading_time} mins read</h4>
                    <button onClick={() => handleBookmarks(item)}>&#x1F516;</button>
                </div>
            </div>
            <div className="text-left flex flex-col gap-3">
                <h2 className="text-3xl">{item.title}</h2>
                <div className="flex gap-2">{item.hashtag.map(tag => <h6 key={tag[1]}>{tag}</h6>)}</div>
                <a className="text-emerald-200 underline" href="#" onClick={() => handleReadTime(event, item.reading_time)}>Mark as read</a>
            </div>
        </div>
    );
};
Blog.propTypes = {
    handleBookmarks: PropTypes.func,
    handleReadTime: PropTypes.func,
    item: PropTypes.object,
}

export default Blog;