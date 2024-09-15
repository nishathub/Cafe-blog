import PropTypes from 'prop-types';
// const time = handleReadTime();
// console.log('time', time);
const Bookmark = ({ readTime, favorite, handleRemove }) => {
    const readTimeStyle = {backgroundColor : readTime > 40 ? 'lightgreen' : '', fontWeight: 'bold'}
    return (
        <div className="rounded-md col-span-4 text-left mb-6 md:mb-0">
            <div style={readTimeStyle} className="rounded-md p-3 mb-4 bg-violet-200 text-violet-800">
                <h4>Spent Time on Reading : {readTime} mins</h4>
            </div>
            <div className="rounded-md p-4 bg-gray-500">
                <h4 className="font-bold">Bookmarked Blogs : {favorite.length}</h4>
                <div>
                    {favorite.map((title) => <div key={title} className="my-2 p-2 bg-slate-600 rounded-lg text-sm flex justify-between items-center">
                        <h6 className="w-3/4">{title}</h6>
                    <button onClick={() => handleRemove(title)} className="bg-red-950 h-fit p-1 rounded-lg">Remove</button>
                    </div>
                        )}
                </div>
            </div>
        </div>
    );
};
// readTime, favorite, handleRemove
Bookmark.propTypes = {
    readTime: PropTypes.number,
    favorite: PropTypes.array,
    handleRemove: PropTypes.func,

}
export default Bookmark;