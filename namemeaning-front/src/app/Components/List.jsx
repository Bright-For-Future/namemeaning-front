import { React, useState } from "react";
import data from "../Data/ListData.json";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiLike, BiComment } from "react-icons/bi";
function List(props) {
  const filteredData = data.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.text.toLowerCase().includes(props.input);
    }
  });
  const [activeCardId, setActiveCardId] = useState(null);
  const [selectedComment, setSelectedComment] = useState("");
  const [newComment, setNewComment] = useState("");

  const toggleDropdown = (cardId) => {
    setActiveCardId(activeCardId === cardId ? null : cardId);
  };
  const handleCommentClick = (commentid) => {
    setSelectedComment(selectedComment === commentid ? null : commentid);
  };
  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    // Do something with the new comment, e.g., update the data source
    console.log("New comment:", newComment);
    setNewComment("");
  };
  return (
    <>
      {filteredData.map((item) => (
        <div key={item.id}>
          <div className="card">
            <div className="nameandmeaning">
              <div className="nametop">
                <span className="name">{item.text}</span>
                <span className="name">{item.text}</span>
              </div>
              <div className="meaning">
                <span className="description">{item.description} </span>
                <div>
                  <div
                    className="optiontochange"
                    onClick={() => toggleDropdown(item.id)}
                  >
                    <BsThreeDotsVertical
                      className={activeCardId === item.id ? "active" : ""}
                    />
                    {activeCardId === item.id && (
                      <div className="dropdowncontent">
                        <div className="dropdown">
                          <h6>Edit</h6>
                          <h6>Delete</h6>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="likecomment">
            <div className="likecontent">
              <span>
                <BiLike />
              </span>
              <span className="liketext">Like</span>
            </div>
            <div
              className="commentcontent"
              onClick={() => handleCommentClick(item.id)}
            >
              <span>
                <BiComment />
              </span>
              <span>Comment ({item.comments?.length})</span>
            </div>
          </div>
          <div>
            {selectedComment === item.id && (
              <div>
                <h6>Comment:</h6>
                {item.comments?.map((comment, index) => (
                  <li key={index}>
                    <p>User ID: {comment.userid}</p>
                    <p>Comment: {comment.text}</p>
                  </li>
                ))}
                <form onSubmit={handleCommentSubmit}>
                  <input
                    type="text"
                    value={newComment}
                    onChange={handleInputChange}
                    placeholder="Enter your comment..."
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>
            )}
          </div>
          <hr />
        </div>
      ))}
    </>
  );
}

export default List;