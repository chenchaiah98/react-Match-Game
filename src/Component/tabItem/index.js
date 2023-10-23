import './index.css'

const TabItem = props => {
  const {tabDetails, clickTab, activeTabId} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    clickTab(tabId)
  }

  return (
    <li className="tabItem-container">
      <button
        type="button"
        className={
          tabId === activeTabId ? 'tabItem-button activeTab' : 'tabItem-button'
        }
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
