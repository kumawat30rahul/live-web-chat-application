import React from 'react'

function Search() {
  return (
    <div className='search'>
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          // onKeyDown={handleKey}
          // onChange={(e) => setUsername(e.target.value)}
          // value={username}
        />
      </div>
      {/* {err && <span>User not found!</span>} */}
      {/* {user && ( */}
        <div className="userChat" >
          <img src='' alt="" />
          <div className="userChatInfo">
            <span>user.displayName</span>
          </div>
        </div>
      {/* )} */}
    </div>
  )
}

export default Search


// onClick={handleSelect}