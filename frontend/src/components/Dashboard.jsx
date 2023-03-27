export const Dashboard = ({ contacts, deleteContact }) => {
  // console.log("kontakta: "+contacts[0].contact.name);
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {contacts.map((contact) => (
        <div className="contact-block" key={contact._id}>
          <div className="block-contact-info">
            <div className="block-name">Name: {contact.contact.name}</div>
            <div className="block-phoneNumber">
              Phone number: {contact.contact.phoneNumber}
            </div>
          </div>
          <div className="btn-delete">
            <button type="submit" onClick={() => deleteContact(contact._id)}>
              Delete
            </button>
            {/* <button type="submit" onClick={()=>editContact(contact._id)}>Edit</button> */}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};
