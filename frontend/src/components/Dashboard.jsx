export const Dashboard = ({ data, deleteContact }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      {data.map((contact) => (
        <div className="contact-blok" key={contact._id}>
          <div className="blok-contact-info">
            <hr />
            <div className="blok-name">Name: {contact.contact.name}</div>
            <div className="blok-phoneNumber">
              Phone number: {contact.contact.phoneNumber}
            </div>
          </div>
          <div className="btn-delete">
            <button type="submit" onClick={() => deleteContact(contact._id)}>
              Delete
            </button>
            {/* <button type="submit" onClick={()=>editContact(contact._id)}>Edit</button> */}
          </div>
        </div>
      ))}
    </div>
  );
};
