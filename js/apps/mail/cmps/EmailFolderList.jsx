export function EmailFolderList({ onSetCriteria , activeStatus }) {
  return (
    <section className="email-folder-list">
      <ul onClick={() => onSetCriteria({status: event.target.dataset.value})}>
        <li className={activeStatus === 'all' ? 'my-active': ''} data-value="all">All</li>
        <li className={activeStatus === 'inbox' ? 'my-active': ''} data-value="inbox">Inbox</li>
        <li className={activeStatus === 'sent' ? 'my-active': ''} data-value="sent">Sent</li>
        <li className={activeStatus === 'trash' ? 'my-active': ''} data-value="trash">Trash</li>
        <li className={activeStatus === 'draft' ? 'my-active': ''} data-value="draft">Draft</li>
      </ul>
    </section>
  )
}
