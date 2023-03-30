import { Avatar } from '@mui/material'
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
          className='search_input'
        />
      </div>
      {/* {err && <span>User not found!</span>} */}
      <div className="userChat_div">
      {/* {user && ( */}
        <div className="userChat" >
        <Avatar alt="Remy Sharp" src="https://www.freecodecamp.org/news/content/images/2020/12/DSC08166-2.jpg" />
          <div className="userChatInfo">
            <span>Rahul</span>
          </div>
        </div>
      {/* )} */}
      </div>
    </div>
  )
}

export default Search

// user.displayName
// onClick={handleSelect}