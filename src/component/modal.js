import { useState } from "react"

export default function Modal() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');

  const saveTitle = () => {

    if (id === '') {
      console.log('empty id')
    }
    if (title === '') {
      console.log('empty title')
    }

    console.log('id ' + id);
    console.log('title ' + title);

  }

  return <div className="modal fade" id="modalAdd" tabIndex="-1" aria-labelledby="modalAdd" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="modalAdd">Add Data</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} placeholder="ID" className="form-control" />
          <br />
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="form-control" />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" onClick={() => saveTitle()} className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
}