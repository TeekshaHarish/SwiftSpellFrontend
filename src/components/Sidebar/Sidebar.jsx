import React, { useState } from 'react'
import "./Sidebar.css"

const Sidebar = ({ handleButtonClick }) => {
    const [activeTab, setActiveTab] = useState('notes');
  
    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
      handleButtonClick(tabName);
    }

    const handleSelectChange = (event) => {
      setActiveTab(event.target.value);
      handleButtonClick(event.target.value)
    }
  
    const getTabClassName = (tabName) => {
      return activeTab === tabName ? 'active-tab' : '';
    }
  return (
    <div>
      <div className='sidebar__desktop__container'>
          {/* <span className={`sidebar__btn ${getTabClassName('notes')}`} onClick={() => handleTabClick('notes')}>Notes</span> */}
          <span className={`sidebar__btn ${getTabClassName('stt')}`} onClick={() => handleTabClick('stt')}>Speech To Text</span>
          <span className={`sidebar__btn ${getTabClassName('summary')}`} onClick={() => handleTabClick('summary')}>Summary</span>
          {/* <span className={`sidebar__btn ${getTabClassName('tts')}`} onClick={() => handleTabClick('tts')}>Text To Speech</span> */}
          <span className={`sidebar__btn ${getTabClassName('cards')}`} onClick={() => handleTabClick('cards')}>Flash Cards</span>
          <span className={`sidebar__btn ${getTabClassName('ttt')}`} onClick={() => handleTabClick('ttt')}>Text To Text</span>
          <span className={`sidebar__btn ${getTabClassName('m')}`} onClick={() => handleTabClick('m')}>Match The Cards</span>          <span className={`sidebar__btn ${getTabClassName('htt')}`} onClick={() => handleTabClick('htt')}>Hand To Text</span>

      </div>
      <div className='sidebar__mobile__container'>
        <select value={activeTab} onChange={handleSelectChange}>
          <option value="notes">Notes</option>
          <option value="stt">Speech To Text</option>
          <option value="summary">Summary</option>
          <option value="tts">Text to Speech</option>
          <option value="cards">Flash Cards</option>
          <option value="ttt">Text To Text</option>
          <option value="m">Match The Cards</option>

          <option value="htt">Hand To Text</option>

        </select>
      </div>
    </div>
  )
}

export default Sidebar