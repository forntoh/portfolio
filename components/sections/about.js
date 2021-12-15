const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "/images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
  }

  return (
    <section className="section container">
      <div className="justify-between w-full grid grid-cols-8">
        <div className="col-span-2">
          <img
            className="rounded-full"
            src={profilepic}
            alt="Sonny's Profile Pic"
          />
        </div>
        <span />
        <div className="col-span-5 space-y-4">
          <h2>About Me</h2>
          <p>{bio}</p>
          <h3>Contact Details</h3>
          <div>
            <p>{name}</p>
            <p>{street}</p>
            <p>
              {city} {state}, {zip}
            </p>
            <p>{phone}</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
